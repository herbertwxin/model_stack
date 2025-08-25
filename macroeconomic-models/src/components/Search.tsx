'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  type: 'model' | 'blog' | 'tag';
  href?: string;
  description?: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchData: SearchResult[] = useMemo(() => [
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
  ], []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 8)); // Limit to 8 results
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

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search models, blogs, tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
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
      </div>

      {isOpen && (query.length > 0 || results.length > 0) && (
        <div className="absolute top-full mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, idx) => (
                <Link
                  key={idx}
                  href={result.href || '#'}
                  onClick={() => setIsOpen(false)}
                  className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{result.title}</div>
                      {result.description && (
                        <div className="text-sm text-gray-500 mt-1">{result.description}</div>
                      )}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${getTypeColor(result.type)}`}>
                      {result.type}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length > 0 ? (
            <div className="p-4 text-center text-gray-500">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              Start typing to search...
            </div>
          )}
        </div>
      )}
    </div>
  );
}