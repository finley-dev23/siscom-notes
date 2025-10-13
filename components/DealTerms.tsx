"use client";

import { useState, useEffect } from "react";
import { Info } from "lucide-react";

export default function DealTerms() {
  // Set to show exactly 90 days remaining
  const [daysRemaining, setDaysRemaining] = useState(90);
  
  useEffect(() => {
    // Keep it at 90 days for now
    setDaysRemaining(90);
  }, []);
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Deal terms</h2>
      
      <div className="space-y-6">
        {/* Round Type */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-base font-medium text-gray-700">Round type</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xl font-semibold text-gray-900">Seed</p>
          <p className="text-sm text-gray-500 mt-1">
            Early-stage funding round to support product development and market expansion.
            <a href="#" className="text-pink-500 hover:underline ml-1">Learn more</a>
          </p>
        </div>

        {/* Funding Goal */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-base font-medium text-gray-700">Funding goal</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xl font-semibold text-gray-900">KSH 35M</p>
          <p className="text-sm text-gray-500 mt-1">
            100 SAFE notes at KSH 350,000 each. Target raise for Siscom Africa's Seed round to fund platform development, deal pipeline, and market expansion.
            <a href="#" className="text-pink-500 hover:underline ml-1">Learn more</a>
          </p>
        </div>

        {/* Deadline */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-base font-medium text-gray-700">Deadline</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xl font-semibold text-gray-900">{daysRemaining} days remaining</p>
          <p className="text-sm text-gray-500 mt-1">
            Siscom Africa is raising funds on a rolling basis. Deadline subject to extension.
            <a href="#" className="text-pink-500 hover:underline ml-1">Learn more</a>
          </p>
        </div>

        {/* Type of Security */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-base font-medium text-gray-700">Type of security</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xl font-semibold text-gray-900">SAFE Notes</p>
          <p className="text-sm text-gray-500 mt-1">
            Simple Agreement for Future Equity. 100 SAFE notes available at KSH 350,000 each.
            <a href="#" className="text-pink-500 hover:underline ml-1">Learn more</a>
          </p>
        </div>
      </div>
      
      {/* How it works link */}
      <div className="pt-4 border-t border-gray-200">
        <a href="#" className="text-base text-pink-500 hover:underline">
          How it works
        </a>
      </div>
    </div>
  );
}
