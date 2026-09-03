"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, FolderCheck, Layers, MapPin } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "1+", icon: Code2 },
  { label: "Projects Shipped", value: "10+", icon: FolderCheck },
  { label: "Tech Stacks", value: "5+", icon: Layers },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Photo Container */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Ambient Glow behind the photo */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

          {/* Photo Card */}
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 group shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Renuka Gore"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              priority
            />
            
            {/* Bottom Gradient Overlay with Location Badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800">
              <div>
                <p className="text-xs text-slate-400 font-medium">Based in</p>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Pune, India
                </p>
              </div>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bio and Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6 leading-tight">
            Turning complexity into <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">simplicity</span>.
          </h2>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
            I'm <strong className="text-slate-200">Renuka Gore</strong>, a Full Stack Developer based in Pune, India. My work focuses on building digital products that are fast, reliable, and genuinely enjoyable to use.
          </p>

          <p className="text-slate-400 text-base leading-relaxed mb-8">
            I specialize in full-stack web application development and believe great software lives at the intersection of solid backend architecture and seamless frontend user interface design.
          </p>

          {/* Quick Stat Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <stat.icon className="w-5 h-5 text-indigo-400 mb-2" />
                <p className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs text-slate-400 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}