'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, BookOpen, CheckSquare, ArrowRight } from 'lucide-react';
import { getAllAssignments, academicData } from '@/data/academicData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      return;
    }

    const matched: any[] = [];

    // Search assignments
    const assignments = getAllAssignments();
    for (const item of assignments) {
      const matchTitle = item.assignment.title.toLowerCase().includes(q);
      const matchQuestion = item.assignment.question.toLowerCase().includes(q);
      const matchCategory = item.assignment.category.toLowerCase().includes(q);
      const matchId = item.assignment.id.toLowerCase().includes(q);

      if (matchTitle || matchQuestion || matchCategory || matchId) {
        matched.push({
          type: 'assignment',
          semId: item.semId,
          subjectId: item.subject.id,
          subjectTitle: item.subject.name,
          title: `[${item.assignment.id.toUpperCase()}] ${item.assignment.title}`,
          snippet: item.assignment.question.slice(0, 110) + '...',
          category: item.assignment.category,
          href: `/semesters/${item.semId}/${item.subject.id}?tab=assignments#asgn-${item.assignment.id}`
        });
      }
      if (matched.length >= 25) break;
    }

    // Search topics
    for (const sem of academicData.semesters) {
      const subjects = academicData.subjects[sem.id] || [];
      for (const subj of subjects) {
        for (const topic of subj.topics) {
          if (
            topic.title.toLowerCase().includes(q) ||
            topic.content.toLowerCase().includes(q)
          ) {
            matched.push({
              type: 'topic',
              semId: sem.id,
              subjectId: subj.id,
              subjectTitle: subj.name,
              title: topic.title,
              snippet: topic.content.replace(/<[^>]*>/g, '').slice(0, 110) + '...',
              category: topic.tag || 'Concept Note',
              href: `/semesters/${sem.id}/${subj.id}?tab=concepts#topic-${topic.id}`
            });
          }
          if (matched.length >= 35) break;
        }
      }
    }

    setResults(matched);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
          <Search size={18} className="text-[var(--text-muted)] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search all 180 solved assignments, formulas, or topics..."
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-xs text-[var(--text-muted)]">
              Type keywords, question numbers (e.g. &apos;Q6&apos;, &apos;Minimax&apos;, &apos;Venn&apos;, &apos;BST&apos;, &apos;Regression&apos;) to search the offline database.
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-xs text-[var(--text-muted)]">
              No matching assignments or notes found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((res, i) => (
              <Link
                key={i}
                href={res.href}
                onClick={onClose}
                className="flex items-start justify-between gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--border-color)] hover:bg-[var(--bg-tertiary)] transition group"
              >
                <div className="space-y-1 overflow-hidden">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold">
                      {res.category}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-medium">
                      {res.subjectTitle}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition truncate">
                    {res.title}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] line-clamp-1">
                    {res.snippet}
                  </div>
                </div>
                <ArrowRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition shrink-0 mt-2" />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
