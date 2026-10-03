'use client';

import React, { useState } from 'react';
import { Bot, GitBranch, RefreshCw, Cpu, CheckCircle } from 'lucide-react';

export default function AiLab() {
  const [activeTab, setActiveTab] = useState<'ttt' | 'graph'>('ttt');

  // Tic-Tac-Toe State
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<'X' | 'O'>('X');
  const [aiMode, setAiMode] = useState<'strategy3' | 'minimax'>('strategy3');
  const [status, setStatus] = useState<string>('Your Turn (X)');
  const [aiLog, setAiLog] = useState<string>('Waiting for user move...');
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Graph Search State
  const [searchAlgo, setSearchAlgo] = useState<'bfs' | 'dfs'>('bfs');
  const [graphStep, setGraphStep] = useState<number>(0);

  const WIN_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  function checkWinner(b: (string | null)[]) {
    for (const [x, y, z] of WIN_LINES) {
      if (b[x] && b[x] === b[y] && b[y] === b[z]) return b[x];
    }
    return null;
  }

  function handleCellClick(index: number) {
    if (gameOver || board[index] !== null || turn !== 'X') return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setStatus(`Game Over: Winner is ${winner}!`);
      setGameOver(true);
      return;
    }

    if (!newBoard.includes(null)) {
      setStatus('Game Over: Draw!');
      setGameOver(true);
      return;
    }

    setTurn('O');
    setStatus('AI Thinking (O)...');

    setTimeout(() => {
      runAIMove(newBoard);
    }, 300);
  }

  function getStrategy3Move(b: (string | null)[]) {
    // Rule 1: Win if two in line
    for (const l of WIN_LINES) {
      const vals = [b[l[0]], b[l[1]], b[l[2]]];
      if (vals.filter(v => v === 'O').length === 2 && vals.includes(null)) {
        return { move: l[vals.indexOf(null)], rule: 'Rule 1: Immediate Winning Line' };
      }
    }
    // Rule 2: Block opponent immediate win
    for (const l of WIN_LINES) {
      const vals = [b[l[0]], b[l[1]], b[l[2]]];
      if (vals.filter(v => v === 'X').length === 2 && vals.includes(null)) {
        return { move: l[vals.indexOf(null)], rule: 'Rule 2: Block Opponent Threat' };
      }
    }
    // Rule 5: Center
    if (b[4] === null) return { move: 4, rule: 'Rule 5: Claim Center Cell (5)' };
    // Rule 6: Opposite corner
    const oppCorners = [[0, 8], [2, 6], [8, 0], [6, 2]];
    for (const [c1, c2] of oppCorners) {
      if (b[c1] === 'X' && b[c2] === null) return { move: c2, rule: 'Rule 6: Play Opposite Corner' };
    }
    // Rule 7: Any empty corner
    for (const c of [0, 2, 6, 8]) {
      if (b[c] === null) return { move: c, rule: 'Rule 7: Take Available Corner' };
    }
    // Rule 8: Any empty side
    for (const s of [1, 3, 5, 7]) {
      if (b[s] === null) return { move: s, rule: 'Rule 8: Take Available Edge/Side' };
    }
    return { move: b.indexOf(null), rule: 'Default Move' };
  }

  function minimax(b: (string | null)[], depth: number, isMaximizing: boolean): number {
    const winner = checkWinner(b);
    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (!b.includes(null)) return 0;

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (b[i] === null) {
          b[i] = 'O';
          const ev = minimax(b, depth + 1, false);
          b[i] = null;
          maxEval = Math.max(maxEval, ev);
        }
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let i = 0; i < 9; i++) {
        if (b[i] === null) {
          b[i] = 'X';
          const ev = minimax(b, depth + 1, true);
          b[i] = null;
          minEval = Math.min(minEval, ev);
        }
      }
      return minEval;
    }
  }

  function getMinimaxMove(b: (string | null)[]) {
    let bestScore = -Infinity;
    let bestMove = -1;
    for (let i = 0; i < 9; i++) {
      if (b[i] === null) {
        b[i] = 'O';
        const score = minimax(b, 0, false);
        b[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return { move: bestMove, score: bestScore };
  }

  function runAIMove(currentBoard: (string | null)[]) {
    let move = -1;
    let logMsg = '';

    if (aiMode === 'strategy3') {
      const res = getStrategy3Move(currentBoard);
      move = res.move;
      logMsg = `[Strategy 3 Heuristic] Triggered ${res.rule} at cell ${move + 1}`;
    } else {
      const res = getMinimaxMove(currentBoard);
      move = res.move;
      logMsg = `[Minimax Optimal Utility] Chosen cell ${move + 1} with score ${res.score}`;
    }

    setAiLog(logMsg);

    if (move !== -1) {
      currentBoard[move] = 'O';
      setBoard([...currentBoard]);

      const winner = checkWinner(currentBoard);
      if (winner) {
        setStatus(`Game Over: Winner is ${winner}!`);
        setGameOver(true);
        return;
      }
      if (!currentBoard.includes(null)) {
        setStatus('Game Over: Draw!');
        setGameOver(true);
        return;
      }
    }

    setTurn('X');
    setStatus('Your Turn (X)');
  }

  function resetBoard() {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setStatus('Your Turn (X)');
    setAiLog('Board reset. Waiting for user move...');
    setGameOver(false);
  }

  return (
    <div className="space-y-6">
      <div className="flex border-b border-[var(--border-color)] overflow-x-auto gap-2 pb-2">
        <button
          onClick={() => setActiveTab('ttt')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'ttt'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <Bot size={16} />
          Game Search Lab: Strategy-3 & Minimax
        </button>
        <button
          onClick={() => setActiveTab('graph')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === 'graph'
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
          }`}
        >
          <GitBranch size={16} />
          Uninformed State Space Search: BFS vs DFS
        </button>
      </div>

      {activeTab === 'ttt' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Tic-Tac-Toe AI Reasoning Lab: Strategy-3 Production Rules vs Minimax
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Test the exact heuristic production rules of Strategy-3 (Win, Block, Fork, Center, Corner) or full Minimax game tree depth evaluation. You play as <strong className="text-[var(--accent)]">X</strong>, AI is <strong className="text-emerald-400">O</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                AI Engine:
              </label>
              <select
                value={aiMode}
                onChange={e => setAiMode(e.target.value as any)}
                className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded px-3 py-1.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="strategy3">Strategy 3 (Heuristic Production Rules)</option>
                <option value="minimax">Minimax Search (Optimal Utility)</option>
              </select>
            </div>
            <button
              onClick={resetBoard}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition"
            >
              <RefreshCw size={13} />
              Reset Board
            </button>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="text-sm font-bold text-[var(--accent)]">{status}</div>
            <div className="grid grid-cols-3 gap-2 bg-[var(--border-color)] p-2 rounded-xl">
              {board.map((cell, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCellClick(idx)}
                  className={`w-20 h-20 bg-[var(--bg-secondary)] rounded-lg text-2xl font-bold flex items-center justify-center transition hover:bg-[var(--bg-tertiary)] ${
                    cell === 'X' ? 'text-[var(--accent)]' : 'text-emerald-400'
                  }`}
                >
                  {cell || ''}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-lg font-mono text-xs text-[var(--text-secondary)]">
            <span className="text-[var(--text-muted)] block text-[10px] mb-0.5">AI Inference Trace:</span>
            {aiLog}
          </div>
        </div>
      )}

      {activeTab === 'graph' && (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              State Space Search Visualizer: BFS (Queue) vs DFS (Stack)
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Trace step-by-step traversal from Root state <code className="font-mono text-[var(--accent)]">S</code> to Goal state <code className="font-mono text-emerald-400">G</code> across a directed branching graph.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setSearchAlgo('bfs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                searchAlgo === 'bfs' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
              }`}
            >
              Breadth-First Search (FIFO Queue)
            </button>
            <button
              onClick={() => setSearchAlgo('dfs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                searchAlgo === 'dfs' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
              }`}
            >
              Depth-First Search (LIFO Stack)
            </button>
          </div>

          <div className="p-5 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl font-mono text-xs space-y-3 leading-relaxed">
            {searchAlgo === 'bfs' ? (
              <>
                <div className="text-[var(--accent)] font-bold">BFS Traversal Trace (FIFO Queue):</div>
                <div>Step 1: Enqueue Root [S]. Explored Set: &empty;</div>
                <div>Step 2: Dequeue [S]. Expand children &rarr; A, B. Queue: [A, B]. Explored: {'{ S }'}</div>
                <div>Step 3: Dequeue [A]. Expand children &rarr; C, D. Queue: [B, C, D]. Explored: {'{ S, A }'}</div>
                <div>Step 4: Dequeue [B]. Expand children &rarr; E, F. Queue: [C, D, E, F]. Explored: {'{ S, A, B }'}</div>
                <div>Step 5: Dequeue [C]. (Leaf node). Queue: [D, E, F]. Explored: {'{ S, A, B, C }'}</div>
                <div>Step 6: Dequeue [D]. Expand child &rarr; Target Goal G! Goal reached with optimal step length.</div>
                <div className="pt-2 text-emerald-400 font-bold border-t border-[var(--border-color)]">
                  Traversal Sequence: S &rarr; A &rarr; B &rarr; C &rarr; D &rarr; G (Shortest Path: S &rarr; A &rarr; D &rarr; G)
                </div>
              </>
            ) : (
              <>
                <div className="text-[var(--accent)] font-bold">DFS Traversal Trace (LIFO Stack):</div>
                <div>Step 1: Push Root [S]. Explored Set: &empty;</div>
                <div>Step 2: Pop [S]. Push children &rarr; B, A (A on top). Stack: [B, A]. Explored: {'{ S }'}</div>
                <div>Step 3: Pop [A]. Push children &rarr; D, C (C on top). Stack: [B, D, C]. Explored: {'{ S, A }'}</div>
                <div>Step 4: Pop [C]. Leaf node reached. Backtrack. Stack: [B, D]. Explored: {'{ S, A, C }'}</div>
                <div>Step 5: Pop [D]. Push child &rarr; G. Stack: [B, G]. Explored: {'{ S, A, C, D }'}</div>
                <div>Step 6: Pop [G]. Target Goal G found at deepest branch!</div>
                <div className="pt-2 text-emerald-400 font-bold border-t border-[var(--border-color)]">
                  Traversal Sequence: S &rarr; A &rarr; C &rarr; D &rarr; G (Memory bounded by branch depth O(bm))
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
