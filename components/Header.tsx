"use client";

import { Search, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-pink-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Republic</span>
            </a>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Investors
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Businesses
              </a>
            </nav>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none text-sm w-40 placeholder-gray-500"
              />
            </div>
            
            {/* Language */}
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">US</span>
            </button>
            
            {/* Auth Buttons */}
            <button className="text-gray-700 font-medium text-sm hover:text-gray-900 transition">
              Log in
            </button>
            <button className="bg-pink-500 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-pink-600 transition shadow-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

