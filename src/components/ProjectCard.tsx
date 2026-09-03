"use client";
import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";

export interface ProjectProps {
  title: string;
  category: string;
  problem: string;
  solution: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl p-7 flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">
            {project.category}
          </span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 group-hover:text-indigo-400 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>

        <div className="space-y-3 mb-6 text-sm leading-relaxed">
          <p className="text-slate-400">
            <strong className="text-slate-200 font-semibold">Problem:</strong> {project.problem}
          </p>
          <p className="text-slate-400">
            <strong className="text-slate-200 font-semibold">Solution:</strong> {project.solution}
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <Code2 className="w-4 h-4 text-indigo-400" /> Source Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 text-sm font-medium transition-colors ml-auto"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}