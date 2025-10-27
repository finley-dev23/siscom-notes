"use client";

import { useState, useEffect, useRef } from "react";
import PitchContent from "./PitchContent";
import DealTerms from "./DealTerms";
import About from "./About";
import Press from "./Press";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("pitch");
  const [showStickyNav, setShowStickyNav] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  
  const tabs = [
    { id: "pitch", label: "Pitch", badge: null },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const rect = tabsRef.current.getBoundingClientRect();
        // Show sticky nav when tabs section scrolls past the top
        setShowStickyNav(rect.bottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div>
      {/* Mobile: Sticky Button at Bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
        <a 
          href="/invest"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-4 rounded-lg text-lg font-semibold transition-colors block text-center"
        >
          Book a Call
        </a>
      </div>

      {/* Desktop: Sticky Navigation Bar (appears when scrolled past tabs) */}
      {showStickyNav && (
        <div className="hidden lg:flex fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center justify-between">
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 pt-4 font-medium text-lg transition relative ${
                      activeTab === tab.id
                        ? "text-pink-500 border-b-2 border-pink-500"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>{tab.label}</span>
                      {tab.badge !== null && (
                        <span className="bg-gray-200 text-gray-700 text-sm px-2 py-0.5 rounded-full font-medium">
                          {tab.badge}
                        </span>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <a 
                href="/invest"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tab Headers */}
      <div ref={tabsRef} className="border-b border-gray-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 font-medium text-lg transition relative ${
                  activeTab === tab.id
                    ? "text-pink-500 border-b-2 border-pink-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span>{tab.label}</span>
                  {tab.badge !== null && (
                    <span className="bg-gray-200 text-gray-700 text-sm px-2 py-0.5 rounded-full font-medium">
                      {tab.badge}
                    </span>
                  )}
                </span>
              </button>
            ))}
        </div>
      </div>
      
      {/* Two Column Layout */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-6 pb-24 lg:pb-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2">
          {/* Tab Content */}
          <div className="py-6">
            <PitchContent />
          </div>
        </div>
        
        {/* Right Column - Sidebar */}
        <div className="lg:col-span-1 mt-6 lg:mt-0">
          <div className="sticky top-6 space-y-8">
            {/* Show Deal Terms only for Pitch tab */}
            {activeTab === "pitch" && <DealTerms />}
            
            {/* Always show other sections */}
            <Press />
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

