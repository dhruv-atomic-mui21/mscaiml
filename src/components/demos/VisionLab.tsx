'use client';

import React, { useState } from 'react';
import { Eye, Sliders, Cpu } from 'lucide-react';

export default function VisionLab() {
  const [kernelType, setKernelType] = useState<'sobelX' | 'sobelY' | 'gaussian' | 'sharpen'>('sobelX');

  const KERNELS: Record<string, { name: string; matrix: number[][]; desc: string }> = {
    sobelX: {
      name: 'Sobel Horizontal Gradient (Gx)',
      matrix: [
        [-1, 0, 1],
        [-2, 0, 2],
        [-1, 0, 1]
      ],
      desc: 'Detects vertical edges by computing the horizontal intensity derivative ∂I/∂x.'
    },
    sobelY: {
      name: 'Sobel Vertical Gradient (Gy)',
      matrix: [
        [-1, -2, -1],
        [ 0,  0,  0],
        [ 1,  2,  1]
      ],
      desc: 'Detects horizontal edges by computing the vertical intensity derivative ∂I/∂y.'
    },
    gaussian: {
      name: 'Gaussian Blur 3x3 (1/16 Normalization)',
      matrix: [
        [1, 2, 1],
        [2, 4, 2],
        [1, 2, 1]
      ],
      desc: 'Low-pass spatial filter for attenuating high-frequency noise prior to edge detection.'
    },
    sharpen: {
      name: 'Laplacian Sharpening Filter',
      matrix: [
        [ 0, -1,  0],
        [-1,  5, -1],
        [ 0, -1,  0]
      ],
      desc: 'Enhances high-frequency spatial gradients and boundaries.'
    }
  };

  const curr = KERNELS[kernelType];

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
      <div>
        <h3 className="text-base font-semibold text-[var(--text-primary)]">
          2D Spatial Convolution & Kernel Matrix Visualizer
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          Explore spatial discrete filtering: <code className="font-mono text-[var(--accent)]">g(x,y) = ∑∑ f(x-i, y-j) * h(i,j)</code> used in edge detection and feature extraction.
        </p>
      </div>

      <div className="max-w-md">
        <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
          Select Convolution Kernel
        </label>
        <select
          value={kernelType}
          onChange={e => setKernelType(e.target.value as any)}
          className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
        >
          <option value="sobelX">Sobel X (Horizontal Gradient Gx)</option>
          <option value="sobelY">Sobel Y (Vertical Gradient Gy)</option>
          <option value="gaussian">Gaussian 3x3 Low-Pass Filter</option>
          <option value="sharpen">Laplacian Sharpening Filter</option>
        </select>
      </div>

      <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl p-6 flex flex-col items-center gap-4">
        <div className="text-xs font-mono text-[var(--accent)] font-semibold">{curr.name}</div>

        <div className="grid grid-cols-3 gap-2 font-mono">
          {curr.matrix.map((row, rIdx) => (
            <React.Fragment key={rIdx}>
              {row.map((val, cIdx) => (
                <div
                  key={cIdx}
                  className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-sm border ${
                    val > 0
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                      : val < 0
                      ? 'bg-red-500/15 border-red-500/40 text-red-300'
                      : 'bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-muted)]'
                  }`}
                >
                  {val > 0 ? `+${val}` : val}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        <p className="text-xs text-[var(--text-secondary)] text-center max-w-md mt-2">
          {curr.desc}
        </p>
      </div>
    </div>
  );
}
