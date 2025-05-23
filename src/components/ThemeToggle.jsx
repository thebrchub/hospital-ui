import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-600 dark:text-white"
      onClick={() => setDark(!dark)}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
