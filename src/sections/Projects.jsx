import React, { useState } from 'react';

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
    <section id="projects" className="py-12 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-center mb-8 text-white tracking-tight">
        Projects
      </h2>

      {/* Tab Filter Container */}
      <div className="flex justify-center items-center gap-2 mb-10">
        <button
          onClick={() => setActiveTab('live')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
            activeTab === 'live'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-500/50'
              : 'bg-[#0f172a]/60 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          🚀 Live Apps
        </button>

        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
            activeTab === 'upcoming'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-500/50'
              : 'bg-[#0f172a]/60 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          ⏳ Roadmap (Upcoming)
        </button>

        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
            activeTab === 'all'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-500/50'
              : 'bg-[#0f172a]/60 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          📦 All Projects
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {getProjectsToDisplay().map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-[#0a101d]/80 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-[#0d1527]"
          >
            <div>
              {/* Status Badge */}
              <div className="mb-3">
                {project.status === 'LIVE' ? (
                  <span className="inline-flex items-center text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md uppercase tracking-wide">
                    LIVE
                  </span>
                ) : (
                  <span className="inline-flex items-center text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-md uppercase tracking-wide shadow-[0_0_12px_rgba(245,158,11,0.25)] animate-pulse">
                    COMING SOON
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                {project.description}
              </p>
            </div>

            {/* Bottom Link / Indicator */}
            <div>
              {project.status === 'LIVE' ? (
                <a
                  href={project.link}
                  target={project.link !== '#' ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                >
                  View Project &rarr;
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-400/80 font-medium">
                  🔒 Under Development
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}