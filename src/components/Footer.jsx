import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-20 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>
        &copy; {currentYear} <span className="font-semibold text-gray-800 dark:text-gray-200">Tosif Ansari</span>. 
        All Rights Reserved.
      </p>
      <p className="text-xs mt-1 text-gray-400 dark:text-gray-500">
        Built with React, Tailwind CSS & Framer Motion
      </p>
    </footer>
  );
}