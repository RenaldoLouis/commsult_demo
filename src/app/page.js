'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  // Save to localStorage
  const saveToLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  // Get from localStorage
  const getFromLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
    return null;
  };

  // Retrieve saved name on load
  useEffect(() => {
    const storedName = getFromLocalStorage('username');
    if (storedName) {
      setSavedName(storedName);
    }
  }, []);

  const handleSave = () => {
    saveToLocalStorage('username', name);
    setSavedName(name);
    setName('');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSave}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save
        </button>
      </div>
      {savedName && <p className="text-xl mt-4">Hello {savedName}</p>}
    </div>
  );
}
