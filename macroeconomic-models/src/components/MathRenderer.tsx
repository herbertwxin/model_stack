'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    katex: any;
  }
}

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

export default function MathRenderer({ math, block = false, className = '' }: MathRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadKatex = async () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        // Load KaTeX CSS if not already loaded
        if (!document.querySelector('link[href*="katex"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css';
          document.head.appendChild(link);
        }

        // Load KaTeX JS if not already loaded
        if (!window.katex) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js';
          script.onload = () => renderMath();
          document.head.appendChild(script);
        } else {
          renderMath();
        }
      }
    };

    const renderMath = () => {
      if (window.katex && containerRef.current) {
        try {
          window.katex.render(math, containerRef.current, {
            displayMode: block,
            throwOnError: false,
            strict: false,
          });
        } catch (error) {
          console.error('KaTeX rendering error:', error);
          if (containerRef.current) {
            containerRef.current.textContent = math;
          }
        }
      }
    };

    loadKatex();
  }, [math, block]);

  return (
    <div 
      ref={containerRef}
      className={`${block ? 'my-4 text-center' : 'inline'} ${className}`}
    >
      {math}
    </div>
  );
}