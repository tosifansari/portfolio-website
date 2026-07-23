import React from 'react';
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

// Shaking/Wobble effect for Coming Soon projects on click/hover
const shakeAnimation = {
  hover: {
    x: [0, -4, 4, -4, 4, 0],
    transition: { duration: 0.4 }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
      
      {/* Managed grid layout for production responsive project frames */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const isLive = project.status === "Live";
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              
              whileHover={isLive ? { scale: 1.025, y: -4 } : "hover"}
              variants={!isLive ? shakeAnimation : {}}
              
              className={`p-6 bg-white dark:bg-gray-900 border rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300 relative overflow-hidden group
                ${isLive 
                  ? 'border-gray-200 dark:border-gray-800 hover:border-blue-500/60 dark:hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10' 
                  : 'border-gray-200 dark:border-amber-500/20 hover:border-amber-400/70 hover:shadow-xl hover:shadow-amber-500/10'
                }`}
            >
              {/* ⚡ Unique Light Sweep / Shimmer Effect (Hover karne par sweep lega) */}
              <div className={`absolute -inset-full top-0 block h-full w-1/2 z-20 transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none ${
                isLive ? 'bg-gradient-to-r from-transparent via-blue-400/15 to-transparent' : 'bg-gradient-to-r from-transparent via-amber-400/20 to-transparent'
              }`} />

              {/* 🌟 Background Glow Layer */}
              <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                isLive 
                  ? 'bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-indigo-500/0' 
                  : 'bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-yellow-500/0'
              }`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  {/* Status Badge */}
                  {isLive ? (
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {project.status}
                    </span>
                  ) : (
                    /* 👑 Unique Animated Border Badge for Coming Soon */
                    <span className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px]">
                      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F59E0B_0%,#FCD34D_50%,#F59E0B_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-3 py-1 text-[11px] font-bold text-amber-400 backdrop-blur-3xl gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        {project.status}
                      </span>
                    </span>
                  )}
                </div>
                
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  isLive ? 'group-hover:text-blue-400' : 'group-hover:text-amber-400'
                }`}>
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
                    className="text-blue-500 dark:text-blue-400 font-medium text-sm hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    View Project &rarr;
                  </a>
                ) : (
                  <span className="text-xs text-amber-400/90 font-medium flex items-center gap-1 group-hover:text-amber-300 transition-colors">
                    🔒 Under Development
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Embedded CSS Animation Keyframes */}
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