import React, { useState } from 'react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('live');

  // LIVE PROJECTS ARRAY
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

  // ROADMAP (UPCOMING) PROJECTS ARRAY
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

  const getDisplayedProjects = () => {
    if (activeTab === 'live') return liveProjects;
    if (activeTab === 'upcoming') return upcomingProjects;
    return [...liveProjects, ...upcomingProjects];
  };

  return (
    <section id="projects" className="py-16 bg-[#060a12] text-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Projects
        </h2>

        {/* Tab Filters */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'live' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            🚀 Live Apps
          </button>

          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'upcoming' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            ⏳ Roadmap (Upcoming)
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'all' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            📦 All Projects
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getDisplayedProjects().map((project, idx) => (
            <div 
              key={idx}
              className="bg-[#0b1120] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
            >
              <div>
                {/* Status Badge */}
                <div className="mb-4">
                  {project.status === 'LIVE' ? (
                    <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      COMING SOON
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>

                {/* Project Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Action Button / Link */}
              <div>
                {project.status === 'LIVE' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                  >
                    View Project &rarr;
                  </a>
                ) : (
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    🔒 Under Development
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}