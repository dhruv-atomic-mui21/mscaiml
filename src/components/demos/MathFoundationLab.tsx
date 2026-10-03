'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CircleDot, TrendingUp, Compass, CheckCircle2, RotateCcw } from 'lucide-react';

export default function MathFoundationLab() {
  const [activeTab, setActiveTab] = useState<'venn' | 'leastsquares' | 'geometry'>('venn');

  // Venn Diagram State
  const [N, setN] = useState<number>(1000);
  const [nA, setNA] = useState<number>(280);
  const [nB, setNB] = useState<number>(300);
  const [nC, setNC] = useState<number>(420);
  const [nAB, setNAB] = useState<number>(80);
  const [nBC, setNBC] = useState<number>(50);
  const [nCA, setNCA] = useState<number>(100);
  const [nABC, setNABC] = useState<number>(30);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Least Squares State
  const [xValues, setXValues] = useState<string>('1, 2, 3, 4, 5');
  const [yValues, setYValues] = useState<string>('2, 4, 5, 4, 5');
  const regCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Geometry Solver State
  const [x1, setX1] = useState<number>(2);
  const [y1, setY1] = useState<number>(3);
  const [x2, setX2] = useState<number>(6);
  const [y2, setY2] = useState<number>(-5);
  const [ratioM, setRatioM] = useState<number>(1);
  const [ratioN, setRatioN] = useState<number>(2);

  // Venn Calculations
  const onlyABC = nABC;
  const onlyAB = Math.max(0, nAB - nABC);
  const onlyBC = Math.max(0, nBC - nABC);
  const onlyCA = Math.max(0, nCA - nABC);
  const onlyA = Math.max(0, nA - onlyAB - onlyCA - onlyABC);
  const onlyB = Math.max(0, nB - onlyAB - onlyBC - onlyABC);
  const onlyC = Math.max(0, nC - onlyBC - onlyCA - onlyABC);
  const unionTotal = onlyA + onlyB + onlyC + onlyAB + onlyBC + onlyCA + onlyABC;
  const noneCount = Math.max(0, N - unionTotal);
  const exactlyOne = onlyA + onlyB + onlyC;
  const exactlyTwo = onlyAB + onlyBC + onlyCA;
  const atLeastTwo = exactlyTwo + onlyABC;

  function loadVennPreset(preset: 'q8' | 'q9' | 'q10') {
    if (preset === 'q8') {
      setN(1000); setNA(280); setNB(300); setNC(420);
      setNAB(80); setNBC(50); setNCA(100); setNABC(30);
    } else if (preset === 'q9') {
      setN(1000); setNA(400); setNB(350); setNC(300);
      setNAB(150); setNBC(120); setNCA(100); setNABC(60);
    } else {
      setN(800); setNA(300); setNB(350); setNC(250);
      setNAB(100); setNBC(90); setNCA(80); setNABC(50);
    }
  }

  // Regression Calculation
  const xs = xValues.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
  const ys = yValues.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));

  let slope = 0;
  let intercept = 0;
  let sse = 0;
  let rSquared = 0;
  let regValid = xs.length === ys.length && xs.length >= 2;

  if (regValid) {
    const count = xs.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
    for (let i = 0; i < count; i++) {
      sumX += xs[i];
      sumY += ys[i];
      sumXY += xs[i] * ys[i];
      sumX2 += xs[i] * xs[i];
      sumY2 += ys[i] * ys[i];
    }
    const denom = count * sumX2 - sumX * sumX;
    if (Math.abs(denom) > 1e-9) {
      slope = (count * sumXY - sumX * sumY) / denom;
      intercept = (sumY - slope * sumX) / count;

      const yMean = sumY / count;
      let ssTot = 0;
      let ssRes = 0;
      for (let i = 0; i < count; i++) {
        const yPred = slope * xs[i] + intercept;
        ssRes += Math.pow(ys[i] - yPred, 2);
        ssTot += Math.pow(ys[i] - yMean, 2);
      }
      sse = ssRes;
      rSquared = ssTot > 0 ? Math.max(0, 1 - ssRes / ssTot) : 1;
    } else {
      regValid = false;
    }
  }

  // Draw Regression Canvas
  useEffect(() => {
    if (activeTab !== 'leastsquares') return;
    const canvas = regCanvasRef.current;
    if (!canvas || !regValid) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const minX = Math.min(...xs, 0);
    const maxX = Math.max(...xs) + 1;
    const minY = Math.min(...ys, 0);
    const maxY = Math.max(...ys) + 2;

    function toScreenX(x: number) {
      return ((x - minX) / (maxX - minX)) * (width - 60) + 30;
    }
    function toScreenY(y: number) {
      return height - 30 - ((y - minY) / (maxY - minY)) * (height - 60);
    }

    // Axes
    ctx.strokeStyle = '#232d42';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(30, toScreenY(0));
    ctx.lineTo(width - 30, toScreenY(0));
    ctx.stroke();

    // Regression Line
    const xStart = minX;
    const yStart = slope * xStart + intercept;
    const xEnd = maxX;
    const yEnd = slope * xEnd + intercept;

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(toScreenX(xStart), toScreenY(yStart));
    ctx.lineTo(toScreenX(xEnd), toScreenY(yEnd));
    ctx.stroke();

    // Points and residual lines
    for (let i = 0; i < xs.length; i++) {
      const px = toScreenX(xs[i]);
      const py = toScreenY(ys[i]);
      const predY = slope * xs[i] + intercept;
      const pyPred = toScreenY(predY);

      // Residual dashed line
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = '#ef4444';
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(px, pyPred);
      ctx.stroke();

      // Point circle
      ctx.setLineDash([]);
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }, [xs, ys, slope, intercept, regValid, activeTab]);

  // Geometry Calculations
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const slopeVal = dx !== 0 ? dy / dx : null;
  const lineEq = dx !== 0
    ? `${dy}x - ${dx}y + ${dx * y1 - dy * x1} = 0`
    : `x = ${x1}`;
  const sectionX = (ratioM * x2 + ratioN * x1) / (ratioM + ratioN);
  const sectionY = (ratioM * y2 + ratioN * y1) / (ratioM + ratioN);

  return (
    <div className="space-y-6">
      <div className="flex border-b border-[var(--border-color)] overflow-x-auto gap-2 pb-2">
        <button
          onClick={() => setActiveTab('venn')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'venn'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <CircleDot size={16} />
          3-Set Venn Diagram Solver
        </button>
        <button
          onClick={() => setActiveTab('leastsquares')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'leastsquares'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <TrendingUp size={16} />
          Least Squares Best-Fit Line
        </button>
        <button
          onClick={() => setActiveTab('geometry')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'geometry'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <Compass size={16} />
          2D Geometry & Section Formula
        </button>
      </div>

      {/* 1. 3-Set Venn Diagram */}
      {activeTab === 'venn' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Interactive 3-Set Venn Diagram & Disjoint Region Resolver
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Computes all 8 mutually exclusive disjoint subsets for Set Theory assignments Q8, Q9, and Q10.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => loadVennPreset('q8')}
              className="px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition"
            >
              Preset Q8 (Social Media Survey)
            </button>
            <button
              onClick={() => loadVennPreset('q9')}
              className="px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition"
            >
              Preset Q9 (Video Meet Survey)
            </button>
            <button
              onClick={() => loadVennPreset('q10')}
              className="px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition"
            >
              Preset Q10 (Tech Club Enrollments)
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-[11px] text-[var(--text-muted)] block font-semibold">Total Population N</label>
              <input
                type="number"
                value={N}
                onChange={e => setN(parseInt(e.target.value) || 0)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
              />
            </div>
            <div>
              <label className="text-[11px] text-[var(--text-muted)] block font-semibold">n(A)</label>
              <input
                type="number"
                value={nA}
                onChange={e => setNA(parseInt(e.target.value) || 0)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
              />
            </div>
            <div>
              <label className="text-[11px] text-[var(--text-muted)] block font-semibold">n(B)</label>
              <input
                type="number"
                value={nB}
                onChange={e => setNB(parseInt(e.target.value) || 0)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
              />
            </div>
            <div>
              <label className="text-[11px] text-[var(--text-muted)] block font-semibold">n(C)</label>
              <input
                type="number"
                value={nC}
                onChange={e => setNC(parseInt(e.target.value) || 0)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
              />
            </div>
            <div>
              <label className="text-[11px] text-[var(--text-muted)] block font-semibold">n(A ∩ B)</label>
              <input
                type="number"
                value={nAB}
                onChange={e => setNAB(parseInt(e.target.value) || 0)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
              />
            </div>
            <div>
              <label className="text-[11px] text-[var(--text-muted)] block font-semibold">n(B ∩ C)</label>
              <input
                type="number"
                value={nBC}
                onChange={e => setNBC(parseInt(e.target.value) || 0)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
              />
            </div>
            <div>
              <label className="text-[11px] text-[var(--text-muted)] block font-semibold">n(C ∩ A)</label>
              <input
                type="number"
                value={nCA}
                onChange={e => setNCA(parseInt(e.target.value) || 0)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
              />
            </div>
            <div>
              <label className="text-[11px] text-[var(--text-muted)] block font-semibold">n(A ∩ B ∩ C)</label>
              <input
                type="number"
                value={nABC}
                onChange={e => setNABC(parseInt(e.target.value) || 0)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
              />
            </div>
          </div>

          {/* SVG Venn Circles Visualizer */}
          <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl p-4 flex flex-col items-center">
            <svg width="400" height="260" viewBox="0 0 400 260" className="overflow-visible">
              {/* Outside frame */}
              <rect x="10" y="10" width="380" height="240" rx="8" fill="transparent" stroke="var(--border-color)" strokeWidth="1.5" />
              <text x="25" y="32" fontSize="12" fill="var(--text-muted)" fontWeight="bold">Universal Set U (N={N})</text>
              <text x="330" y="240" fontSize="12" fill="var(--text-secondary)">None: {noneCount}</text>

              {/* Circle A */}
              <circle cx="160" cy="115" r="70" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="2" />
              {/* Circle B */}
              <circle cx="240" cy="115" r="70" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2" />
              {/* Circle C */}
              <circle cx="200" cy="175" r="70" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="2" />

              {/* Labels & Counts */}
              <text x="120" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--text-primary)">
                A: {onlyA}
              </text>
              <text x="280" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--text-primary)">
                B: {onlyB}
              </text>
              <text x="200" y="225" textAnchor="middle" fontSize="12" fontWeight="bold" fill="var(--text-primary)">
                C: {onlyC}
              </text>

              {/* Pairwise Intersections */}
              <text x="200" y="90" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
                A∩B: {onlyAB}
              </text>
              <text x="160" y="165" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
                A∩C: {onlyCA}
              </text>
              <text x="240" y="165" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">
                B∩C: {onlyBC}
              </text>

              {/* Center Triple Intersection */}
              <text x="200" y="138" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#ef4444">
                {onlyABC}
              </text>
            </svg>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-4 font-mono text-xs">
              <div className="p-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                <span className="text-[var(--text-muted)] block text-[10px]">Union Total</span>
                <span className="font-bold text-[var(--accent)] text-sm">{unionTotal}</span>
              </div>
              <div className="p-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                <span className="text-[var(--text-muted)] block text-[10px]">Exactly One</span>
                <span className="font-bold text-emerald-400 text-sm">{exactlyOne}</span>
              </div>
              <div className="p-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                <span className="text-[var(--text-muted)] block text-[10px]">At Least Two</span>
                <span className="font-bold text-amber-400 text-sm">{atLeastTwo}</span>
              </div>
              <div className="p-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                <span className="text-[var(--text-muted)] block text-[10px]">Outside (None)</span>
                <span className="font-bold text-red-400 text-sm">{noneCount}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Least Squares Regression */}
      {activeTab === 'leastsquares' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Least Squares Linear Regression Simulator & Residual Error Lines
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Fits the optimal line <code className="font-mono text-[var(--accent)]">y = mx + c</code> by minimizing the sum of squared vertical errors <code className="font-mono text-red-400">∑(yi - ŷi)²</code>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                X Values (Comma Separated)
              </label>
              <input
                type="text"
                value={xValues}
                onChange={e => setXValues(e.target.value)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                Y Values (Comma Separated)
              </label>
              <input
                type="text"
                value={yValues}
                onChange={e => setYValues(e.target.value)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] font-mono"
              />
            </div>
          </div>

          {/* Canvas Viewport */}
          <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl p-4 flex flex-col items-center">
            <div className="w-full flex items-center justify-between text-xs text-[var(--text-secondary)] mb-2 px-2">
              <span className="font-mono text-[var(--accent)] font-semibold">
                Best Fit: y = {slope.toFixed(3)}x {intercept >= 0 ? `+ ${intercept.toFixed(3)}` : `- ${Math.abs(intercept).toFixed(3)}`}
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span> Data Point (xi, yi)
                </span>
                <span className="flex items-center gap-1 text-red-400">
                  <span className="w-2.5 h-2.5 border-b-2 border-red-500"></span> Residual (yi - ŷi)
                </span>
              </div>
            </div>

            <canvas
              ref={regCanvasRef}
              width={600}
              height={260}
              className="w-full max-w-[600px] h-[260px] rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-4 font-mono text-xs">
              <div className="p-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                <span className="text-[var(--text-muted)] block text-[10px]">Slope (m)</span>
                <span className="font-bold text-[var(--accent)] text-sm">{slope.toFixed(4)}</span>
              </div>
              <div className="p-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                <span className="text-[var(--text-muted)] block text-[10px]">Intercept (c)</span>
                <span className="font-bold text-[var(--accent)] text-sm">{intercept.toFixed(4)}</span>
              </div>
              <div className="p-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                <span className="text-[var(--text-muted)] block text-[10px]">R² Coefficient</span>
                <span className="font-bold text-emerald-400 text-sm">{(rSquared * 100).toFixed(1)}%</span>
              </div>
              <div className="p-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                <span className="text-[var(--text-muted)] block text-[10px]">Sum Sq Errors (SSE)</span>
                <span className="font-bold text-amber-400 text-sm">{sse.toFixed(4)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. 2D Coordinate Geometry Solver */}
      {activeTab === 'geometry' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              2D Analytical Geometry & Section Ratio Solver
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Computes distance, midpoint, slope, standard line equation, and internally dividing section points for any coordinate pair A(x1, y1) and B(x2, y2).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg space-y-2">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Point A (x1, y1)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  value={x1}
                  onChange={e => setX1(parseFloat(e.target.value) || 0)}
                  placeholder="x1"
                  className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                />
                <input
                  type="number"
                  value={y1}
                  onChange={e => setY1(parseFloat(e.target.value) || 0)}
                  placeholder="y1"
                  className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                />
              </div>
            </div>

            <div className="p-4 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg space-y-2">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Point B (x2, y2)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  value={x2}
                  onChange={e => setX2(parseFloat(e.target.value) || 0)}
                  placeholder="x2"
                  className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                />
                <input
                  type="number"
                  value={y2}
                  onChange={e => setY2(parseFloat(e.target.value) || 0)}
                  placeholder="y2"
                  className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                />
              </div>
            </div>

            <div className="p-4 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg space-y-2">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Section Ratio (m : n)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  value={ratioM}
                  onChange={e => setRatioM(parseFloat(e.target.value) || 1)}
                  placeholder="m"
                  className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                />
                <input
                  type="number"
                  value={ratioN}
                  onChange={e => setRatioN(parseFloat(e.target.value) || 1)}
                  placeholder="n"
                  className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-lg">
              <span className="text-[var(--text-muted)] block text-[10px]">Euclidean Distance d(A,B)</span>
              <span className="font-bold text-[var(--accent)] text-sm mt-1 block">{dist.toFixed(4)}</span>
              <span className="text-[10px] text-[var(--text-muted)]">√({(dx * dx + dy * dy).toFixed(0)})</span>
            </div>

            <div className="p-3 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-lg">
              <span className="text-[var(--text-muted)] block text-[10px]">Midpoint M</span>
              <span className="font-bold text-emerald-400 text-sm mt-1 block">
                ({midX.toFixed(2)}, {midY.toFixed(2)})
              </span>
              <span className="text-[10px] text-[var(--text-muted)]">((x1+x2)/2, (y1+y2)/2)</span>
            </div>

            <div className="p-3 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-lg">
              <span className="text-[var(--text-muted)] block text-[10px]">Slope m</span>
              <span className="font-bold text-amber-400 text-sm mt-1 block">
                {slopeVal !== null ? slopeVal.toFixed(4) : 'Undefined (Vertical)'}
              </span>
              <span className="text-[10px] text-[var(--text-muted)]">Δy / Δx</span>
            </div>

            <div className="p-3 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-lg">
              <span className="text-[var(--text-muted)] block text-[10px]">Section Point P ({ratioM}:{ratioN})</span>
              <span className="font-bold text-purple-400 text-sm mt-1 block">
                ({sectionX.toFixed(2)}, {sectionY.toFixed(2)})
              </span>
              <span className="text-[10px] text-[var(--text-muted)]">(mx2+nx1)/(m+n)</span>
            </div>
          </div>

          <div className="p-3.5 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-lg font-mono text-xs text-[var(--text-primary)]">
            <span className="text-[var(--text-muted)] block text-[10px] mb-1">Standard Line Equation (Ax + By + C = 0)</span>
            <span className="text-sm font-bold text-[var(--accent)]">{lineEq}</span>
          </div>
        </div>
      )}
    </div>
  );
}
