import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Folder3D from '@/components/Folder3D';
import { academicData } from '@/data/academicData';
import { BookOpen, CheckCircle, Code, Cpu } from 'lucide-react';

export default function HomePage() {
  const semesters = academicData.semesters;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[var(--accent-subtle)] border border-[var(--accent)] text-[var(--accent)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] status-ping" />
            Curriculum 2026-2028 &bull; Offline Ready
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            MSc AIML
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium">
            Academic Repository & Interactive Engineering Labs
          </p>

          <p className="text-xs sm:text-sm text-[var(--text-muted)] italic">
            &ldquo;For the students, by the students&rdquo;
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-2xl mx-auto">
            <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <div className="text-lg sm:text-xl font-bold font-mono text-[var(--accent)]">180</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Solved Assignments</div>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">6</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Core Sem-1 Subjects</div>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <div className="text-lg sm:text-xl font-bold font-mono text-amber-400">80+</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Curriculum Topics</div>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <div className="text-lg sm:text-xl font-bold font-mono text-purple-400">Live</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Interactive Labs</div>
            </div>
          </div>
        </div>

        {/* 3D Semester Folders Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
              Academic Semesters
            </h2>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              Click a folder to open syllabus
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {semesters.map(sem => (
              <Folder3D
                key={sem.id}
                title={sem.title}
                subtitle={sem.subtitle}
                badge={`Sem ${sem.number}`}
                status={sem.status}
                description={sem.description}
                topicsCount={sem.topicsCount}
                assignmentsCount={sem.assignmentsCount}
                href={`/semesters/${sem.id}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
