"use client";

import { Star, Share2 } from "lucide-react";

export default function Hero() {
  const tags = [
    "CLOUD",
    "AI", 
    "INFRASTRUCTURE FINANCE",
    "TOKENIZATION",
    "MARKETPLACE"
  ];

  return (
    <div className="first-section-container">
      {/* Company Header */}
      <div className="flex items-start space-x-4 mb-4">
        {/* Company Logo */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
          <span className="text-white text-2xl font-bold">S</span>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Siscom Africa — Powering #FutureAfrica
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                Building Africa's first dedicated Technology Bank + Investment Marketplace focused on financing cloud, GPU/AI compute, and data-center infrastructure.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Star className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`first-section-tag ${
              tag === "CLOUD" ? "highlighted" : ""
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

