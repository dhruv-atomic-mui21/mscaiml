import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Folder3D from '@/components/Folder3D';
import { getSemester, getSubjects, academicData } from '@/data/academicData';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface SemesterPageProps {
  params: {
    semId: string;
  };
}

export function generateStaticParams() {
  return academicData.semesters.map(s => ({ semId: s.id }));
}

export default function SemesterPage({ params }: SemesterPageProps) {
  const sem = getSemester(params.semId);
  if (!sem) notFound();

  const subjects = getSubjects(params.semId);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        breadcrumbs={[
          { label: 'Semesters', href: '/' },
          { label: sem.title }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
          >
            <ArrowLeft size={14} />
            Back to Semesters
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
                  {sem.title}
                </h1>
                <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                  sem.status === 'active'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)] border-[var(--border-color)]'
                }`}>
                  {sem.status === 'active' ? 'Active Curriculum' : 'Upcoming'}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                {sem.description}
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-[var(--text-muted)]">
              <span className="p-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg">
                {subjects.length} Subjects
              </span>
              <span className="p-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--accent)] font-semibold">
                {sem.assignmentsCount}
              </span>
            </div>
          </div>
        </div>

        {/* Subjects 3D Folders Grid */}
        {subjects.length > 0 ? (
          <section className="space-y-4">
            <h2 className="text-base font-bold text-[var(--text-primary)]">
              Curriculum Subjects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map(subj => (
                <Folder3D
                  key={subj.id}
                  title={subj.name}
                  subtitle={subj.subtitle}
                  badge={subj.code}
                  status="active"
                  description={subj.overview}
                  topicsCount={`${subj.topics.length} Topics`}
                  assignmentsCount={`${subj.assignments.length} Solved`}
                  href={`/semesters/${sem.id}/${subj.id}`}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="p-12 text-center border border-[var(--border-color)] rounded-2xl bg-[var(--bg-secondary)] space-y-3">
            <div className="text-sm font-semibold text-[var(--text-primary)]">
              Curriculum Under Compilation
            </div>
            <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto">
              Assignments and lecture materials for {sem.title} will be synced as coursework commences.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
