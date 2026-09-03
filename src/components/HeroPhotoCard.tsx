"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Code2, Terminal, CheckCircle2 } from "lucide-react";

export default function HeroPhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative flex justify-center items-center w-full max-w-md mx-auto lg:max-w-none"
    >
      {/* 1. Animated Radial Glow Behind Card */}
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-700 animate-pulse pointer-events-none" />

      {/* 2. Main Photo Outer Container */}
      <div className="relative w-full aspect-[4/5] max-w-[360px] md:max-w-[400px] rounded-3xl p-2 bg-slate-900/90 border border-slate-700/60 shadow-2xl backdrop-blur-xl group">
        
        {/* Inner Image Frame */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
          <Image
            src="/profile.jpg"
            alt="Renuka Gore"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />

          {/* Dark Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

          {/* Bottom Card Title Banner */}
          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm">Renuka Gore</p>
              <p className="text-indigo-400 text-xs font-medium flex items-center gap-1">
                <Terminal className="w-3 h-3" /> Full Stack Engineer
              </p>
            </div>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3" /> Online
            </span>
          </div>
        </div>

        {/* 3. Floating Micro-Badges (Anchored around the photo frame) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-4 -left-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 text-xs font-medium text-slate-200"
        >
          <Code2 className="w-4 h-4 text-indigo-400" />
          <span>React & Next.js</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-3 -right-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 text-xs font-medium text-slate-200"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Clean UI / UX</span>
        </motion.div>

      </div>
    </motion.div>
  );
}