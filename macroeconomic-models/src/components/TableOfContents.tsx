'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingElements: Heading[] = Array.from(elements).map((element, index) => {
      const id = element.id || `heading-${index}`;
      if (!element.id) {
        element.id = id;
      }
      return {
        id,
        text: element.textContent || '',
        level: parseInt(element.tagName.charAt(1)),
      };
    });

    setHeadings(headingElements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block fixed top-32 right-8 w-64 bg-white border border-gray-200 rounded-lg p-4 shadow-sm max-h-96 overflow-y-auto">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Table of Contents</h3>
      <nav>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block text-sm transition-colors ${
                  activeId === heading.id
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={{ 
                  paddingLeft: `${(heading.level - 1) * 12}px`,
                  fontSize: heading.level === 1 ? '14px' : '13px'
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}