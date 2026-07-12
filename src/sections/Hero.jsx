import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-6 bg-gradient-to-b from-transparent to-gray-100/30 dark:to-gray-900/30">
      
      {/* Background Animated Glows (Classy Look) */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      {/* Small Tag */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest mb-4"
      >
        Available for Freelance & Full-Time Roles
      </motion.p>

      {/* Main Name Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-5xl md:text-8xl font-black tracking-tight mb-6"
      >
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Tosif Ansari</span>
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-light max-w-2xl leading-relaxed mb-12"
      >
        Crafting high-performance <span className="font-semibold text-gray-900 dark:text-white">Full Stack Applications</span> & intelligent <span className="font-semibold text-gray-900 dark:text-white">AI Solutions</span>.
      </motion.h2>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <a
          href="#projects"
          className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
        >
          Explore My Projects
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-xl transition-all duration-300"
        >
          Let's Talk
        </a>
      </motion.div>
    </section>
  );
}