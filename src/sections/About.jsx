import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Hello! I'm <span className="text-blue-500 font-semibold">Tosif Ansari</span>, a passionate Full Stack & AI Developer. 
          I love building clean, modern, and highly interactive web applications with AI integrations.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          I enjoy solving complex problems, writing clean code, and constantly learning new technologies 
          to build scalable digital solutions.
        </p>
      </motion.div>
    </section>
  );
}