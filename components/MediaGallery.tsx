"use client";

import { useState } from "react";
import { Play, ChevronRight } from "lucide-react";

export default function MediaGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const media = [
    { type: "video", title: "Introducing", subtitle: "PLAY" },
    { type: "image", title: "The Problem" },
    { type: "image", title: "How we solve it" },
    { type: "image", title: "Company Vision" },
    { type: "image", title: "Summary" },
    { type: "image", title: "Team" },
  ];
  
  return (
    <div className="mb-8">
      {/* Main Display */}
      <div className="relative bg-black rounded-lg overflow-hidden aspect-video group">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-blue-500"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center z-10">
            {media[currentIndex].type === "video" && (
              <div className="inline-flex flex-col items-center justify-center cursor-pointer group">
                <div className="w-28 h-28 rounded-full bg-gray-600/70 flex items-center justify-center mb-4 group-hover:bg-gray-600/80 transition">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
                <p className="text-white text-2xl font-semibold">
                  {media[currentIndex].title}
                </p>
                <p className="text-white/90 text-sm mt-2 uppercase tracking-wider">
                  {media[currentIndex].subtitle}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Next Arrow */}
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-3 overflow-x-auto mt-4 pb-2 scrollbar-hide">
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden border-3 transition ${
              currentIndex === index
                ? "border-blue-600 ring-2 ring-blue-600"
                : "border-gray-200"
            }`}
            style={{ borderWidth: currentIndex === index ? '3px' : '1px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-pink-300 to-blue-400"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-2">
              <p className="text-white text-xs font-medium text-center leading-tight">
                {item.title}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

