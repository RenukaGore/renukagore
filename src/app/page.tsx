"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AiModal from "@/components/AiModal";

export default function Home() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <main className="bg-[#0b0c16] min-h-screen text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenAi={() => setIsAiOpen(true)} />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <AiModal isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </main>
  );
}