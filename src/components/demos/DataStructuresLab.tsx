'use client';

import React, { useState } from 'react';
import { Layers, Database, GitBranch, ArrowRight, Play, RotateCcw, AlertTriangle, CheckCircle, Code } from 'lucide-react';

interface BSTNode {
  val: number;
  left: BSTNode | null;
  right: BSTNode | null;
  x: number;
  y: number;
}

export default function DataStructuresLab() {
  const [activeTab, setActiveTab] = useState<'memory' | 'bst' | 'stackqueue' | 'complex'>('memory');

  // Memory Model State
  const [memSize, setMemSize] = useState<number>(4);
  const [isAllocated, setIsAllocated] = useState<boolean>(true);
  const [isDangling, setIsDangling] = useState<boolean>(false);
  const [isNullptr, setIsNullptr] = useState<boolean>(false);

  // BST State
  const [bstInput, setBstInput] = useState<string>('50, 30, 70, 20, 40, 60, 80');
  const [bstTree, setBstTree] = useState<BSTNode | null>(() => buildInitialBST([50, 30, 70, 20, 40, 60, 80]));
  const [traversalResult, setTraversalResult] = useState<string>('');
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Stack/Queue State
  const [containerType, setContainerType] = useState<'stack' | 'queue'>('stack');
  const [elements, setElements] = useState<number[]>([10, 20, 30]);
  const [elementInput, setElementInput] = useState<string>('40');

  // Complex Overloading State
  const [r1, setR1] = useState<number>(3);
  const [i1, setI1] = useState<number>(4);
  const [r2, setR2] = useState<number>(1);
  const [i2, setI2] = useState<number>(-2);
  const [complexOp, setComplexOp] = useState<'add' | 'sub' | 'mul'>('add');

  function handleAlloc() {
    setIsAllocated(true);
    setIsDangling(false);
    setIsNullptr(false);
  }

  function handleFree() {
    if (!isAllocated) return;
    setIsAllocated(false);
    setIsDangling(true);
    setIsNullptr(false);
  }

  function handleNullify() {
    setIsDangling(false);
    setIsNullptr(true);
  }

  function insertBST(root: BSTNode | null, val: number): BSTNode {
    if (!root) return { val, left: null, right: null, x: 0, y: 0 };
    if (val < root.val) root.left = insertBST(root.left, val);
    else if (val > root.val) root.right = insertBST(root.right, val);
    return root;
  }

  function layoutBST(root: BSTNode | null, depth = 0, left = 20, right = 480): void {
    if (!root) return;
    root.x = (left + right) / 2;
    root.y = 40 + depth * 55;
    if (root.left) layoutBST(root.left, depth + 1, left, root.x);
    if (root.right) layoutBST(root.right, depth + 1, root.x, right);
  }

  function buildInitialBST(arr: number[]): BSTNode | null {
    let root: BSTNode | null = null;
    for (const v of arr) {
      root = insertBST(root, v);
    }
    layoutBST(root);
    return root;
  }

  function handleRebuildBST() {
    const nums = bstInput
      .split(',')
      .map(s => parseInt(s.trim()))
      .filter(n => !isNaN(n));
    if (nums.length === 0) return;
    const tree = buildInitialBST(nums);
    setBstTree(tree);
    setTraversalResult('');
    setActiveNode(null);
  }

  function runTraversal(type: 'inorder' | 'preorder' | 'postorder') {
    if (!bstTree) return;
    const res: number[] = [];
    
    function inorder(node: BSTNode | null) {
      if (!node) return;
      inorder(node.left);
      res.push(node.val);
      inorder(node.right);
    }

    function preorder(node: BSTNode | null) {
      if (!node) return;
      res.push(node.val);
      preorder(node.left);
      preorder(node.right);
    }

    function postorder(node: BSTNode | null) {
      if (!node) return;
      postorder(node.left);
      postorder(node.right);
      res.push(node.val);
    }

    if (type === 'inorder') inorder(bstTree);
    else if (type === 'preorder') preorder(bstTree);
    else postorder(bstTree);

    setTraversalResult(`${type.toUpperCase()} Sequence: ${res.join(' -> ')}`);

    // Animate traversal sequence
    res.forEach((val, idx) => {
      setTimeout(() => {
        setActiveNode(val);
      }, idx * 400);
    });
    setTimeout(() => {
      setActiveNode(null);
    }, res.length * 400 + 400);
  }

  function renderTreeSVG(node: BSTNode | null): React.ReactNode {
    if (!node) return null;
    return (
      <g key={node.val}>
        {node.left && (
          <line
            x1={node.x}
            y1={node.y}
            x2={node.left.x}
            y2={node.left.y}
            stroke="var(--border-color)"
            strokeWidth="2"
          />
        )}
        {node.right && (
          <line
            x1={node.x}
            y1={node.y}
            x2={node.right.x}
            y2={node.right.y}
            stroke="var(--border-color)"
            strokeWidth="2"
          />
        )}
        <circle
          cx={node.x}
          cy={node.y}
          r="18"
          fill={activeNode === node.val ? 'var(--accent)' : 'var(--bg-secondary)'}
          stroke={activeNode === node.val ? '#ffffff' : 'var(--accent)'}
          strokeWidth="2"
        />
        <text
          x={node.x}
          y={node.y + 5}
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill={activeNode === node.val ? '#ffffff' : 'var(--text-primary)'}
        >
          {node.val}
        </text>
        {renderTreeSVG(node.left)}
        {renderTreeSVG(node.right)}
      </g>
    );
  }

  // Complex arithmetic computation
  let compResReal = 0;
  let compResImag = 0;
  let compFormula = '';
  if (complexOp === 'add') {
    compResReal = r1 + r2;
    compResImag = i1 + i2;
    compFormula = `(${r1} + ${i1}i) + (${r2} + ${i2}i) = (${r1}+${r2}) + (${i1}+${i2})i`;
  } else if (complexOp === 'sub') {
    compResReal = r1 - r2;
    compResImag = i1 - i2;
    compFormula = `(${r1} + ${i1}i) - (${r2} + ${i2}i) = (${r1}-${r2}) + (${i1}-${i2})i`;
  } else {
    compResReal = r1 * r2 - i1 * i2;
    compResImag = r1 * i2 + i1 * r2;
    compFormula = `(${r1}*${r2} - (${i1})*(${i2})) + (${r1}*${i2} + ${i1}*${r2})i = ${compResReal} + ${compResImag}i`;
  }

  return (
    <div className="space-y-6">
      <div className="flex border-b border-[var(--border-color)] overflow-x-auto gap-2 pb-2">
        <button
          onClick={() => setActiveTab('memory')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'memory'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <Layers size={16} />
          Stack vs Heap Memory Model
        </button>
        <button
          onClick={() => setActiveTab('bst')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'bst'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <GitBranch size={16} />
          BST Tree Visualizer & Traversals
        </button>
        <button
          onClick={() => setActiveTab('stackqueue')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'stackqueue'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <Database size={16} />
          Stack & Queue Operations
        </button>
        <button
          onClick={() => setActiveTab('complex')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'complex'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <Code size={16} />
          C++ Operator Overloading
        </button>
      </div>

      {/* 1. Stack vs Heap Memory Visualizer */}
      {activeTab === 'memory' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-5">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              C++ Pointer & Memory Model Visualizer (Stack Frame vs Heap Allocations)
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Visualizes dynamic heap memory allocation via <code className="font-mono text-[var(--accent)]">new int[N]</code> and cleanup via <code className="font-mono text-[var(--accent)]">delete[] ptr</code>. Demonstrates pointer addressing and the danger of dangling pointers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Array Size (N Elements)
              </label>
              <input
                type="number"
                min="1"
                max="8"
                value={memSize}
                onChange={e => setMemSize(Math.max(1, Math.min(8, parseInt(e.target.value) || 1)))}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="flex gap-2 sm:col-span-2">
              <button
                onClick={handleAlloc}
                className="px-4 py-2 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
              >
                new int[{memSize}]
              </button>
              <button
                onClick={handleFree}
                className="px-4 py-2 bg-red-600/90 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition"
              >
                delete[] ptr
              </button>
              <button
                onClick={handleNullify}
                className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-lg text-sm font-medium hover:border-[var(--accent)] transition"
              >
                ptr = nullptr
              </button>
            </div>
          </div>

          {/* Visual Memory Representation */}
          <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl p-5 space-y-4 font-mono text-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Stack Frame */}
              <div className="border border-[var(--accent)] rounded-lg p-3 bg-[var(--bg-secondary)] min-w-[200px]">
                <div className="text-[10px] text-[var(--text-muted)] font-semibold">STACK FRAME (0x7FFD5A04)</div>
                <div className="text-sm font-bold text-[var(--text-primary)] mt-1">
                  int* ptr ={' '}
                  <span className={isNullptr ? 'text-[var(--text-muted)]' : isDangling ? 'text-red-400' : 'text-emerald-400'}>
                    {isNullptr ? 'nullptr (0x0)' : isDangling ? '0x00A12480 [Dangling]' : '0x00A12480'}
                  </span>
                </div>
                <div className="text-[11px] text-[var(--text-muted)] mt-1">Local pointer variable on call stack (8 bytes)</div>
              </div>

              <div className="hidden md:flex items-center text-[var(--accent)]">
                <ArrowRight size={24} />
              </div>

              {/* Heap Region */}
              <div className="flex-1 w-full">
                <div className="text-[10px] text-[var(--text-muted)] font-semibold mb-2">
                  HEAP REGION ({isAllocated ? `${memSize * 4} Bytes Contiguous Allocated` : 'Memory Freed'})
                </div>
                {isAllocated ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {Array.from({ length: memSize }).map((_, idx) => (
                      <div
                        key={idx}
                        className="border border-[var(--border-color)] rounded-lg p-2.5 bg-[var(--bg-secondary)] text-center transition hover:border-[var(--accent)]"
                      >
                        <div className="text-[10px] text-[var(--text-muted)]">0x00A124{80 + idx * 4}</div>
                        <div className="text-base font-bold text-[var(--accent)] my-1">
                          [{(idx + 1) * 10}]
                        </div>
                        <div className="text-[11px] text-[var(--text-secondary)]">ptr[{idx}]</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed border-red-500/40 rounded-lg p-4 bg-red-500/5 text-red-400">
                    Heap memory blocks at 0x00A12480 have been released back to the operating system.
                  </div>
                )}
              </div>
            </div>

            {/* Diagnostic Message */}
            {isDangling && (
              <div className="flex items-start gap-3 p-3 bg-red-950/30 border border-red-500/40 rounded-lg text-red-300">
                <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs">CRITICAL WARNING: Dangling Pointer Detected</div>
                  <div className="text-[11px] mt-0.5 text-red-200">
                    The heap memory was deallocated by <code className="font-mono">delete[] ptr</code>, but the pointer variable <code className="font-mono">ptr</code> still stores the old address <code className="font-mono">0x00A12480</code>. Dereferencing <code className="font-mono">*ptr</code> now causes undefined behavior or segmentation fault. Remediate immediately by assigning <code className="font-mono">ptr = nullptr;</code>.
                  </div>
                </div>
              </div>
            )}

            {isNullptr && (
              <div className="flex items-center gap-3 p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-lg text-emerald-300">
                <CheckCircle size={18} className="shrink-0" />
                <div>
                  <span className="font-bold">Safe State:</span> Pointer safely nullified (<code className="font-mono">ptr = nullptr</code>). Any subsequent check <code className="font-mono">if (ptr != nullptr)</code> safely prevents invalid memory access.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Binary Search Tree Visualizer */}
      {activeTab === 'bst' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-5">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Binary Search Tree (BST) Node Layout & Traversal Visualizer
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Construct an arbitrary BST and observe step-by-step tree traversal algorithms: Inorder (<span className="text-[var(--accent)] font-semibold">L &rarr; Root &rarr; R</span>, produces sorted keys), Preorder (<span className="text-[var(--accent)] font-semibold">Root &rarr; L &rarr; R</span>), and Postorder (<span className="text-[var(--accent)] font-semibold">L &rarr; R &rarr; Root</span>).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Insert Comma-Separated Keys
              </label>
              <input
                type="text"
                value={bstInput}
                onChange={e => setBstInput(e.target.value)}
                placeholder="50, 30, 70, 20, 40, 60, 80"
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] font-mono"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleRebuildBST}
                className="px-4 py-2 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition whitespace-nowrap"
              >
                Rebuild Tree
              </button>
            </div>
          </div>

          {/* Traversal Controls */}
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => runTraversal('inorder')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition"
            >
              <Play size={14} className="text-emerald-400" />
              Inorder Traversal (Sorted)
            </button>
            <button
              onClick={() => runTraversal('preorder')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition"
            >
              <Play size={14} className="text-sky-400" />
              Preorder Traversal
            </button>
            <button
              onClick={() => runTraversal('postorder')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition"
            >
              <Play size={14} className="text-amber-400" />
              Postorder Traversal
            </button>
          </div>

          {traversalResult && (
            <div className="p-3 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-lg text-xs font-mono text-[var(--accent)] font-bold">
              {traversalResult}
            </div>
          )}

          {/* SVG Tree Viewport */}
          <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl p-4 overflow-x-auto flex justify-center">
            <svg width="500" height="230" className="overflow-visible">
              {renderTreeSVG(bstTree)}
            </svg>
          </div>
        </div>
      )}

      {/* 3. Stack & Queue Operations Visualizer */}
      {activeTab === 'stackqueue' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-5">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              LIFO Stack vs FIFO Queue Operations Simulator
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Visualize fundamental container structures. Stacks enforce Last-In First-Out (<span className="text-[var(--accent)] font-semibold">LIFO</span>), while Queues enforce First-In First-Out (<span className="text-[var(--accent)] font-semibold">FIFO</span>).
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setContainerType('stack')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                containerType === 'stack' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
              }`}
            >
              Stack (LIFO)
            </button>
            <button
              onClick={() => setContainerType('queue')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                containerType === 'queue' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
              }`}
            >
              Queue (FIFO)
            </button>
          </div>

          <div className="flex gap-2 max-w-md">
            <input
              type="text"
              value={elementInput}
              onChange={e => setElementInput(e.target.value)}
              placeholder="Value to push/enqueue"
              className="flex-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] font-mono"
            />
            <button
              onClick={() => {
                const val = parseInt(elementInput);
                if (!isNaN(val)) {
                  setElements(prev => containerType === 'stack' ? [...prev, val] : [...prev, val]);
                  setElementInput('');
                }
              }}
              className="px-4 py-2 bg-[var(--accent)] text-white rounded-lg text-xs font-semibold hover:opacity-90 transition"
            >
              {containerType === 'stack' ? 'Push()' : 'Enqueue()'}
            </button>
            <button
              onClick={() => {
                if (elements.length === 0) return;
                setElements(prev => containerType === 'stack' ? prev.slice(0, -1) : prev.slice(1));
              }}
              className="px-4 py-2 bg-red-600/80 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition"
            >
              {containerType === 'stack' ? 'Pop()' : 'Dequeue()'}
            </button>
          </div>

          {/* Visual Container */}
          <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl p-6 min-h-[160px] flex items-center justify-center font-mono">
            {containerType === 'stack' ? (
              <div className="flex flex-col-reverse items-center gap-1.5 border-b-4 border-x-4 border-[var(--accent)] p-3 rounded-b-lg min-w-[160px]">
                {elements.length === 0 ? (
                  <span className="text-xs text-[var(--text-muted)] py-4">Stack is Empty</span>
                ) : (
                  elements.map((el, i) => (
                    <div
                      key={i}
                      className={`w-full text-center py-2 px-6 rounded text-xs font-bold ${
                        i === elements.length - 1
                          ? 'bg-[var(--accent)] text-white border-2 border-white'
                          : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]'
                      }`}
                    >
                      {el} {i === elements.length - 1 && ' [TOP]'}
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 border-y-2 border-dashed border-[var(--accent)] p-4 rounded-lg overflow-x-auto max-w-full">
                <span className="text-xs font-bold text-emerald-400 mr-2">[FRONT / OUT] &larr;</span>
                {elements.length === 0 ? (
                  <span className="text-xs text-[var(--text-muted)] px-6">Queue is Empty</span>
                ) : (
                  elements.map((el, i) => (
                    <div
                      key={i}
                      className={`px-4 py-2 rounded text-xs font-bold text-center shrink-0 ${
                        i === 0
                          ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-300'
                          : i === elements.length - 1
                          ? 'bg-[var(--accent)]/20 border border-[var(--accent)] text-[var(--accent)]'
                          : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]'
                      }`}
                    >
                      {el}
                    </div>
                  ))
                )}
                <span className="text-xs font-bold text-[var(--accent)] ml-2">&larr; [REAR / IN]</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. C++ Complex Operator Overloading Simulator */}
      {activeTab === 'complex' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-5">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              C++ Operator Overloading Simulator: Complex Number Class
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Demonstrates binary operator overloading syntax and mathematical resolution for user-defined types: <code className="font-mono text-[var(--accent)]">c1 + c2</code>, <code className="font-mono text-[var(--accent)]">c1 - c2</code>, and <code className="font-mono text-[var(--accent)]">c1 * c2</code>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg space-y-3">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Complex Object c1</span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-[var(--text-muted)] block">Real part (a1)</label>
                  <input
                    type="number"
                    value={r1}
                    onChange={e => setR1(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[var(--text-muted)] block">Imag part (b1)</label>
                  <input
                    type="number"
                    value={i1}
                    onChange={e => setI1(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                  />
                </div>
              </div>
              <div className="text-xs font-mono text-[var(--text-secondary)]">c1 = {r1} {i1 >= 0 ? `+ ${i1}i` : `- ${Math.abs(i1)}i`}</div>
            </div>

            <div className="p-4 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg space-y-3">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Complex Object c2</span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-[var(--text-muted)] block">Real part (a2)</label>
                  <input
                    type="number"
                    value={r2}
                    onChange={e => setR2(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[var(--text-muted)] block">Imag part (b2)</label>
                  <input
                    type="number"
                    value={i2}
                    onChange={e => setI2(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2.5 py-1.5 text-xs text-[var(--text-primary)] font-mono"
                  />
                </div>
              </div>
              <div className="text-xs font-mono text-[var(--text-secondary)]">c2 = {r2} {i2 >= 0 ? `+ ${i2}i` : `- ${Math.abs(i2)}i`}</div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setComplexOp('add')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                complexOp === 'add' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
              }`}
            >
              Operator +
            </button>
            <button
              onClick={() => setComplexOp('sub')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                complexOp === 'sub' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
              }`}
            >
              Operator -
            </button>
            <button
              onClick={() => setComplexOp('mul')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                complexOp === 'mul' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
              }`}
            >
              Operator *
            </button>
          </div>

          <div className="p-4 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl font-mono text-xs space-y-2">
            <div className="text-[var(--text-muted)]">// Evaluation & Signature:</div>
            <div className="text-[var(--accent)]">Complex Complex::operator{complexOp === 'add' ? '+' : complexOp === 'sub' ? '-' : '*'}(const Complex& other) const;</div>
            <div className="text-[var(--text-primary)] pt-1">Step: {compFormula}</div>
            <div className="text-sm font-bold text-emerald-400 pt-2 border-t border-[var(--border-color)]">
              Result: {compResReal} {compResImag >= 0 ? `+ ${compResImag}i` : `- ${Math.abs(compResImag)}i`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
