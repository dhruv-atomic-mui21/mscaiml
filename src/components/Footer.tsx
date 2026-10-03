import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--bg-secondary)] mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-secondary)]">
        <div>
          <span className="font-semibold text-[var(--text-primary)]">MSc AIML Portal</span>
          <span className="mx-2">&bull;</span>
          <span className="italic">For the students, by the students</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Engineered by</span>
          <a
            href="https://www.satyaneev.me"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Dhruv
          </a>
          <span>(</span>
          <a
            href="https://www.satyaneev.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition"
          >
            www.satyaneev.me
          </a>
          <span>)</span>
        </div>
      </div>
    </footer>
  );
}
