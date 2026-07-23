import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    title: "Portfolio Website", 
    desc: "My personal portfolio built with React, Tailwind CSS, and Framer Motion.", 
    status: "Live",
    link: "https://portfolio-website-azure-iota-14.vercel.app"
  },
  { 
    title: "Nexus Core AI Engine", 
    desc: "A premium Full-Stack AI Chat platform featuring secure user authentication schemas, cloud database storage, and structured Llama-3 model responses.", 
    status: "Live", 
    link: "https://ai-chat-bot-delta-lilac.vercel.app" 
  },
  { 
    title: "Vintage Core Store", 
    desc: "A full-stack MERN e-commerce application featuring complete authentication pipelines, product catalog routing, state management, and live order ledgers.", 
    status: "Live",
    link: "https://vintage-core-store.vercel.app"
  },
  { 
    title: "Task Matrix Engine", 
    desc: "Enterprise-grade Kanban workflow manager featuring smooth drag-and-drop mechanics, JWT multi-user authentication, priority filtering, and live state synchronization with MongoDB Atlas.", 
    status: "Live",
    link: "https://your-task-matrix.vercel.app" // Apne live Vercel link se replace kar lena
  },
  { 
    title: "Jarvis AI Assistant", 
    desc: "Autonomous voice companion featuring web & YouTube summarization, PDF analysis, real-time weather & news updates, persistent memory, and code explanation.", 
    status: "Coming Soon",
    link: "#"
  },
  { 
    title: "AI Interview Prep Platform", 
    desc: "AI evaluation engine featuring resume parsing, dynamically generated mock technical interview questions, interactive mock mode, and real-time performance feedback.", 
    status: "Coming Soon",
    link: "#"
  },
  { 
    title: "Smart Expense Tracker", 
    desc: "Comprehensive financial dashboard with dynamic analytics charts, automated monthly reports, user authentication, and complete CRUD transaction management.", 
    status: "Coming Soon",
    link: "#"
  },
  { 
    title: "Real-Time Chat Engine", 
    desc: "High-concurrency instant messenger powered by Socket.IO featuring live online status, real-time typing indicators, and secure file sharing capabilities.", 
    status: "Coming Soon",
    link: "#"
  },
  { 
    title: "URL Shortener & Analytics", 
    desc: "Full-stack link management tool featuring custom short links, real-time click analytics dashboard, dynamic QR code generation, and protected user routes.", 
    status: "Coming Soon",
    link: "#"
  },
  { 
    title: "Markdown Notes App", 
    desc: "Rich text note-taking workspace supporting full Markdown rendering, tag-based taxonomy categorization, global search, and instant persistence.", 
    status: "Coming Soon",
    link: "#"
  }
];

// Shaking/Wobble effect jab card par hover karein (Coming Soon projects ke liye)
const shakeAnimation = {
  hover: {
    x: [0, -4, 4, -4, 4, 0],
    transition: { duration: 0.4 }
  }
};

export default function Projects() {
  const [filter, setFilter] = useState('Featured');

  // Filter Logic: Manage Live vs Roadmap views cleanly
  const filteredProjects = projects.filter((project) => {
    if (filter === 'Featured') return project.status === 'Live';
    if (filter === 'Roadmap') return project.status === 'Coming Soon';
    return true; // 'All'
  });

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Projects</h2>

      {/* Clean Filter Tabs */}
      <div className="flex justify-center gap-3 mb-10">
        {[
          { id: 'Featured', label: '🚀 Live Apps' },
          { id: 'Roadmap', label: '⏳ Roadmap (Upcoming)' },
          { id: 'All', label: '📦 All Projects' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Managed grid layout for production responsive project frames */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          const isLive = project.status === "Live";
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              
              // Original Framer Motion hover logic
              whileHover={isLive ? { scale: 1.03 } : "hover"}
              variants={!isLive ? shakeAnimation : {}}
              
              className={`p-6 bg-white dark:bg-gray-900 border rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300 relative overflow-hidden group
                ${isLive 
                  ? 'border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/5' 
                  : 'border-gray-200 dark:border-gray-800/80 opacity-75 hover:opacity-100 hover:border-amber-500/40 dark:hover:border-amber-400/30 hover:shadow-md hover:shadow-amber-500/5 cursor-not-allowed'
                }`}
            >
              {/* Original Background glowing indicator for coming soon */}
              {!isLive && (
                <div className="absolute -inset-px bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div className="relative z-10">
                <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full 
                  ${isLive 
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300"
                  }`}
                >
                  {project.status}
                </span>
                
                <h3 className="text-xl font-bold mt-4 mb-2">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
              </div>

              <div className="relative z-10">
                {isLive ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-blue-500 dark:text-blue-400 font-medium text-sm hover:underline flex items-center gap-1"
                  >
                    View Project &rarr;
                  </a>
                ) : (
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium flex items-center gap-1 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                    🔒 Under Development
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}