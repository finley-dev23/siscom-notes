"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function MediaGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const media = [
    { type: "image", title: "Image 1", src: "/assets/images/sicom-1.jpeg" },
    { type: "image", title: "Image 2", src: "/assets/images/siscom-2.jpeg" },
    { type: "image", title: "Image 3", src: "/assets/images/siscom-3.jpeg" },
    { type: "image", title: "Image 4", src: "/assets/images/siscom-4.jpeg" },
    { type: "image", title: "Image 5", src: "/assets/images/siscom-5.jpeg" },
    { type: "image", title: "Image 6", src: "/assets/images/siscom-6.jpeg" },
    { type: "image", title: "Image 7", src: "/assets/images/siscom-7.jpeg" },
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
                ? "border-pink-500 ring-2 ring-pink-500"
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
          </button>
        ))}
      </div>
    </div>
  );
}

