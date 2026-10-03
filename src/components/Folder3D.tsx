import React from 'react';
import Link from 'next/link';
import { Folder, ArrowUpRight, BookOpen, CheckCircle2 } from 'lucide-react';

interface Folder3DProps {
  title: string;
  subtitle?: string;
  badge?: string;
  status?: 'active' | 'upcoming';
  description?: string;
  topicsCount?: string;
  assignmentsCount?: string;
  href: string;
  color?: string;
}

export default function Folder3D({
  title,
  subtitle,
  badge,
  status = 'active',
  description,
  topicsCount,
  assignmentsCount,
  href,
  color = 'var(--accent)',
}: Folder3DProps) {
  return (
    <div className="folder-scene">
      <Link href={href} className="block no-underline">
        <div className="folder-card group relative">
          {/* Top Folder Tab Flap */}
          <div className="folder-tab" />

          {/* Paper Stack Layers in Corner */}
          <div className="folder-papers">
            <div className="folder-paper-layer" />
            <div className="folder-paper-layer" />
            <div className="folder-paper-layer" />
          </div>

          {/* Folder Content */}
          <div className="space-y-4">
            {/* Header / Badges */}
            <div className="flex items-center justify-between gap-2 pr-8">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition">
                  <Folder size={18} />
                </span>
                {badge && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                    {badge}
                  </span>
                )}
              </div>

              {status === 'active' ? (
                <span className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-ping" />
                  Active
                </span>
              ) : (
                <span className="text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-2 py-0.5 rounded-full">
                  Upcoming
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition flex items-center justify-between">
                <span>{title}</span>
                <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition shrink-0" />
              </h3>
              {subtitle && (
                <p className="text-xs font-medium text-[var(--text-secondary)] mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Description */}
            {description && (
              <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}

            {/* Metrics Footer */}
            {(topicsCount || assignmentsCount) && (
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                {topicsCount && (
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} className="text-[var(--text-secondary)]" />
                    {topicsCount}
                  </span>
                )}
                {assignmentsCount && (
                  <span className="flex items-center gap-1 text-[var(--text-primary)] font-semibold">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    {assignmentsCount}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
