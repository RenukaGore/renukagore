"use client";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Bootstrap Framework", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Advanced" },
      { name: "Javascript", level: "Advanced" }

    ],
  },
  {
    category: "Backend & Languages",
    icon: Server,
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
      { name: "C / C++", level: "Basic" },
      { name: "PHP", level: "Intermediate" }
    ],
  },
  {
    category: "Database & Tools",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Postman", level: "Intermediate" },
      { name: "Thunder Client", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center max-w-2xl mx-auto"
      >
        <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase border-b-2 border-indigo-500 pb-1">
          TECHNICAL EXPERTISE
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          Skills & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          The core programming languages, frameworks, databases, and development tools I use to build robust software.
        </p>
      </motion.div>

      {/* Category Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {skillCategories.map((cat, idx) => {
          const IconComponent = cat.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-[#0b0c16]/80 backdrop-blur-xl border border-indigo-500/20 hover:border-indigo-500/50 p-8 rounded-3xl shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131527] border border-slate-800/80 text-slate-200 hover:border-indigo-500/40 hover:text-white transition-all text-xs font-semibold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}