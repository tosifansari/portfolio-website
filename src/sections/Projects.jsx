import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      title: "AETHER",
      subtitle: "Next-Gen 1-on-1 Real-Time Messaging Network",
      description:
        "A sleek, glassmorphic direct messaging platform built with the MERN stack and Socket.IO. Features instant 1-on-1 messaging, friend request management, live voice notes, image sharing, and interactive message reactions.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express", "Socket.IO", "MongoDB", "JWT"],
      liveLink: "https://chat-engine-r8uu.vercel.app/",
      githubLink: "https://github.com/tosifansari/chat-engine"
    }
    // Agle projects yahan comma (,) lagake add kar sakte ho
  ];

  return (
    <section className="py-12 bg-slate-950 text-slate-100 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          Featured Projects
        </h2>

        <div className="grid gap-6">
          {projectsList.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-slate-700 transition-all group"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-600/20 text-cyan-400 rounded-xl border border-indigo-500/30 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-slate-400">{project.subtitle}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl transition-all shadow-md shadow-indigo-600/20 flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono bg-slate-950 border border-slate-800 text-cyan-400 px-2.5 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}