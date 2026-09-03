"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroPhotoCircle() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[420px] aspect-square mx-auto">
      
      {/* 1. Outer Thin Orbit Rings */}
      <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_30s_linear_infinite]" />
      <div className="absolute -inset-4 rounded-full border border-purple-500/10 border-dashed animate-[spin_45s_linear_infinite_reverse]" />

      {/* 2. Outer Glowing Ring */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-500 to-indigo-400 p-[3px] shadow-[0_0_50px_rgba(99,102,241,0.35)]">
        
        {/* Inner Circle Image Mask */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
          <Image
            src="/profile.jpg"
            alt="Renuka Gore"
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </div>

      {/* 3. Floating Glass Cards (Relative positioning around the circle) */}
      
      {/* Top Left Stat: Projects */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-4 left-0 z-10 bg-slate-950/80 backdrop-blur-xl border border-indigo-500/30 px-4 py-2.5 rounded-2xl shadow-xl text-center min-w-[100px]"
      >
        <span className="block text-xl font-extrabold text-white leading-none">10+</span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Projects</span>
      </motion.div>

      {/* Bottom Left Stat: Experience */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-6 left-2 z-10 bg-slate-950/80 backdrop-blur-xl border border-indigo-500/30 px-4 py-2.5 rounded-2xl shadow-xl text-center min-w-[100px]"
      >
        <span className="block text-xl font-extrabold text-white leading-none">1+</span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Yr Exp.</span>
      </motion.div>

      {/* Right Stat: Stack Pill */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-950/80 backdrop-blur-xl border border-indigo-500/40 px-4 py-3 rounded-2xl shadow-xl text-center min-w-[100px]"
      >
        <span className="block text-lg font-bold text-indigo-400 leading-none">MERN</span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Full Stack</span>
      </motion.div>

      {/* Orbit Dot Indicator */}
      <div className="absolute top-8 right-10 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8]" />
    </div>
  );
}
