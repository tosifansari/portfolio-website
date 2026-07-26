import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      status: "LIVE",
      description: "My personal portfolio built with React, Tailwind CSS, and Framer Motion.",
      link: "#"
    },
    {
      title: "AETHER (Real-Time Chat Engine)",
      status: "LIVE",
      description: "A sleek 1-on-1 direct messaging platform powered by Socket.IO featuring real-time chat, custom handle system (#tag), live voice notes, image sharing, and interactive reactions.",
      link: "https://chat-engine-r8uu.vercel.app/"
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
      title: "AI SaaS Platform",
      status: "COMING SOON",
      description: "An advanced AI-powered software-as-a-service application."
    },
    {
      title: "Intelligent Chatbot",
      status: "COMING SOON",
      description: "A smart AI chatbot trained to handle customized workflows."
    }
  ];

  // Parent Container Variant for Staggering Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  // Individual Card Entrance Animation Variant
  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section id="projects" className="py-12 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-center mb-10 text-white tracking-tight"
        >
          Projects
        </motion.h2>

        {/* Staggered Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative bg-[#0d1424] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                project.status === 'COMING SOON'
                  ? 'border border-amber-500/40 hover:border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)] hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                  : 'border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Status Badges */}
                <div className="mb-4">
                  {project.status === 'LIVE' ? (
                    <span className="inline-flex items-center text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      LIVE
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/40 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                      COMING SOON
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom Link / Status Text */}
              <div>
                {project.status === 'LIVE' ? (
                  <a
                    href={project.link}
                    target={project.link !== '#' ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project &rarr;
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                    🔒 Under Development
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}