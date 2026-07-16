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
    title: "E-Commerce Platform", 
    desc: "A comprehensive digital marketplace engine featuring dynamic product catalogs, shopping cart logic, and checkout payment gateway workflows.", 
    status: "Coming Soon",
    link: "#"
  },
  { 
    title: "Task Manager", 
    desc: "A production-grade productivity dashboard designed to handle task prioritization, kanban states, and individual deadlines tracking.", 
    status: "Coming Soon",
    link: "#"
  },
  { 
    title: "Jarvis AI", 
    desc: "An intelligent voice-activated automated desktop companion built to parse personalized operational scripts and custom commands.", 
    status: "Coming Soon",
    link: "#"
  },
  { 
    title: "Interview Prep AI", 
    desc: "An advanced automated evaluation engine tailored to mock technical interviews, track speech metrics, and render real-time diagnostic performance metrics.", 
    status: "Coming Soon",
    link: "#"
  },
];

// Shaking/Wobble effect jab card par hover karein (Coming Soon projects ke liye)
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
      
      {/* Managed grid layout for up to 6 clean production responsive project frames */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const isLive = project.status === "Live";
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              
              // Live ke liye scaling animation aur Coming Soon ke liye shaking/glow effect
              whileHover={isLive ? { scale: 1.03 } : "hover"}
              variants={!isLive ? shakeAnimation : {}}
              
              className={`p-6 bg-white dark:bg-gray-900 border rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300 relative overflow-hidden group
                ${isLive 
                  ? 'border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/5' 
                  : 'border-gray-200 dark:border-gray-800/80 opacity-75 hover:opacity-100 hover:border-amber-500/40 dark:hover:border-amber-400/30 hover:shadow-md hover:shadow-amber-500/5 cursor-not-allowed'
                }`}
            >
              {/* Background glowing indicator for coming soon */}
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