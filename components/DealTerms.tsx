"use client";

import { Info } from "lucide-react";

export default function DealTerms() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Deal terms</h2>
      
      <div className="space-y-6">
        {/* Pre-Money Valuation */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-gray-700">Pre-money valuation</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-900">$10,000,000</p>
          <p className="text-xs text-gray-500 mt-1">
            The company's valuation before this funding round.
            <a href="#" className="text-blue-600 hover:underline ml-1">Learn more</a>
          </p>
        </div>

        {/* Minimum Investment */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-gray-700">Minimum investment</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-900">$500</p>
          <p className="text-xs text-gray-500 mt-1">
            The smallest investment amount that Siscom Africa is accepting.
            <a href="#" className="text-blue-600 hover:underline ml-1">Learn more</a>
          </p>
        </div>

        {/* Round Type */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-gray-700">Round type</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-900">Seed</p>
          <p className="text-xs text-gray-500 mt-1">
            Early-stage funding round to support product development and market expansion.
            <a href="#" className="text-blue-600 hover:underline ml-1">Learn more</a>
          </p>
        </div>

        {/* Funding Goal */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-gray-700">Funding goal</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-900">$1.25M</p>
          <p className="text-xs text-gray-500 mt-1">
            Target raise for Siscom Africa's Seed round to fund platform development, deal pipeline, and market expansion.
            <a href="#" className="text-blue-600 hover:underline ml-1">Learn more</a>
          </p>
        </div>

        {/* Deadline */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-gray-700">Deadline</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-900">28 days remaining</p>
          <p className="text-xs text-gray-500 mt-1">
            Siscom Africa is raising funds on a rolling basis. Deadline subject to extension.
            <a href="#" className="text-blue-600 hover:underline ml-1">Learn more</a>
          </p>
        </div>

        {/* Type of Security */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-gray-700">Type of security</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-900">Equity + SAFE</p>
          <p className="text-xs text-gray-500 mt-1">
            Combination of equity and SAFE (Simple Agreement for Future Equity) for early participants.
            <a href="#" className="text-blue-600 hover:underline ml-1">Learn more</a>
          </p>
        </div>
      </div>
      
      {/* How it works link */}
      <div className="pt-4 border-t border-gray-200">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          How it works
        </a>
      </div>
    </div>
  );
}
