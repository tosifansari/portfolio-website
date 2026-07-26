import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('live');

  const liveProjects = [
    {
      id: "portfolio",
      title: "Portfolio Website",
      status: "LIVE",
      description: "My personal portfolio built with React, Tailwind CSS, and Framer Motion.",
      link: "#"
    },
    {
      id: "nexus",
      title: "Nexus Core AI Engine",
      status: "LIVE",
      description: "A premium Full-Stack AI Chat platform featuring secure user authentication schemas, cloud database storage, and structured Llama-3 model responses.",
      link: "#"
    },
    {
      id: "vintage",
      title: "Vintage Core Store",
      status: "LIVE",
      description: "A full-stack MERN e-commerce application featuring complete authentication pipelines, product catalog routing, state management, and live order ledgers.",
      link: "#"
    },
    {
      id: "task-matrix",
      title: "Task Matrix Engine",
      status: "LIVE",
      description: "Enterprise-grade Kanban workflow manager featuring smooth drag-and-drop mechanics, JWT multi-user authentication, priority filtering, and live state synchronization with MongoDB Atlas.",
      link: "#"
    },
    {
      id: "aether",
      title: "AETHER (Real-Time Chat Engine)",
      status: "LIVE",
      description: "A sleek 1-on-1 direct messaging platform powered by Socket.IO featuring real-time chat, custom handle system (#tag), live voice notes, image sharing, and interactive reactions.",
      link: "https://chat-engine-r8uu.vercel.app/"
    }
  ];

  const upcomingProjects = [
    {
      id: "jarvis",
      title: "Jarvis AI Assistant",
      status: "COMING SOON",
      description: "Autonomous voice companion featuring web & YouTube summarization, PDF analysis, real-time weather & news updates, persistent memory, and code explanation."
    },
    {
      id: "interview",
      title: "AI Interview Prep Platform",
      status: "COMING SOON",
      description: "AI evaluation engine featuring resume parsing, dynamically generated mock technical interview questions, interactive mock mode, and real-time performance feedback."
    },
    {
      id: "expense",
      title: "Smart Expense Tracker",
      status: "COMING SOON",
      description: "Comprehensive financial dashboard with dynamic analytics charts, automated monthly reports, user authentication, and complete CRUD transaction management."
    },
    {
      id: "url",
      title: "URL Shortener & Analytics",
      status: "COMING SOON",
      description: "Full-stack link management tool featuring custom short links, real-time click analytics dashboard, dynamic QR code generation, and protected user routes."
    },
    {
      id: "notes",
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
    <section id="projects" className="py-12 w-full">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 tracking-tight">
        Projects
      </h2>

      {/* Tabs */}
      <div className="flex justify-center items-center gap-3 mb-10 flex-wrap">
        <button
          onClick={() => setActiveTab('live')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
            activeTab === 'live'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-500/40'
              : 'bg-gray-200/80 dark:bg-gray-800/60 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300/80 dark:border-gray-700/50'
          }`}
        >
          🚀 Live Apps
        </button>

        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
            activeTab === 'upcoming'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-500/40'
              : 'bg-gray-200/80 dark:bg-gray-800/60 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300/80 dark:border-gray-700/50'
          }`}
        >
          ⏳ Roadmap (Upcoming)
        </button>

        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
            activeTab === 'all'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-500/40'
              : 'bg-gray-200/80 dark:bg-gray-800/60 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300/80 dark:border-gray-700/50'
          }`}
        >
          📦 All Projects
        </button>
      </div>

      {/* Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {getProjectsToDisplay().map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-amber-500/15"
            >
              <div>
                <div className="mb-4">
                  {project.status === 'LIVE' ? (
                    <span className="inline-flex items-center text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      LIVE
                    </span>
                  ) : (
                    /* Golden Glowing Badge */
                    <span className="inline-flex items-center text-[10px] font-bold text-amber-500 dark:text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-md uppercase tracking-wider shadow-[0_0_12px_rgba(245,158,11,0.25)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] group-hover:bg-gradient-to-r group-hover:from-amber-500/20 group-hover:to-yellow-500/20 group-hover:border-amber-400 transition-all duration-300">
                      COMING SOON
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                {project.status === 'LIVE' ? (
                  <a
                    href={project.link}
                    target={project.link !== '#' ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 gap-1 transition-all duration-200 group-hover:translate-x-1"
                  >
                    View Project &rarr;
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 group-hover:text-amber-300 font-medium transition-colors">
                    🔒 Under Development
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}