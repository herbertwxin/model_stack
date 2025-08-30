'use client';

import { useState, useEffect } from 'react';

export default function FontScaleTest() {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('Mobile (< 640px)');
      else if (width < 768) setScreenSize('Small Tablet (640-767px)');
      else if (width < 1024) setScreenSize('Tablet (768-1023px)');
      else if (width < 1280) setScreenSize('Desktop (1024-1279px)');
      else setScreenSize('Large Desktop (≥ 1280px)');
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Screen Size Indicator */}
        <div className="fixed top-4 right-4 bg-black text-white px-3 py-2 rounded-lg text-sm z-50">
          {screenSize}
        </div>

        <h1 className="text-2xl font-bold mb-8 text-center">Font Scale Responsive Test</h1>

        {/* Typography Scale Examples */}
        <div className="space-y-12">
          
          {/* Section Headers (text-xl) */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Section Headers (text-xl font-semibold)</h2>
            <div className="grid gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">Office Hour</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">Quick Access</h3>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">Recent Publication</h3>
              </div>
            </div>
          </section>

          {/* Body Text (text-base) */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Body Text (text-base)</h2>
            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
                I am Herbert Xin, currently a PhD candidate in Economics at University of Oregon. 
                This website also serves as a blog and repo for my personal project Model Stack, 
                a directory for macroeconomics models.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                My current research focuses on interaction between monetary and fiscal policy.
              </p>
            </div>
          </section>

          {/* Interactive Elements */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Elements</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="block p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-medium text-gray-900">Primary Link (text-base font-medium)</span>
                      <span className="text-xs text-gray-500">→</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Secondary description text (text-sm)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Metadata and Secondary Text */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Metadata and Secondary Text</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p>
                    <span className="text-sm text-gray-600 font-medium">Email:</span>{' '}
                    <span className="text-sm font-medium text-gray-600">hxin@uoregon.edu</span>
                  </p>
                  <p>
                    <span className="text-sm text-gray-600 font-medium">LinkedIn:</span>{' '}
                    <span className="text-sm font-medium text-gray-600">herbert-xin</span>
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Publication Title</h3>
                  <p className="text-sm text-gray-600">Author information (text-sm)</p>
                  <p className="text-xs text-gray-500">Journal, Year (text-xs)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Model Stack Cards */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Model Stack Cards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {['IS-LM Model', 'Solow Growth Model'].map((model) => (
                <div key={model} className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-base mb-2">{model}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Comprehensive mathematical treatment with economic insights.
                  </p>
                  <div className="text-sm font-medium text-gray-900">
                    Learn More <span className="text-xs text-gray-500">→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Responsive Grid Test */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsive Layout Test</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Left Column</h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-4">
                    This tests how the two-column layout behaves on different screen sizes 
                    and whether font sizes maintain proper hierarchy and readability.
                  </p>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Note:</span> This should stack vertically on mobile.
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Right Column</h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    The font sizes should remain consistent and readable across all viewport sizes,
                    maintaining the established visual hierarchy.
                  </p>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Test:</span> Resize your browser to see responsive behavior.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}