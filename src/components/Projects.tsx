"use client";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "FusionIDE",
    description: "FusionIDE is a browser-based collaborative IDE that allows users to write, run, and manage code in multiple programming languages. It combines real-time collaboration, AI assistance, Voice-to-Code, UML generation, and code execution into a single platform",
    tech: [ "React", "CSS", "Node.js","Express.js", "MongoDB Atlas","Monaco Editor"],
    github: "https://github.com/RenukaGore/FusionIDE",
    live: "#",
  },
  {
    title: "Doneto",
    description: "Developed a full-stack donation platform with secure user authentication and admin verification.Implemented payment processing, donation tracking, receipts, and reports to improve transparency and donation management.",
    tech: ["HTML","CSS", "JavaScript","Node.js","Express.js","MySQL"],
    github: "https://github.com/RenukaGore/Doneto",
    live: "#",
  },
  {
    title: "SkylineCRM",
    description: "SkylineCRM is a real estate management system that streamlines property listings, customer records, bookings, and transaction management through a centralized admin dashboard",
    tech: [ "HTML", "CSS","JavaScript","Bootstrap","JSP","Java","MySQL"],
    github: "https://github.com/RenukaGore/SkyLqine-CRM",
    live: "#",
  },
  {
    title: "College Event Management System",
    description: "College Event Management System is a web application that simplifies organizing college events by managing event creation, participant registration, scheduling,certificate generation and notifications in one platform.",
    tech: [ "HTML", "CSS","JavaScript","PHP","MySQL"],
    github: "https://github.com/RenukaGore/College-Event-Management-System",
    live: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase border-b-2 border-indigo-500 pb-1">
          FEATURED WORK
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            className="bg-slate-950/80 backdrop-blur-xl border border-indigo-500/30 p-6 rounded-3xl shadow-xl hover:border-indigo-500/60 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <FolderGit2 className="w-8 h-8 text-indigo-400" />
                <div className="flex gap-3">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  {proj.live !== "#" && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900">
              {proj.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-indigo-300 border border-slate-800 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}