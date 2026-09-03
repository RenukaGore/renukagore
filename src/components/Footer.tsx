"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 px-6 text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Renuka Gore. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with Next.js, React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}