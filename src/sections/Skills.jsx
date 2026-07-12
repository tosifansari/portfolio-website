import React from 'react';
import { motion } from 'framer-motion';

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git", "AI & LLMs"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl font-medium shadow-sm hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}