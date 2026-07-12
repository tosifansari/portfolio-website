import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Get In Touch</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Whether you want to discuss a project, work together, or just say hi, feel free to connect!
        </p>
        
        <div className="flex justify-center gap-8 text-2xl">
          <a href="mailto:worldwarz9953@gmail.com" className="hover:text-blue-500 transition-transform hover:scale-110"><FaEnvelope /></a>
          <a href="https://github.com/tosifansari" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-transform hover:scale-110"><FaGithub /></a>
          <a href="https://linkedin.com/in/tosif-ansari-316b27276" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-transform hover:scale-110"><FaLinkedin /></a>
        </div>
      </motion.div>
    </section>
  );
}