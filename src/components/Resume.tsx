"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink, GraduationCap, Sparkles } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Resume() {
  const experiences = [
    {
      title: "Full Stack Developer / Software Engineer",
      company: "Freelance & Projects",
      period: "Present",
      type: "Fresher",
      description:
        "Developing scalable web applications using Express.js, React, Node.js, and Java. Designing optimized RESTful APIs, modern dynamic user interfaces, and database schemas.",
      highlights: ["React", "Bootstrap", "Java", "Tailwind CSS", "REST APIs"],
    },
    {
      title: "Computer Science & Engineering",
      company: "SPPU",
      period: "2023 - 2026",
      type: "Education",
      description:
        "Focused core coursework on Data Structures, Algorithms, Operating Systems, Memory Management, and Relational Database Systems.",
      highlights: ["Data Structures", "Algorithms", "Java", "MySQL", "OS"],
    },
  ];

  return (
    <section id="resume" className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center max-w-2xl mx-auto"
      >
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase border-b-2 border-indigo-500 pb-1">
          MY JOURNEY
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          Resume & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          A summary of my education, key roles, technical growth, and hands-on software development experience.
        </p>
      </motion.div>

      {/* Experience Timeline Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
      >
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            animate={{ y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5 + index, ease: "easeInOut" }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative bg-slate-950/85 backdrop-blur-xl border border-indigo-500/30 p-8 rounded-3xl shadow-2xl hover:border-indigo-500/60 transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {item.type === "Experience" ? (
                    <Briefcase className="w-3.5 h-3.5" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5" />
                  )}
                  {item.type}
                </span>

                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {item.period}
                </span>
              </div>

              {/* Title & Company */}
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                {item.title}
                <Sparkles className="w-4 h-4 text-indigo-400/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm font-semibold text-slate-400 mb-4">{item.company}</p>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900">
              {item.highlights.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Download CTA Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="/resume.pdf"
          target="_blank"
          className="px-8 py-4 bg-slate-950/90 hover:bg-slate-900 text-white font-semibold rounded-2xl border border-indigo-500/30 hover:border-indigo-500/60 shadow-xl flex items-center gap-3 backdrop-blur-xl transition-all text-sm"
        >
          View Full Resume Document <ExternalLink className="w-4 h-4 text-indigo-400" />
        </motion.a>
      </motion.div>
    </section>
  );
}