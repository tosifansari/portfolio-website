import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 antialiased selection:bg-blue-500 selection:text-white flex flex-col">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Main Container Wrapper with overflow prevention */}
      <main className="w-full max-w-full overflow-x-hidden flex-grow pt-16 space-y-32">
        <div className="max-w-5xl mx-auto px-4 w-full"><Hero /></div>
        <div className="max-w-5xl mx-auto px-4 w-full"><About /></div>
        <div className="max-w-5xl mx-auto px-4 w-full"><Skills /></div>
        <div className="max-w-6xl mx-auto px-4 w-full"><Projects /></div>
        <div className="max-w-5xl mx-auto px-4 w-full"><Contact /></div>
      </main>

      <Footer />
    </div>
  );
}

export default App;