import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('live');

  const liveProjects = [
    {
      title: "Portfolio Website",
      status: "LIVE",
      description: "My personal portfolio built with React, Tailwind CSS, and Framer Motion.",
      link: "#"
    },
    {
      title: "Nexus Core AI Engine",
      status: "LIVE",
      description: "A premium Full-Stack AI Chat platform featuring secure user authentication schemas, cloud database storage, and structured Llama-3 model responses.",
      link: "#"
    },
    {
      title: "Vintage Core Store",
      status: "LIVE",
      description: "A full-stack MERN e-commerce application featuring complete authentication pipelines, product catalog routing, state management, and live order ledgers.",
      link: "#"
    },
    {
      title: "Task Matrix Engine",
      status: "LIVE",
      description: "Enterprise-grade Kanban workflow manager featuring smooth drag-and-drop mechanics, JWT multi-user authentication, priority filtering, and live state synchronization with MongoDB Atlas.",
      link: "#"
    },
    {
      title: "AETHER (Real-Time Chat Engine)",
      status: "LIVE",
      description: "A sleek 1-on-1 direct messaging platform powered by Socket.IO featuring real-time chat, custom handle system (#tag), live voice notes, image sharing, and interactive reactions.",
      link: "https://chat-engine-r8uu.vercel.app/"
    }
  ];

  const upcomingProjects = [
    {
      title: "Jarvis AI Assistant",
      status: "COMING SOON",
      description: "Autonomous voice companion featuring web & YouTube summarization, PDF analysis, real-time weather & news updates, persistent memory, and code explanation."
    },
    {
      title: "AI Interview Prep Platform",
      status: "COMING SOON",
      description: "AI evaluation engine featuring resume parsing, dynamically generated mock technical interview questions, interactive mock mode, and real-time performance feedback."
    },
    {
      title: "Smart Expense Tracker",
      status: "COMING SOON",
      description: "Comprehensive financial dashboard with dynamic analytics charts, automated monthly reports, user authentication, and complete CRUD transaction management."
    },
    {
      title: "URL Shortener & Analytics",
      status: "COMING SOON",
      description: "Full-stack link management tool featuring custom short links, real-time click analytics dashboard, dynamic QR code generation, and protected user routes."
    },
    {
      title: "Markdown Notes App",
      status: "COMING SOON",
      description: "Rich text note-taking workspace supporting full Markdown rendering, tag-based taxonomy categorization, global search, and instant persistence."
    }
  ];

  const getProjectsToDisplay = () => {
    if (activeTab === 'live') return liveProjects;
    if (activeTab === 'upcoming') return upcomingProjects;
    return [...liveProjects, ...upcomingProjects];
  };

  return (
    <section id="projects" className="py-20 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
          Projects
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'live'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800/40 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/50'
            }`}
          >
            🚀 Live Apps
          </button>

          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'upcoming'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800/40 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/50'
            }`}
          >
            ⏳ Roadmap (Upcoming)
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800/40 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/50'
            }`}
          >
            📦 All Projects
          </button>
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {getProjectsToDisplay().map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-slate-900/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between transition-colors shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Status Badges */}
                  <div className="mb-4">
                    {project.status === 'LIVE' ? (
                      <span className="inline-flex items-center text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                        LIVE
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-md uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse">
                        COMING SOON
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div>
                  {project.status === 'LIVE' ? (
                    <a
                      href={project.link}
                      target={project.link !== '#' ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 gap-1 transition-all group-hover:translate-x-1"
                    >
                      View Project &rarr;
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-amber-400/80 font-medium">
                      🔒 Under Development
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}