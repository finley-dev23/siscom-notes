"use client";

import { Info } from "lucide-react";

export default function InvestmentSummary() {
  const raised = 16700;
  const minGoal = 75000;
  const percentage = Math.round((raised / minGoal) * 100);
  
  return (
    <div className="space-y-6">
      {/* Raised Amount */}
      <div>
        <div className="flex items-baseline space-x-2 mb-1">
          <h2 className="text-4xl font-bold text-gray-900">
            ${raised.toLocaleString()}
          </h2>
          <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
        <p className="text-sm text-gray-600 mb-3">
          {percentage}% raised of ${(minGoal / 1000).toFixed(0)}K min
        </p>
      </div>
      
      {/* Investor Count */}
      <div>
        <div className="text-4xl font-bold text-gray-900">14</div>
        <div className="text-sm text-gray-600">Investors</div>
      </div>
      
      {/* Days Remaining */}
      <div>
        <div className="text-4xl font-bold text-gray-900">71 days</div>
        <div className="text-sm text-gray-600">Left to invest</div>
      </div>
      
      {/* CTA Button */}
      <div className="pt-4">
        <button className="w-full bg-blue-600 text-white py-3.5 px-6 rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors">
          Invest in June Care Company
        </button>
        <p className="text-center text-sm text-gray-600 mt-3">
          $50 minimum investment
        </p>
      </div>
    </div>
  );
}

