"use client";

import { Star, Share2, DollarSign } from "lucide-react";

export default function InvestmentSummary() {
  const raised = 420000;
  const target = 1250000;
  const percentage = 34; // 420K/1.25M = 33.6%
  
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
          <h2 className="text-4xl font-bold text-gray-900">
            ${raised.toLocaleString()}
          </h2>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          {percentage}% raised of $1.25M target
        </p>
      </div>
      
      {/* Investor Count */}
      <div className="mb-6">
        <div className="text-4xl font-bold text-gray-900">73</div>
        <div className="text-sm text-gray-500">Investors</div>
      </div>
      
      {/* Days Remaining */}
      <div className="mb-8">
        <div className="text-4xl font-bold text-gray-900">28 days</div>
        <div className="text-sm text-gray-500">Left to invest</div>
      </div>
      
      {/* Investment Input and CTA */}
      <div className="space-y-4">
        {/* Investment Input Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="500 min."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-lg font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        {/* Invest Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-6 rounded-lg text-base font-semibold transition-colors duration-200">
          Invest in Siscom Africa
        </button>
        
        <p className="text-center text-sm text-gray-500">
          $500 minimum investment
        </p>
      </div>
    </div>
  );
}

