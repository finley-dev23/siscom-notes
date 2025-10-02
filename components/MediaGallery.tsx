"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function MediaGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const media = [
    { type: "image", title: "Introducing", src: "/assets/images/aleksandr-lyaptsev-q0Jo_J5YxHY-unsplash.jpg" },
    { type: "image", title: "The Problem", src: "/assets/images/growtika-FiezGnin5TQ-unsplash.jpg" },
    { type: "image", title: "How we solve it", src: "/assets/images/jainath-ponnala-BIHgNEaM394-unsplash.jpg" },
    { type: "image", title: "Company Vision", src: "/assets/images/joe-murray-chkiRy7LhmQ-unsplash.jpg" },
    { type: "image", title: "Summary", src: "/assets/images/vimal-s-T4Y7qpl69fE-unsplash.jpg" },
  ];
  
  return (
    <div className="mb-5">
      {/* Main Display with Navigation */}
      <div className="relative flex items-center gap-4">
        {/* Previous Arrow */}
        <button 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)}
          className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        {/* Image Container */}
        <div className="relative flex-1 bg-black rounded-lg overflow-hidden aspect-video">
          {/* Image Display */}
          <Image
            src={media[currentIndex].src}
            alt={media[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 z-10">
            <p className="text-white text-2xl font-semibold drop-shadow-lg">
              {media[currentIndex].title}
            </p>
          </div>
        </div>
        
        {/* Next Arrow */}
        <button 
          onClick={() => setCurrentIndex((prev) => (prev + 1) % media.length)}
          className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
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
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-2">
              <p className="text-white text-xs font-medium text-center leading-tight drop-shadow-md">
                {item.title}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

