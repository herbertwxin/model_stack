'use client';

import Link from 'next/link';
import { useState } from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  href?: string;
}

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const blogPosts = [
    {
      title: "Kornai (1979) Framework on Autocratic Governance",
      excerpt: "A comment on Kornai (1979) where I found similarities between socialist firms and autocratic local governments",
      date: "2024-02-05",
      readTime: "8 min read",
      category: "Political",
      href: "/blogs/kornai-autocratic-governance"
    },
    {
      title: "Fedora Silverblue Setup Guide",
      excerpt: "Here are some steps I would take after installing Fedora Silverblue",
      date: "2023-12-25",
      readTime: "15 min read",
      category: "Guide",
      href: "/blogs/fedora-silverblue-setup"
    },
    {
      title: "Understanding Dynamic Stochastic General Equilibrium Models",
      excerpt: "A comprehensive introduction to DSGE models and their role in modern macroeconomic policy analysis.",
      date: "2024-01-15",
      readTime: "12 min read",
      category: "Theory"
    },
    {
      title: "The Mathematics Behind the Solow Growth Model", 
      excerpt: "Detailed mathematical derivation of the Solow model with phase diagrams and steady-state analysis.",
      date: "2024-01-10",
      readTime: "8 min read", 
      category: "Growth Theory"
    },
    {
      title: "New Keynesian Economics: Micro Foundations of Price Stickiness",
      excerpt: "Exploring the theoretical foundations of price rigidity in New Keynesian models.",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "Monetary Economics"
    },
    {
      title: "Ramsey Optimal Taxation: Theory and Applications",
      excerpt: "Mathematical analysis of optimal taxation in the Ramsey framework with welfare implications.",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "Public Finance"
    }
  ];

  const categories = ["All", "Political", "Guide", "Theory", "Growth Theory", "Monetary Economics", "Public Finance"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Economic Insights</h1>
        <p className="text-xl text-gray-600">
          Deep dives into macroeconomic theory, mathematical derivations, and policy applications.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === selectedCategory 
                  ? "bg-gray-900 text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredPosts.map((post, idx) => (
          post.href ? (
            <Link key={idx} href={post.href} className="block">
              <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Available</span>
                  <span className="text-gray-900 text-sm font-medium hover:underline">
                    Read More →
                  </span>
                </div>
              </article>
            </Link>
          ) : (
            <article key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Coming Soon</span>
                <span className="text-gray-900 text-sm font-medium">
                  Read More →
                </span>
              </div>
            </article>
          )
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gray-700 text-white p-8 rounded-xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">
            Get notified when new models and blog posts are published. 
            Join our community of economics enthusiasts.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}