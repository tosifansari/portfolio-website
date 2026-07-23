import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    title: "Portfolio Website", 
    desc: "My personal portfolio built with React, Tailwind CSS, and Framer Motion.", 
    status: "Live",
    category: "Frontend",
    link: "https://portfolio-website-azure-iota-14.vercel.app"
  },
  { 
    title: "Nexus Core AI Engine", 
    desc: "A premium Full-Stack AI Chat platform featuring secure user authentication schemas, cloud database storage, and structured Llama-3 model responses.", 
    status: "Live", 
    category: "AI & Fullstack",
    link: "https://ai-chat-bot-delta-lilac.vercel.app" 
  },
  { 
    title: "Vintage Core Store", 
    desc: "A full-stack MERN e-commerce application featuring complete authentication pipelines, product catalog routing, state management, and live order ledgers.", 
    status: "Live",
    category: "MERN",
    link: "https://vintage-core-store.vercel.app"
  },
  { 
    title: "Task Matrix Engine", 
    desc: "Enterprise-grade Kanban workflow manager featuring smooth drag-and-drop mechanics, JWT multi-user authentication, priority filtering, and live state synchronization with MongoDB Atlas.", 
    status: "Live",
    category: "MERN",
    link: "https://your-task-matrix.vercel.app" 
  },
  { 
    title: "Jarvis AI Assistant", 
    desc: "Autonomous voice companion featuring web & YouTube summarization, PDF analysis, real-time weather & news updates, persistent memory, and code explanation.", 
    status: "Coming Soon",
    category: "Upcoming",
    link: "#"
  },
  { 
    title: "AI Interview Prep Platform", 
    desc: "AI evaluation engine featuring resume parsing, dynamically generated mock technical interview questions, interactive mock mode, and real-time performance feedback.", 
    status: "Coming Soon",
    category: "Upcoming",
    link: "#"
  },
  { 
    title: "Smart Expense Tracker", 
    desc: "Comprehensive financial dashboard with dynamic analytics charts, automated monthly reports, user authentication, and complete CRUD transaction management.", 
    status: "Coming Soon",
    category: "Upcoming",
    link: "#"
  },
  { 
    title: "Real-Time Chat Engine", 
    desc: "High-concurrency instant messenger powered by Socket.IO featuring live online status, real-time typing indicators, and secure file sharing capabilities.", 
    status: "Coming Soon",
    category: "Upcoming",
    link: "#"
  }
];

const shakeAnimation = {
  hover: {
    x: [0, -4, 4, -4, 4, 0],
    transition: { duration: 0.4 }
  }
};

export default function Projects() {
  const [filter, setFilter] = useState('Featured');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'Featured') return project.status === 'Live';
    if (filter === 'Upcoming') return project.status === 'Coming Soon';
    return true;
  });

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Projects</h2>
      
      {/* Category Filter Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {['Featured', 'Upcoming', 'All'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === tab
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {tab === 'Featured' ? '🚀 Featured (Live)' : tab === 'Upcoming' ? '⏳ Roadmap' : '📦 All Projects'}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          const isLive = project.status === "Live";
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={isLive ? { scale: 1.02, y: -4 } : "hover"}
              variants={!isLive ? shakeAnimation : {}}
              className={`p-6 bg-white dark:bg-gray-900/90 backdrop-blur-xl border rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                isLive 
                  ? 'border-gray-200 dark:border-gray-800 hover:border-blue-500/60 dark:hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10' 
                  : 'border-gray-200 dark:border-gray-800/80 opacity-80 cursor-not-allowed'
              }`}
            >
              {/* ⚡ Shiny Metallic Light Sweep Bar Effect (Triggers on Hover) */}
              <div className="absolute -inset-full top-0 block h-full w-1/2 z-20 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 dark:via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

              {/* Glowing Background Glow Indicator */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  isLive 
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                }`}>
                  {project.status}
                </span>
                
                <h3 className="text-xl font-bold mt-4 mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div className="relative z-10">
                {isLive ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-blue-500 font-medium text-sm hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    View Project &rarr;
                  </a>
                ) : (
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    🔒 Under Development
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Embedded CSS Keyframes for Guaranteed Shimmer Animation */}
      <style>{`
        @keyframes shimmer {
          100% {
            left: 150%;
          }
        }
      `}</style>
    </section>
  );
}