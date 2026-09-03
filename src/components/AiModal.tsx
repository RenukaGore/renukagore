"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User } from "lucide-react";

interface AiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiModal({ isOpen, onClose }: AiModalProps) {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi! I'm Renuka's AI assistant. Ask me anything about her skills, projects, or background!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "ai", text: data.reply || "Sorry, I couldn't process that." }]);
    } catch {
      setMessages((prev) => [...prev, { sender: "ai", text: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-lg bg-[#0d0f1d] border border-indigo-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[520px]"
          >
            {/* Header */}
            <div className="p-4 px-6 border-b border-slate-800 flex items-center justify-between bg-[#131527]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Portfolio Assistant <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium">Powered by Portfolio AI</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`p-2 rounded-xl shrink-0 ${msg.sender === "user" ? "bg-indigo-600 text-white" : "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"}`}>
                    {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3.5 rounded-2xl text-xs leading-relaxed max-w-[80%] ${msg.sender === "user" ? "bg-indigo-600 text-white rounded-tr-none" : "bg-[#131527] text-slate-200 border border-slate-800 rounded-tl-none"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-xs text-indigo-400 p-2">
                  <Bot className="w-4 h-4 animate-bounce" /> Assistant is thinking...
                </div>
              )}
            </div>

            {/* Form Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-slate-800/80 bg-[#0b0c16] flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my skills, projects, experience..."
                className="flex-1 px-4 py-3 rounded-xl bg-[#131527] border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button type="submit" disabled={loading} className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all shadow-md shadow-indigo-600/30 disabled:opacity-50">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}