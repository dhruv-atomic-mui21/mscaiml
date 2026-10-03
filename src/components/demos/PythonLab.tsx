'use client';

import React, { useState } from 'react';
import { Terminal, Grid, Triangle } from 'lucide-react';

export default function PythonLab() {
  const [activeTab, setActiveTab] = useState<'pattern' | 'pascal'>('pattern');

  // Pattern Generator State
  const [patternType, setPatternType] = useState<'pyramid' | 'floyd' | 'diamond' | 'hollow'>('pyramid');
  const [patternRows, setPatternRows] = useState<number>(5);

  // Pascal State
  const [pascalRows, setPascalRows] = useState<number>(5);

  function generatePattern(): string {
    const n = patternRows;
    const lines: string[] = [];

    if (patternType === 'pyramid') {
      for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const stars = '* '.repeat(i);
        lines.push(spaces + stars);
      }
    } else if (patternType === 'floyd') {
      let num = 1;
      for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
          row += `${num} `;
          num++;
        }
        lines.push(row.trim());
      }
    } else if (patternType === 'diamond') {
      for (let i = 1; i <= n; i++) {
        lines.push(' '.repeat(n - i) + '* '.repeat(i));
      }
      for (let i = n - 1; i >= 1; i--) {
        lines.push(' '.repeat(n - i) + '* '.repeat(i));
      }
    } else {
      // Hollow Square
      for (let i = 1; i <= n; i++) {
        if (i === 1 || i === n) {
          lines.push('* '.repeat(n));
        } else {
          lines.push('* ' + '  '.repeat(n - 2) + '* ');
        }
      }
    }

    return lines.join('\n');
  }

  function generatePascal(): number[][] {
    const triangle: number[][] = [];
    for (let i = 0; i < pascalRows; i++) {
      const row = [1];
      for (let j = 1; j < i; j++) {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
      if (i > 0) row.push(1);
      triangle.push(row);
    }
    return triangle;
  }

  return (
    <div className="space-y-6">
      <div className="flex border-b border-[var(--border-color)] overflow-x-auto gap-2 pb-2">
        <button
          onClick={() => setActiveTab('pattern')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'pattern'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <Grid size={16} />
          Pattern Logic & Nested Loops Simulator
        </button>
        <button
          onClick={() => setActiveTab('pascal')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'pascal'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <Triangle size={16} />
          Pascal Triangle Generator
        </button>
      </div>

      {activeTab === 'pattern' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Interactive Nested Loop Pattern Generator
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Select classic loop structures for assignments Q19-Q24 to test mathematical index relations and formatted output.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                Pattern Architecture
              </label>
              <select
                value={patternType}
                onChange={e => setPatternType(e.target.value as any)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="pyramid">Symmetric Star Pyramid</option>
                <option value="floyd">Floyd&apos;s Number Triangle</option>
                <option value="diamond">Diamond Geometry Pattern</option>
                <option value="hollow">Hollow Square Boundary</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                Number of Rows (N)
              </label>
              <input
                type="number"
                min="2"
                max="10"
                value={patternRows}
                onChange={e => setPatternRows(Math.max(2, Math.min(10, parseInt(e.target.value) || 2)))}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] font-mono"
              />
            </div>
          </div>

          <div className="p-5 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl font-mono text-sm leading-relaxed text-emerald-400 whitespace-pre overflow-x-auto">
            {generatePattern()}
          </div>
        </div>
      )}

      {activeTab === 'pascal' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Combinatorial Pascal&apos;s Triangle Generator
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Computes binomial coefficients C(n, k) dynamically using the recurrence relation C(n, k) = C(n-1, k-1) + C(n-1, k).
            </p>
          </div>

          <div className="max-w-xs">
            <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
              Triangle Depth (Rows)
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={pascalRows}
              onChange={e => setPascalRows(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
              className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] font-mono"
            />
          </div>

          <div className="p-6 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl flex flex-col items-center gap-2 font-mono text-xs overflow-x-auto">
            {generatePascal().map((row, rIdx) => (
              <div key={rIdx} className="flex gap-2 justify-center">
                {row.map((val, cIdx) => (
                  <span
                    key={cIdx}
                    className="w-8 h-8 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center font-bold text-[var(--accent)]"
                  >
                    {val}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
