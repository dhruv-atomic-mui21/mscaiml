import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MSc AIML - Academic Portal & Interactive Labs',
  description: 'MSc Artificial Intelligence & Machine Learning academic repository containing all lecture notes, interactive visualizers, and 180 verified solved assignments. For the students, by the students.',
  keywords: ['MSc AIML', 'Artificial Intelligence', 'Data Structures', 'Scientific Computing', 'Mathematical Foundation', 'Machine Learning'],
  authors: [{ name: 'Dhruv', url: 'https://www.satyaneev.me' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
