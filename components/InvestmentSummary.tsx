"use client";

import { useState, useEffect } from "react";
import { Star, Share2, DollarSign } from "lucide-react";

export default function InvestmentSummary() {
  const raised = 12000000; // KSH 12M
  const target = 35000000; // KSH 35M
  const percentage = 34; // Keep at 34%
  
  // Set to show exactly 90 days remaining
  const [daysRemaining, setDaysRemaining] = useState(90);
  
  useEffect(() => {
    // Keep it at 90 days for now
    setDaysRemaining(90);
  }, []);
  
  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex items-center space-x-3 justify-end">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Star className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Share2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      {/* Raised Amount */}
      <div>
        <div className="flex items-baseline space-x-2 mb-1">
          <h2 className="text-5xl font-bold text-gray-900">
            KSH {(raised / 1000000).toFixed(1)}M
          </h2>
        </div>
        <p className="text-base text-gray-500 mb-6">
          {percentage}% raised of KSH 35M target
        </p>
      </div>
      
      {/* Investor Count */}
      <div className="mb-6">
        <div className="text-5xl font-bold text-gray-900">73</div>
        <div className="text-base text-gray-500">Investors</div>
      </div>
      
      {/* Days Remaining */}
      <div className="mb-8">
        <div className="text-5xl font-bold text-gray-900">{daysRemaining} days</div>
        <div className="text-base text-gray-500">Left to invest</div>
      </div>
      
      {/* Investment CTA */}
      <div className="space-y-3">
        <a 
          href="/invest"
          className="block w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-200 text-center"
        >
          Invest in Siscom Africa
        </a>
        
        <p className="text-center text-base text-gray-500">
          KSH 350,000 per SAFE note
        </p>
      </div>
      
    </div>
  );
}

