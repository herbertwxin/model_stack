'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  type: 'model' | 'blog' | 'tag';
  href?: string;
  description?: string;
}

export default function SearchIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchData: SearchResult[] = [
    // Models
    { title: 'Solow Growth Model', type: 'model', href: '/models/solow', description: 'Neoclassical growth theory' },
    { title: 'IS-LM Model', type: 'model', href: '/models', description: 'Investment-Savings and Liquidity-Money equilibrium' },
    { title: 'AD-AS Model', type: 'model', href: '/models', description: 'Aggregate Demand and Supply analysis' },
    { title: 'Phillips Curve', type: 'model', href: '/models', description: 'Inflation and unemployment relationship' },
    { title: 'Real Business Cycle Model', type: 'model', href: '/models', description: 'Technology shocks and fluctuations' },
    { title: 'New Keynesian DSGE', type: 'model', href: '/models', description: 'Dynamic stochastic general equilibrium' },
    
    // Blogs
    { title: 'Kornai (1979) Framework on Autocratic Governance', type: 'blog', href: '/blogs/kornai-autocratic-governance', description: 'Political economy analysis' },
    { title: 'Fedora Silverblue Setup Guide', type: 'blog', href: '/blogs/fedora-silverblue-setup', description: 'Linux development environment' },
    
    // Tags
    { title: 'Growth Theory', type: 'tag', href: '/models?tag=Growth+Theory' },
    { title: 'Keynesian', type: 'tag', href: '/models?tag=Keynesian' },
    { title: 'Business Cycles', type: 'tag', href: '/models?tag=Business+Cycles' },
    { title: 'Labor Markets', type: 'tag', href: '/models?tag=Labor+Markets' },
    { title: 'DSGE', type: 'tag', href: '/models?tag=DSGE' },
    { title: 'Political', type: 'tag', href: '/blogs?category=Political' },
    { title: 'Guide', type: 'tag', href: '/blogs?category=Guide' },
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 6)); // Limit to 6 results for icon version
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'model': return 'text-blue-600 bg-blue-100';
      case 'blog': return 'text-green-600 bg-green-100';
      case 'tag': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={searchRef}>
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

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search models, blogs, tags..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              autoFocus
            />
          </div>
          
          <div className="max-h-64 overflow-y-auto">
            {results.length > 0 ? (
              <div className="p-2">
                {results.map((result, idx) => (
                  <Link
                    key={idx}
                    href={result.href || '#'}
                    onClick={() => setIsOpen(false)}
                    className="block p-3 hover:bg-gray-50 rounded transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{result.title}</div>
                        {result.description && (
                          <div className="text-xs text-gray-500 mt-1">{result.description}</div>
                        )}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ml-2 ${getTypeColor(result.type)}`}>
                        {result.type}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : query.length > 0 ? (
              <div className="p-4 text-center text-gray-500 text-sm">
                No results found for "{query}"
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500 text-sm">
                Start typing to search...
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}