'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Cpu,
  CheckCircle2,
  FileText,
  Search,
  Copy,
  Check,
  ChevronRight,
  ArrowLeft,
  List,
  ExternalLink
} from 'lucide-react';
import { Subject, Semester } from '@/data/academicData';
import DataStructuresLab from '@/components/demos/DataStructuresLab';
import ScientificComputingLab from '@/components/demos/ScientificComputingLab';
import MathFoundationLab from '@/components/demos/MathFoundationLab';
import AiLab from '@/components/demos/AiLab';
import PythonLab from '@/components/demos/PythonLab';
import VisionLab from '@/components/demos/VisionLab';

interface SubjectViewClientProps {
  semester: Semester;
  subject: Subject;
}

export default function SubjectViewClient({ semester, subject }: SubjectViewClientProps) {
  const [activeTab, setActiveTab] = useState<'concepts' | 'demos' | 'assignments' | 'cheatsheet'>('concepts');
  const [asgnSearch, setAsgnSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Extract distinct assignment categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    subject.assignments.forEach(a => {
      if (a.category) set.add(a.category);
    });
    return ['All', ...Array.from(set)];
  }, [subject.assignments]);

  // Filter assignments
  const filteredAssignments = useMemo(() => {
    const q = asgnSearch.trim().toLowerCase();
    return subject.assignments.filter(a => {
      const matchCat = selectedCategory === 'All' || a.category === selectedCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.question.toLowerCase().includes(q) ||
        a.id.toLowerCase().includes(q) ||
        (a.solution && a.solution.toLowerCase().includes(q))
      );
    });
  }, [subject.assignments, asgnSearch, selectedCategory]);

  function handleCopy(text: string, id: string) {
    // Strip HTML tags for clean copy if string has HTML
    const cleanText = text.replace(/<[^>]*>/g, '');
    navigator.clipboard.writeText(cleanText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  // Render subject-specific interactive lab
  function renderLab() {
    const id = subject.id.toLowerCase();
    if (id === 'ds' || id === 'data-structures') {
      return <DataStructuresLab />;
    }
    if (id === 'scm' || id === 'scientific-computing') {
      return <ScientificComputingLab />;
    }
    if (id === 'mf' || id === 'mathematical-foundation') {
      return <MathFoundationLab />;
    }
    if (id === 'ai') {
      return <AiLab />;
    }
    if (id === 'python') {
      return <PythonLab />;
    }
    if (id === 'cv' || id === 'computer-vision') {
      return <VisionLab />;
    }
    return (
      <div className="p-8 text-center bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl text-sm text-[var(--text-muted)]">
        Interactive simulator is compiled in the Concepts tab.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Subject Header */}
      <div className="space-y-4">
        <Link
          href={`/semesters/${semester.id}`}
          className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
        >
          <ArrowLeft size={14} />
          Back to {semester.title}
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold border border-[var(--accent)]/30">
                {subject.code}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                {semester.title}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--text-primary)]">
              {subject.name}
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
              {subject.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <div className="px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-center">
              <span className="block text-[10px] text-[var(--text-muted)] uppercase">Topics</span>
              <span className="font-bold text-[var(--text-primary)]">{subject.topics.length}</span>
            </div>
            <div className="px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-center">
              <span className="block text-[10px] text-[var(--text-muted)] uppercase">Solved</span>
              <span className="font-bold text-emerald-400">{subject.assignments.length}</span>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          {subject.overview}
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="border-b border-[var(--border-color)] flex overflow-x-auto gap-2">
        <button
          onClick={() => setActiveTab('concepts')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
            activeTab === 'concepts'
              ? 'border-[var(--accent)] text-[var(--accent)]'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <BookOpen size={16} />
          Concepts & Lecture Notes ({subject.topics.length})
        </button>
        <button
          onClick={() => setActiveTab('demos')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
            activeTab === 'demos'
              ? 'border-[var(--accent)] text-[var(--accent)]'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Cpu size={16} />
          Interactive Demos & Labs
        </button>
        <button
          onClick={() => setActiveTab('assignments')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
            activeTab === 'assignments'
              ? 'border-[var(--accent)] text-[var(--accent)]'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <CheckCircle2 size={16} />
          Solved Assignments ({subject.assignments.length})
        </button>
        <button
          onClick={() => setActiveTab('cheatsheet')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
            activeTab === 'cheatsheet'
              ? 'border-[var(--accent)] text-[var(--accent)]'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <FileText size={16} />
          Cheatsheet & Key Formulas
        </button>
      </div>

      {/* Main Layout: Content + TOC Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          {/* TAB 1: CONCEPTS */}
          {activeTab === 'concepts' && (
            <div className="space-y-6">
              {subject.topics.map((t, idx) => (
                <div
                  key={t.id || idx}
                  id={`topic-${t.id}`}
                  className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold">
                        {t.tag || `Topic ${idx + 1}`}
                      </div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
                        {t.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className="prose prose-invert max-w-none text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed space-y-3"
                    dangerouslySetInnerHTML={{ __html: t.content }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: INTERACTIVE DEMOS */}
          {activeTab === 'demos' && (
            <div className="space-y-6">
              {renderLab()}
            </div>
          )}

          {/* TAB 3: SOLVED ASSIGNMENTS */}
          {activeTab === 'assignments' && (
            <div className="space-y-6">
              {/* Filter controls */}
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 space-y-3">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-3 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    value={asgnSearch}
                    onChange={e => setAsgnSearch(e.target.value)}
                    placeholder="Filter assignments by title, question number, or keyword..."
                    className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg pl-9 pr-3 py-2 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition ${
                        selectedCategory === cat
                          ? 'bg-[var(--accent)] text-white font-semibold'
                          : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Assignment Cards List */}
              <div className="space-y-5">
                {filteredAssignments.length === 0 ? (
                  <div className="p-12 text-center bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl text-xs text-[var(--text-muted)]">
                    No assignments match your search filter.
                  </div>
                ) : (
                  filteredAssignments.map((asgn, i) => (
                    <div
                      key={asgn.id || i}
                      id={`asgn-${asgn.id}`}
                      className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-5 space-y-4 hover:border-[var(--accent)]/50 transition"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/30">
                            {asgn.id.toUpperCase()}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                            {asgn.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {asgn.category && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                              {asgn.category}
                            </span>
                          )}
                          {asgn.difficulty && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                              {asgn.difficulty}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Question */}
                      <div className="p-3 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-lg text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
                        <span className="text-[var(--text-muted)] font-mono text-xs block mb-1">
                          Problem Statement:
                        </span>
                        {asgn.question}
                      </div>

                      {/* Solution Block */}
                      <div className="relative">
                        <div className="flex items-center justify-between pb-1.5 text-xs text-[var(--text-muted)] font-mono">
                          <span>Complete Solution & Proof</span>
                          <button
                            onClick={() => handleCopy(asgn.solution, asgn.id)}
                            className="flex items-center gap-1 text-[11px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition"
                          >
                            {copiedId === asgn.id ? (
                              <>
                                <Check size={12} className="text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy size={12} />
                                <span>Copy Solution</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div
                          className="p-4 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-lg text-xs font-mono text-[var(--text-primary)] overflow-x-auto leading-relaxed max-h-[500px] overflow-y-auto"
                          dangerouslySetInnerHTML={{ __html: asgn.solution }}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 4: CHEATSHEET */}
          {activeTab === 'cheatsheet' && (
            <div className="space-y-6">
              {subject.cheatsheet && subject.cheatsheet.length > 0 ? (
                subject.cheatsheet.map((c, i) => (
                  <div
                    key={i}
                    className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-3"
                  >
                    <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                      <FileText size={18} className="text-[var(--accent)]" />
                      {c.title}
                    </h3>
                    <div
                      className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed overflow-x-auto"
                      dangerouslySetInnerHTML={{ __html: c.content }}
                    />
                  </div>
                ))
              ) : (
                <div className="p-8 text-center bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl text-xs text-[var(--text-muted)]">
                  Formula cheatsheet is compiled under Concepts.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sticky Table of Contents Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-20 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-4 space-y-3 text-xs">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] text-[var(--text-muted)]">
              <List size={13} />
              Quick Navigation
            </div>

            <div className="max-h-[70vh] overflow-y-auto space-y-1 pr-1">
              {activeTab === 'concepts' && (
                subject.topics.map((t, i) => (
                  <a
                    key={t.id || i}
                    href={`#topic-${t.id}`}
                    className="block p-1.5 rounded hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent)] text-[var(--text-secondary)] transition truncate"
                  >
                    {t.title}
                  </a>
                ))
              )}

              {activeTab === 'assignments' && (
                filteredAssignments.map((a, i) => (
                  <a
                    key={a.id || i}
                    href={`#asgn-${a.id}`}
                    className="block p-1.5 rounded hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent)] text-[var(--text-secondary)] transition truncate font-mono text-[11px]"
                  >
                    [{a.id.toUpperCase()}] {a.title}
                  </a>
                ))
              )}

              {activeTab === 'demos' && (
                <div className="p-2 text-[var(--text-muted)]">
                  Interactive simulator workbench is loaded on screen.
                </div>
              )}

              {activeTab === 'cheatsheet' && (
                subject.cheatsheet?.map((c, i) => (
                  <div key={i} className="p-1.5 text-[var(--text-secondary)] truncate">
                    {c.title}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
