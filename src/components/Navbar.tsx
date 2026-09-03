"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Cpu, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenAi?: () => void;
}

export default function Navbar({ onOpenAi }: NavbarProps) {
  const [activeTab, setActiveTab] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-0 right-0 z-50 px-4 max-w-7xl mx-auto"
    >
      <div className="bg-[#0b0c16]/90 backdrop-blur-xl border border-slate-800/80 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl relative">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 text-sm font-extrabold tracking-widest text-white">
          <span className="p-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
            <Cpu className="w-4 h-4" />
          </span>
          RENUKA.DEV
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#131527] p-1 rounded-full border border-slate-800/50">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 tracking-wider ${
                  isActive
                    ? "bg-[#6366f1] text-white shadow-md shadow-indigo-600/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Hamburger Toggle */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={onOpenAi}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 py-2 rounded-full bg-[#131527] border border-indigo-500/40 text-slate-200 text-xs font-bold flex items-center gap-2 hover:border-indigo-400 transition-all shadow-md cursor-pointer"
          >
            <Bot className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">ASK AI</span>
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#131527] border border-slate-800 text-slate-300 hover:text-white transition-all"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-3 p-4 bg-[#0d0f1d] border border-slate-800 rounded-2xl shadow-2xl flex flex-col gap-2 md:hidden z-50"
            >
              {navLinks.map((link) => {
                const isActive = activeTab === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all tracking-wider ${
                      isActive
                        ? "bg-[#6366f1] text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-300 hover:bg-[#131527]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}