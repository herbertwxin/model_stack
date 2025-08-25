'use client';

import Link from 'next/link';
import { useState } from 'react';

// interface ModelItem {
//   name: string;
//   description: string;
//   href?: string;
//   tags?: string[];
// }

export default function ModelsPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  
  const models = [
    {
      category: "Basic Models",
      items: [
        { name: "IS-LM Model", description: "Investment-Savings and Liquidity-Money equilibrium framework", tags: ["Keynesian", "Macroeconomic Policy"] },
        { name: "AD-AS Model", description: "Aggregate Demand and Aggregate Supply analysis", tags: ["Price Level", "Output"] },
        { name: "Phillips Curve", description: "Relationship between inflation and unemployment", tags: ["Inflation", "Labor Markets"] }
      ]
    },
    {
      category: "Growth Models", 
      items: [
        { name: "Solow Growth Model", description: "Neoclassical growth theory with capital accumulation", href: "/models/solow", tags: ["Growth Theory", "Capital Accumulation"] },
        { name: "Ramsey-Cass-Koopmans Model", description: "Optimal growth with endogenous savings", tags: ["Optimal Growth", "Dynamic Optimization"] },
        { name: "Endogenous Growth Models", description: "AK and R&D-based growth theories", tags: ["Growth Theory", "Innovation"] }
      ]
    },
    {
      category: "Dynamic Models",
      items: [
        { name: "Real Business Cycle Model", description: "Technology shocks and economic fluctuations", tags: ["Business Cycles", "Technology Shocks"] },
        { name: "New Keynesian DSGE", description: "Dynamic stochastic general equilibrium with price stickiness", tags: ["Keynesian", "DSGE", "Price Stickiness"] },
        { name: "Overlapping Generations", description: "Multi-period lifecycle consumption and savings", tags: ["Life Cycle", "Demographics"] }
      ]
    },
    {
      category: "Advanced Topics",
      items: [
        { name: "Search and Matching", description: "Labor market frictions and unemployment dynamics", tags: ["Labor Markets", "Unemployment"] },
        { name: "Heterogeneous Agent Models", description: "Inequality and distributional effects", tags: ["Inequality", "Agent-Based"] },
        { name: "Open Economy Models", description: "International trade and exchange rate dynamics", tags: ["International", "Exchange Rates"] }
      ]
    }
  ];

  // Extract all unique tags
  const allTags = ["All", ...new Set(
    models.flatMap(category => 
      category.items.flatMap(item => item.tags || [])
    )
  )];

  // Filter models based on selected tag
  const filteredModels = selectedTag === "All" 
    ? models 
    : models.map(category => ({
        ...category,
        items: category.items.filter(item => 
          item.tags?.includes(selectedTag)
        )
      })).filter(category => category.items.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tag Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Tag</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tag === selectedTag 
                  ? "bg-gray-900 text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {filteredModels.map((category, idx) => (
          <section key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((model, modelIdx) => (
                model.href ? (
                  <Link key={modelIdx} href={model.href} className="block">
                    <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{model.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                      {model.tags && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {model.tags.map((tag) => (
                            <span key={tag} className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Available</span>
                        <span className="text-gray-900 text-sm font-medium">→</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div key={modelIdx} className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{model.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                    {model.tags && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {model.tags.map((tag) => (
                          <span key={tag} className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Coming Soon</span>
                      <span className="text-gray-900 text-sm font-medium">→</span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Resource</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600">
            Each model page provides comprehensive mathematical derivations, economic intuition, 
            and practical applications. Our approach emphasizes:
          </p>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li>• Step-by-step mathematical proofs and derivations</li>
            <li>• Clear economic interpretation of results</li>
            <li>• Comparative statics and policy implications</li>
            <li>• Connection to empirical evidence and real-world applications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}