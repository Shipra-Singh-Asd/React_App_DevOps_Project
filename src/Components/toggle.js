import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // Check user preference from Local Storage
  const getInitialTheme = () => {
    return localStorage.getItem('darkMode') === 'enabled';
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme());

  // Toggle Dark Mode Function
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      // Store preference in Local Storage
      localStorage.setItem('darkMode', newMode ? 'enabled' : 'disabled');
      return newMode;
    });
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default DarkModeToggle;
