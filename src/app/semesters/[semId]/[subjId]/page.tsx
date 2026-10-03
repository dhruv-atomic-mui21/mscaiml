import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubjectViewClient from './SubjectViewClient';
import { getSemester, getSubject, academicData } from '@/data/academicData';

interface SubjectPageProps {
  params: {
    semId: string;
    subjId: string;
  };
}

export function generateStaticParams() {
  const params: { semId: string; subjId: string }[] = [];
  for (const sem of academicData.semesters) {
    const subjects = academicData.subjects[sem.id] || [];
    for (const subj of subjects) {
      params.push({ semId: sem.id, subjId: subj.id });
      // Also register friendly aliases
      if (subj.id === 'data-structures') params.push({ semId: sem.id, subjId: 'ds' });
      if (subj.id === 'mathematical-foundation') params.push({ semId: sem.id, subjId: 'mf' });
      if (subj.id === 'scientific-computing') params.push({ semId: sem.id, subjId: 'scm' });
      if (subj.id === 'computer-vision') params.push({ semId: sem.id, subjId: 'cv' });
    }
  }
  return params;
}

export default function SubjectPage({ params }: SubjectPageProps) {
  const sem = getSemester(params.semId);
  const subj = getSubject(params.semId, params.subjId);

  if (!sem || !subj) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        breadcrumbs={[
          { label: 'Semesters', href: '/' },
          { label: sem.title, href: `/semesters/${sem.id}` },
          { label: subj.name }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <SubjectViewClient semester={sem} subject={subj} />
      </main>

      <Footer />
    </div>
  );
}
