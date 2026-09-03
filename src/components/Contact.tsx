"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, MapPin, ArrowUpRight } from "lucide-react";

// Inline SVG for GitHub
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// Inline SVG for LinkedIn
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "1d11cdae-c8d3-4bf2-a41e-cebc8ac91450");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({ success: true, message: "Thank you! Your message has been sent successfully." });
        (event.target as HTMLFormElement).reset();
      } else {
        setResult({ success: false, message: data.message || "Something went wrong. Please try again." });
      }
    } catch {
      setResult({ success: false, message: "Unable to send message. Check your connection." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase border-b-2 border-indigo-500 pb-1">
          GET IN TOUCH
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          Let's Work <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          Have a project in mind or want to discuss opportunities? Send me a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left Info Panel */}
        <div className="lg:col-span-5 bg-[#0d0f1d]/90 backdrop-blur-2xl border border-indigo-500/20 p-8 rounded-3xl shadow-2xl flex flex-col justify-between space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-8">
              Feel free to reach out via email or connect with me on social platforms.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Email</p>
                  <a href="mailto:renuka@example.com" className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                    renuka@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-slate-200">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/80">
            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4">Connect Socially</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/RenukaGore/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#131527] border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white flex items-center justify-between text-xs font-semibold transition-all group"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-indigo-400" /> GitHub
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/renukagore2003/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#131527] border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white flex items-center justify-between text-xs font-semibold transition-all group"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" /> LinkedIn
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7 bg-[#0d0f1d]/90 backdrop-blur-2xl border border-indigo-500/20 p-8 sm:p-10 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold tracking-wider uppercase text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#131527] border border-slate-800/80 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold tracking-wider uppercase text-slate-300 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#131527] border border-slate-800/80 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold tracking-wider uppercase text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="How can I help you?"
                className="w-full px-4 py-3.5 rounded-xl bg-[#131527] border border-slate-800/80 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all text-xs tracking-wider uppercase disabled:opacity-50"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>

            {result && (
              <div
                className={`p-4 rounded-xl flex items-center gap-3 text-xs font-semibold ${
                  result.success
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                    : "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                }`}
              >
                {result.success ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                {result.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}