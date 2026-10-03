'use client';

import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Calculator, Binary, RefreshCw, Play, Info } from 'lucide-react';

export default function ScientificComputingLab() {
  const [activeTab, setActiveTab] = useState<'rootfinder' | 'ieee754'>('rootfinder');

  // Root Finder State
  const [method, setMethod] = useState<'newton' | 'bisection' | 'secant' | 'regula'>('newton');
  const [funcChoice, setFuncChoice] = useState<'q6' | 'q3' | 'q2'>('q6');
  const [x0, setX0] = useState<number>(2.0);
  const [x1, setX1] = useState<number>(3.0);
  const [tolerance, setTolerance] = useState<number>(1e-5);
  const [maxIterations, setMaxIterations] = useState<number>(8);
  const [iterationStep, setIterationStep] = useState<number>(0);
  const [iterationsData, setIterationsData] = useState<any[]>([]);

  // IEEE-754 State
  const [ieeeInput, setIeeeInput] = useState<number>(13.25);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Define mathematical functions
  function getFunc(choice: string) {
    if (choice === 'q6') {
      return {
        name: 'f(x) = x³ - 2x - 5',
        f: (x: number) => Math.pow(x, 3) - 2 * x - 5,
        df: (x: number) => 3 * Math.pow(x, 2) - 2,
        domain: [1.0, 3.2] as [number, number]
      };
    } else if (choice === 'q3') {
      return {
        name: 'f(x) = x³ - 15.2x + 13.2',
        f: (x: number) => Math.pow(x, 3) - 15.2 * x + 13.2,
        df: (x: number) => 3 * Math.pow(x, 2) - 15.2,
        domain: [0.0, 2.5] as [number, number]
      };
    } else {
      return {
        name: 'f(x) = x³ - 9x + 1',
        f: (x: number) => Math.pow(x, 3) - 9 * x + 1,
        df: (x: number) => 3 * Math.pow(x, 2) - 9,
        domain: [2.0, 3.5] as [number, number]
      };
    }
  }

  // Calculate iterative root data
  useEffect(() => {
    const fnObj = getFunc(funcChoice);
    const f = fnObj.f;
    const df = fnObj.df;
    const rows: any[] = [];

    if (method === 'newton') {
      let currX = x0;
      for (let k = 0; k < maxIterations; k++) {
        const fx = f(currX);
        const dfx = df(currX);
        if (Math.abs(dfx) < 1e-12) break;
        const nextX = currX - (fx / dfx);
        rows.push({
          iter: k,
          xk: currX,
          fx: fx,
          dfx: dfx,
          nextX: nextX,
          err: Math.abs(nextX - currX)
        });
        if (Math.abs(nextX - currX) < tolerance) break;
        currX = nextX;
      }
    } else if (method === 'bisection') {
      let a = x0;
      let b = x1;
      for (let k = 0; k < maxIterations; k++) {
        const c = (a + b) / 2;
        const fa = f(a);
        const fc = f(c);
        rows.push({
          iter: k + 1,
          a: a,
          b: b,
          c: c,
          fc: fc,
          err: Math.abs(b - a) / 2
        });
        if (Math.abs(b - a) < tolerance || Math.abs(fc) < 1e-9) break;
        if (fa * fc < 0) b = c;
        else a = c;
      }
    } else if (method === 'secant') {
      let p0 = x0;
      let p1 = x1;
      for (let k = 0; k < maxIterations; k++) {
        const f0 = f(p0);
        const f1 = f(p1);
        if (Math.abs(f1 - f0) < 1e-12) break;
        const p2 = p1 - (f1 * (p1 - p0)) / (f1 - f0);
        rows.push({
          iter: k + 1,
          p0: p0,
          p1: p1,
          p2: p2,
          fp2: f(p2),
          err: Math.abs(p2 - p1)
        });
        if (Math.abs(p2 - p1) < tolerance) break;
        p0 = p1;
        p1 = p2;
      }
    } else {
      // Regula-Falsi
      let a = x0;
      let b = x1;
      for (let k = 0; k < maxIterations; k++) {
        const fa = f(a);
        const fb = f(b);
        const c = (a * fb - b * fa) / (fb - fa);
        const fc = f(c);
        rows.push({
          iter: k + 1,
          a: a,
          b: b,
          c: c,
          fc: fc,
          err: Math.abs(fc)
        });
        if (Math.abs(fc) < tolerance) break;
        if (fa * fc < 0) b = c;
        else a = c;
      }
    }

    setIterationsData(rows);
    setIterationStep(Math.min(iterationStep, Math.max(0, rows.length - 1)));
  }, [method, funcChoice, x0, x1, tolerance, maxIterations]);

  // Draw Function Curve & Iteration on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const fnObj = getFunc(funcChoice);
    const [minX, maxX] = fnObj.domain;

    // Find min and max Y for scaling
    let minY = -10;
    let maxY = 15;

    function toScreenX(x: number) {
      return ((x - minX) / (maxX - minX)) * (width - 60) + 30;
    }

    function toScreenY(y: number) {
      return height - 30 - ((y - minY) / (maxY - minY)) * (height - 60);
    }

    // Draw Grid & Axes
    ctx.strokeStyle = '#232d42';
    ctx.lineWidth = 1;

    // Horizontal zero axis
    const zeroY = toScreenY(0);
    ctx.beginPath();
    ctx.moveTo(30, zeroY);
    ctx.lineTo(width - 30, zeroY);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Plot function curve
    ctx.beginPath();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    const steps = 120;
    for (let i = 0; i <= steps; i++) {
      const xVal = minX + (i / steps) * (maxX - minX);
      const yVal = fnObj.f(xVal);
      const sx = toScreenX(xVal);
      const sy = toScreenY(Math.max(minY, Math.min(maxY, yVal)));
      if (i === 0) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.stroke();

    // Draw Iteration Visualizations
    const current = iterationsData[iterationStep];
    if (current) {
      if (method === 'newton') {
        const xk = current.xk;
        const fx = current.fx;
        const nextX = current.nextX;

        // Point (xk, f(xk))
        const sx = toScreenX(xk);
        const sy = toScreenY(fx);
        const snextX = toScreenX(nextX);

        // Vertical drop line to curve
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = '#94a3b8';
        ctx.beginPath();
        ctx.moveTo(sx, zeroY);
        ctx.lineTo(sx, sy);
        ctx.stroke();

        // Tangent line to nextX
        ctx.setLineDash([]);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(snextX, zeroY);
        ctx.stroke();

        // Point dots
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(sx, sy, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(snextX, zeroY, 5, 0, Math.PI * 2);
        ctx.fill();
      } else if (method === 'bisection') {
        const sa = toScreenX(current.a);
        const sb = toScreenX(current.b);
        const sc = toScreenX(current.c);

        // Interval brackets
        ctx.strokeStyle = '#f59e0b';
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(sa, 30);
        ctx.lineTo(sa, height - 30);
        ctx.moveTo(sb, 30);
        ctx.lineTo(sb, height - 30);
        ctx.stroke();

        // Midpoint c
        ctx.strokeStyle = '#10b981';
        ctx.setLineDash([]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sc, zeroY - 15);
        ctx.lineTo(sc, zeroY + 15);
        ctx.stroke();

        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(sc, zeroY, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [iterationsData, iterationStep, method, funcChoice]);

  // IEEE-754 Computation
  function computeIEEE754(val: number) {
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);
    view.setFloat32(0, val, false); // big-endian
    const intBits = view.getUint32(0, false);

    const binaryStr = intBits.toString(2).padStart(32, '0');
    const signBit = binaryStr[0];
    const expBits = binaryStr.slice(1, 9);
    const mantissaBits = binaryStr.slice(9);
    const expVal = parseInt(expBits, 2);
    const actualExp = expVal - 127;

    return {
      signBit,
      expBits,
      mantissaBits,
      expVal,
      actualExp
    };
  }

  const ieee = computeIEEE754(ieeeInput);

  return (
    <div className="space-y-6">
      <div className="flex border-b border-[var(--border-color)] overflow-x-auto gap-2 pb-2">
        <button
          onClick={() => setActiveTab('rootfinder')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'rootfinder'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <LineChart size={16} />
          Interactive Root Finder & Curve Plotter
        </button>
        <button
          onClick={() => setActiveTab('ieee754')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'ieee754'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <Binary size={16} />
          IEEE-754 Precision & Error Lab
        </button>
      </div>

      {activeTab === 'rootfinder' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Continuous Root Finding Simulator with Geometric Convergence Plotting
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Visualize tangent approximations (Newton-Raphson), interval bisections, and secant trajectories. Solve actual assignment equations step-by-step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Method
              </label>
              <select
                value={method}
                onChange={e => setMethod(e.target.value as any)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="newton">Newton-Raphson (Tangent)</option>
                <option value="bisection">Bisection (Bracketing)</option>
                <option value="secant">Secant Method</option>
                <option value="regula">Regula-Falsi (False Position)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Assignment Problem
              </label>
              <select
                value={funcChoice}
                onChange={e => {
                  const choice = e.target.value as any;
                  setFuncChoice(choice);
                  if (choice === 'q6') { setX0(2.0); setX1(3.0); }
                  else if (choice === 'q3') { setX0(0.5); setX1(1.8); }
                  else { setX0(2.5); setX1(3.2); }
                }}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="q6">Q6: f(x) = x³ - 2x - 5</option>
                <option value="q3">Q3: f(x) = x³ - 15.2x + 13.2</option>
                <option value="q2">Q2: f(x) = x³ - 9x + 1</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                {method === 'newton' ? 'Initial Guess x0' : 'Left Bracket a'}
              </label>
              <input
                type="number"
                step="0.1"
                value={x0}
                onChange={e => setX0(parseFloat(e.target.value) || 0)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                {method === 'newton' ? 'Tolerance ε' : 'Right Bracket b'}
              </label>
              {method === 'newton' ? (
                <input
                  type="number"
                  step="0.00001"
                  value={tolerance}
                  onChange={e => setTolerance(parseFloat(e.target.value) || 1e-5)}
                  className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] font-mono"
                />
              ) : (
                <input
                  type="number"
                  step="0.1"
                  value={x1}
                  onChange={e => setX1(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] font-mono"
                />
              )}
            </div>
          </div>

          {/* Canvas & Live Plotter */}
          <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl p-4 flex flex-col items-center">
            <div className="w-full flex items-center justify-between text-xs text-[var(--text-secondary)] mb-2 px-2">
              <span className="font-mono text-[var(--accent)] font-semibold">{getFunc(funcChoice).name}</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span> Current Estimate
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span> Tangent / Bracket
                </span>
              </div>
            </div>

            <canvas
              ref={canvasRef}
              width={640}
              height={260}
              className="w-full max-w-[640px] h-[260px] rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]"
            />

            {/* Stepper Controls */}
            <div className="flex items-center gap-3 mt-4">
              <button
                disabled={iterationStep <= 0}
                onClick={() => setIterationStep(prev => Math.max(0, prev - 1))}
                className="px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] disabled:opacity-40"
              >
                Previous Step
              </button>
              <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                Step {iterationStep + 1} of {iterationsData.length}
              </span>
              <button
                disabled={iterationStep >= iterationsData.length - 1}
                onClick={() => setIterationStep(prev => Math.min(iterationsData.length - 1, prev + 1))}
                className="px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] disabled:opacity-40"
              >
                Next Step
              </button>
            </div>
          </div>

          {/* Iteration Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[var(--bg-tertiary)] text-[var(--text-muted)] border-b border-[var(--border-color)]">
                <tr>
                  <th className="p-2.5">k</th>
                  {method === 'newton' && (
                    <>
                      <th className="p-2.5">x_k</th>
                      <th className="p-2.5">f(x_k)</th>
                      <th className="p-2.5">f&apos;(x_k)</th>
                      <th className="p-2.5">x_{'{k+1}'}</th>
                      <th className="p-2.5">Error |Δx|</th>
                    </>
                  )}
                  {method === 'bisection' && (
                    <>
                      <th className="p-2.5">a</th>
                      <th className="p-2.5">b</th>
                      <th className="p-2.5">c (midpoint)</th>
                      <th className="p-2.5">f(c)</th>
                      <th className="p-2.5">Bracket Width (b-a)/2</th>
                    </>
                  )}
                  {(method === 'secant' || method === 'regula') && (
                    <>
                      <th className="p-2.5">p_{'{k-1}'}</th>
                      <th className="p-2.5">p_k</th>
                      <th className="p-2.5">p_{'{k+1}'}</th>
                      <th className="p-2.5">f(p_{'{k+1}'})</th>
                      <th className="p-2.5">Error</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {iterationsData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition ${idx === iterationStep ? 'bg-[var(--accent-subtle)] text-[var(--accent)] font-bold' : 'hover:bg-[var(--bg-tertiary)]'}`}
                  >
                    <td className="p-2.5">{row.iter}</td>
                    {method === 'newton' && (
                      <>
                        <td className="p-2.5">{row.xk.toFixed(6)}</td>
                        <td className="p-2.5">{row.fx.toFixed(6)}</td>
                        <td className="p-2.5">{row.dfx.toFixed(6)}</td>
                        <td className="p-2.5 text-emerald-400 font-bold">{row.nextX.toFixed(6)}</td>
                        <td className="p-2.5 text-[var(--text-muted)]">{row.err.toExponential(2)}</td>
                      </>
                    )}
                    {method === 'bisection' && (
                      <>
                        <td className="p-2.5">{row.a.toFixed(5)}</td>
                        <td className="p-2.5">{row.b.toFixed(5)}</td>
                        <td className="p-2.5 text-emerald-400 font-bold">{row.c.toFixed(5)}</td>
                        <td className="p-2.5">{row.fc.toFixed(5)}</td>
                        <td className="p-2.5 text-[var(--text-muted)]">{row.err.toFixed(5)}</td>
                      </>
                    )}
                    {(method === 'secant' || method === 'regula') && (
                      <>
                        <td className="p-2.5">{(row.p0 || row.a).toFixed(5)}</td>
                        <td className="p-2.5">{(row.p1 || row.b).toFixed(5)}</td>
                        <td className="p-2.5 text-emerald-400 font-bold">{(row.p2 || row.c).toFixed(5)}</td>
                        <td className="p-2.5">{(row.fp2 || row.fc).toFixed(5)}</td>
                        <td className="p-2.5 text-[var(--text-muted)]">{row.err.toExponential(2)}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* IEEE-754 Precision Lab */}
      {activeTab === 'ieee754' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              IEEE-754 Floating-Point Representation & Machine Precision Lab
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Analyze how floating point numbers are mapped to 32-bit words (1-bit sign, 8-bit biased exponent, 23-bit mantissa) and why roundoff errors occur in scientific computations.
            </p>
          </div>

          <div className="max-w-xs">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Enter Decimal Float Value
            </label>
            <input
              type="number"
              step="0.001"
              value={ieeeInput}
              onChange={e => setIeeeInput(parseFloat(e.target.value) || 0)}
              className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] font-mono"
            />
          </div>

          <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl p-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              32-Bit Single Precision Layout (Big Endian)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 text-center font-mono">
              {/* Sign */}
              <div className="md:col-span-1 border border-red-500/40 bg-red-500/10 rounded-lg p-2.5">
                <div className="text-[10px] text-red-400 font-bold">SIGN (1b)</div>
                <div className="text-base font-bold text-red-300 mt-1">{ieee.signBit}</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-0.5">{ieee.signBit === '0' ? '+1' : '-1'}</div>
              </div>

              {/* Exponent */}
              <div className="md:col-span-4 border border-amber-500/40 bg-amber-500/10 rounded-lg p-2.5">
                <div className="text-[10px] text-amber-400 font-bold">EXPONENT (8b, Bias 127)</div>
                <div className="text-base font-bold text-amber-300 mt-1 tracking-widest">{ieee.expBits}</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">
                  {ieee.expVal} - 127 = 2^{ieee.actualExp}
                </div>
              </div>

              {/* Mantissa */}
              <div className="md:col-span-7 border border-emerald-500/40 bg-emerald-500/10 rounded-lg p-2.5 overflow-hidden">
                <div className="text-[10px] text-emerald-400 font-bold">MANTISSA / FRACTION (23b)</div>
                <div className="text-sm font-bold text-emerald-300 mt-1 truncate tracking-wider">{ieee.mantissaBits}</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Implicit leading 1.f</div>
              </div>
            </div>

            {/* Formula reconstruction */}
            <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-xs font-mono space-y-1">
              <div className="text-[var(--text-muted)]">// IEEE-754 Valuation Formula:</div>
              <div className="text-[var(--accent)] font-semibold">
                Value = (-1)^{ieee.signBit} &times; (1 + Mantissa) &times; 2^{'{'}{ieee.actualExp}{'}'}
              </div>
              <div className="text-emerald-400 font-bold pt-1">
                = {ieeeInput}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
