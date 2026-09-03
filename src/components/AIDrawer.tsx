"use client";
import { useState } from "react";
import { X, Send, Bot } from "lucide-react";

export default function AIDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "👋 Hi! Ask me anything about my experience, tech stack, or projects." }
  ]);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    const currentQuery = input;
    setInput("");

    setTimeout(() => {
      let reply = "I specialize in Full Stack Web Development, React, Next.js, Node.js, TypeScript, and database management.";
      if (currentQuery.toLowerCase().includes("project")) {
        reply = "I have built healthcare platforms, expense trackers, and interactive web applications!";
      } else if (currentQuery.toLowerCase().includes("contact") || currentQuery.toLowerCase().includes("hire")) {
        reply = "You can contact me via the contact form on this site or reach out directly via email!";
      }
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-surface-800 h-full p-6 flex flex-col border-l border-surface-700">
        <div className="flex items-center justify-between pb-4 border-b border-surface-700">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-brand-500" />
            <h2 className="font-bold text-white">Portfolio AI Assistant</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg text-sm max-w-[85%] ${
                m.role === "user"
                  ? "bg-brand-500 text-white ml-auto"
                  : "bg-surface-900 text-slate-300 border border-surface-700"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-4 border-t border-surface-700">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about my skills..."
            className="flex-1 bg-surface-900 border border-surface-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500"
          />
          <button
            onClick={handleSend}
            className="p-2.5 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}