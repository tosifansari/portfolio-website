import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-wider text-blue-600 dark:text-blue-400">
          TA.
        </a>
        <div className="flex items-center gap-6 font-medium">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-yellow-400 hover:scale-110 transition-transform"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}