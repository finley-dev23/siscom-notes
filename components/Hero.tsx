"use client";

import { useState } from "react";
import { Star, Share2 } from "lucide-react";

export default function Hero() {
  const [activeTag, setActiveTag] = useState("problem");
  
  const tags = [
    "problem",
    "solution", 
    "gtm",
    "revenue",
    "SAFE investment"
  ];

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    
    // Scroll to relevant section based on tag
    const sectionMap: { [key: string]: string } = {
      "problem": "problem",
      "solution": "solution", 
      "gtm": "gtm",
      "revenue": "business-model",
      "SAFE investment": "funding"
    };
    
    const targetSection = sectionMap[tag] || "solution";
    const element = document.getElementById(targetSection);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="first-section-container">
      {/* Company Header */}
      <div className="mb-4">
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Siscom Africa — Powering #FutureAfrica
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
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
          <button
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`first-section-tag ${
              activeTag === tag ? "highlighted" : ""
            } cursor-pointer transition-all duration-200 hover:scale-105`}
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

