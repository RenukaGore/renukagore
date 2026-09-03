"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-10 pb-12 overflow-hidden">
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Opportunities
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2"
          >
            HI, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
          >
            <span className="text-white block">RENUKA</span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
              GORE
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8 w-full relative"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-400 border-l-2 border-indigo-500 pl-3 py-1">
              FULL STACK DEVELOPER
            </span>
            <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
              I build fast, scalable web applications — from clean backend REST APIs to interactive, modern frontends users love.
            </p>
          </motion.div>

          {/* Tech Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {["Java","React.js", "Node.js", "Express.js", "MySQL","MongoDB"].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3.5 py-1.5 rounded-xl bg-[#131527] text-slate-300 border border-slate-800/80 font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-7 py-3.5 bg-[#6366f1] hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all text-xs tracking-wide"
            >
              View Work <ArrowUpRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3.5 bg-[#131527] hover:bg-slate-800 text-slate-200 border border-slate-800/80 font-bold rounded-xl flex items-center gap-2 transition-all text-xs"
            >
              <Download className="w-4 h-4" /> Resume
            </motion.a>

            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://github.com/RenukaGore/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#131527] border border-slate-800/80 text-slate-400 hover:text-white transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="mailto:renukagore2003@gmail.com"
                className="p-3 rounded-xl bg-[#131527] border border-slate-800/80 text-slate-400 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Circular Avatar & Orbiting Dots */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center w-full max-w-[450px] aspect-square mx-auto cursor-pointer"
          >
            {/* Outer Static Track Ring */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/20" />
            
            {/* Connection Node Dot (Left intersection point) */}
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1] z-20" />

            {/* Orbiting Dots Track */}
            <div className="absolute inset-0 rounded-full animate-orbit">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-300 shadow-[0_0_15px_#a5b4fc]" />
            </div>

            <div className="absolute inset-0 rounded-full animate-orbit rotate-180">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-300 shadow-[0_0_15px_#a5b4fc]" />
            </div>

            {/* Main Circle Image */}
            <div className="absolute inset-4 rounded-full border border-indigo-500/30 p-1 shadow-[0_0_60px_rgba(99,102,241,0.25)]">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                <Image
                  src="/profile2.jpg"
                  alt="Renuka Gore"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Floating Glass Badge 1: 10+ Projects */}
            <div className="absolute top-6 left-2 z-20 bg-[#0d0f1d]/90 backdrop-blur-xl border border-indigo-500/30 px-4 py-2 rounded-2xl shadow-xl text-center">
              <span className="block text-lg font-black text-white leading-none">10+</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Projects</span>
            </div>

            {/* 1+ Yr Exp Badge (Bottom Left) */}
            <div className="absolute bottom-8 left-4 z-20 bg-[#0d0f1d]/90 backdrop-blur-xl border border-indigo-500/30 px-4 py-2 rounded-2xl shadow-xl text-center">
              <span className="block text-lg font-black text-white leading-none">1+</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Yr Exp.</span>
            </div>

            {/* JAVA / Full Stack Badge (Right Side) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#0d0f1d]/90 backdrop-blur-xl border border-indigo-500/40 px-4 py-3 rounded-2xl shadow-xl text-center">
              <span className="block text-sm font-black text-indigo-400 leading-none flex items-center justify-center gap-1">
                JAVA <Sparkles className="w-3 h-3 text-amber-400" />
              </span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Full Stack</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}