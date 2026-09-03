"use client";
import { motion, Variants } from "framer-motion";
import { Code2, Cpu, GraduationCap, Sparkles, Terminal, Zap } from "lucide-react";

// Animation Variants explicitly typed with Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center max-w-2xl mx-auto"
      >
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase border-b-2 border-indigo-500 pb-1">
          GET TO KNOW ME
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          About <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          Passionate about building scalable backends, responsive interfaces, and solving complex algorithmic challenges.
        </p>
      </motion.div>

      {/* Hero-Style Animated Glass Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Card 1: Full Stack Expertise */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          whileHover={{ scale: 1.02, y: -8 }}
          className="relative bg-slate-950/80 backdrop-blur-xl border border-indigo-500/30 p-6 rounded-3xl shadow-xl hover:border-indigo-500/60 transition-all group"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
            <Code2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            Full Stack Engineering
            <Sparkles className="w-4 h-4 text-indigo-400" />
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Proficient in bridging modern React/Next.js frontends with robust Java & Node.js backend architectures and RESTful services.
          </p>
        </motion.div>

        {/* Card 2: Algorithms & Logic */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
          whileHover={{ scale: 1.02, y: -8 }}
          className="relative bg-slate-950/80 backdrop-blur-xl border border-indigo-500/30 p-6 rounded-3xl shadow-xl hover:border-indigo-500/60 transition-all group"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Strong foundation in Data Structures, Algorithms, and Core Computer Science fundamentals like Operating Systems and Memory Optimization.
          </p>
        </motion.div>

        {/* Card 3: Continuous Learning / Growth */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
          whileHover={{ scale: 1.02, y: -8 }}
          className="relative bg-slate-950/80 backdrop-blur-xl border border-indigo-500/30 p-6 rounded-3xl shadow-xl hover:border-indigo-500/60 transition-all group md:col-span-2 lg:col-span-1"
        >
          <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Computer Science</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Focused on writing clean, readable, and highly maintainable production code while staying up-to-date with modern tech ecosystems.
          </p>
        </motion.div>
      </motion.div>

      {/* Highlight Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Core Stack", value: "Java", icon: <Terminal className="w-4 h-4 text-indigo-400" /> },
          { label: "Architecture", value: "REST APIs", icon: <Zap className="w-4 h-4 text-indigo-400" /> },
          { label: "Databases", value: "MySQL & MongoDB", icon: <Sparkles className="w-4 h-4 text-indigo-400" /> },
          { label: "Frameworks", value: "React", icon: <Code2 className="w-4 h-4 text-indigo-400" /> },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950/80 backdrop-blur-xl border border-indigo-500/20 p-4 rounded-2xl flex items-center gap-3 shadow-lg"
          >
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
              {stat.icon}
            </div>
            <div>
              <span className="block text-sm font-extrabold text-white">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                {stat.label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
