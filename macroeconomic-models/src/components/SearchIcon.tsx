'use client';

import { useState } from 'react';

export default function SearchIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // For now, just toggle a simple state
    // Later this could open a search modal or redirect to search page
    setIsOpen(!isOpen);
    // Could also redirect to a search page or open a modal
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
      aria-label="Search"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  );
}