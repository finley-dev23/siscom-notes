"use client";

import { Star, Share2 } from "lucide-react";

export default function Hero() {
  const tags = [
    "SMART DEVICES",
    "MARKETPLACE",
    "WOMEN FOUNDERS",
    "CHILDHOOD EDUCATION",
    "B2C",
    "KIDS",
    "SOCIAL JUSTICE"
  ];

  return (
    <div>
      {/* Company Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start space-x-4">
          {/* Company Logo */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-blue-400 flex items-center justify-center flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-300 to-blue-400"></div>
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              June Care Company
            </h1>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Star className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-lg text-gray-600 mb-6 max-w-3xl">
        June Care connects parents looking for childcare with stay-at-home moms who can care for their kids!
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full ${
              tag === "WOMEN FOUNDERS"
                ? "bg-teal-100 text-teal-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

