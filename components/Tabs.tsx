"use client";

import { useState } from "react";
import PitchContent from "./PitchContent";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("pitch");
  
  const tabs = [
    { id: "pitch", label: "Pitch", badge: null },
    { id: "discussion", label: "Discussion", badge: 10 },
    { id: "updates", label: "Updates", badge: null },
    { id: "reviews", label: "Reviews", badge: 1 },
  ];
  
  return (
    <div>
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 font-medium text-base transition relative ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{tab.label}</span>
                {tab.badge !== null && (
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full font-medium">
                    {tab.badge}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="py-6">
        {activeTab === "pitch" && <PitchContent />}
        
        {activeTab === "discussion" && (
          <div className="text-center py-16">
            <p className="text-gray-500">Join the discussion about this campaign</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start a discussion
            </button>
          </div>
        )}
        
        {activeTab === "updates" && (
          <div className="text-center py-16">
            <p className="text-gray-500">No updates yet. Check back soon!</p>
          </div>
        )}
        
        {activeTab === "reviews" && (
          <div className="text-center py-16">
            <p className="text-gray-500">Be the first to review this campaign</p>
          </div>
        )}
      </div>
    </div>
  );
}

