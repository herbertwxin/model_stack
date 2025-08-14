'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import SearchIcon from './SearchIcon';

export default function Navigation() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Stacks', href: '/models' },
    { name: 'Blogs', href: '/blogs' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl text-gray-900">
              Herbert W. Xin
            </Link>
          </div>
          
          {/* Navigation with search icon */}
          <div className="flex items-center space-x-6">
            <SearchIcon />
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}