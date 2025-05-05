import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import { lightTheme, darkTheme } from './styles/theme';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/common/DarkModeToggle';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldUseDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDarkMode);
    
    if (shouldUseDarkMode) {
      document.body.classList.add('dark-mode');
      setIsDarkMode(true);
      setCurrentTheme(darkTheme);
    } else {
      document.body.classList.remove('dark-mode');
      setCurrentTheme(lightTheme);
    }
  }, []);

  const handleThemeToggle = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
    setCurrentTheme(darkMode ? darkTheme : lightTheme);
    
    // Manter a compatibilidade com classes CSS para componentes que usam var(--variáveis)
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <DarkModeToggle 
        onToggle={handleThemeToggle} 
        setCurrentTheme={(theme) => setCurrentTheme(theme)}
      />
    </ThemeProvider>
  );
};

export default App;