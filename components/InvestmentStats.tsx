"use client";

import { useState, useEffect } from "react";
import { Info, FileText } from "lucide-react";

export default function InvestmentStats() {
  const raised = 1670000; // KSH 1.67M (converted from $16.7K at 1:100)
  const minGoal = 7500000; // KSH 7.5M (converted from $75K at 1:100)
  const percentage = Math.round((raised / minGoal) * 100);
  
  // Set to show exactly 90 days remaining
  const [daysRemaining, setDaysRemaining] = useState(90);
  
  useEffect(() => {
    // Keep it at 90 days for now
    setDaysRemaining(90);
  }, []);
  
  return (
    <div className="space-y-6">
      {/* Main Investment Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
        {/* Raised Amount */}
        <div className="mb-6">
          <div className="flex items-baseline space-x-2">
            <h2 className="text-4xl font-bold text-gray-900">
              KSH {(raised / 1000000).toFixed(2)}M
            </h2>
            <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {percentage}% raised of KSH {(minGoal / 1000000).toFixed(2)}M min
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div
              className="bg-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
          <div>
            <div className="text-3xl font-bold text-gray-900">14</div>
            <div className="text-sm text-gray-600">Investors</div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-gray-900">{daysRemaining} days</div>
            <div className="text-sm text-gray-600">Left to invest</div>
          </div>
        </div>
        
        {/* CTA Button */}
        <button className="w-full bg-pink-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/30">
          Invest in June Care Company
        </button>
        
        <p className="text-center text-sm text-gray-600 mt-3">
          KSH 5,000 minimum investment
        </p>
        
        {/* Deal Terms */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-gray-500 font-semibold mb-4">Deal terms</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Valuation cap</span>
              <div className="text-right">
                <div className="font-semibold text-gray-900">KSH 2B</div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Minimum investment</span>
              <div className="text-right">
                <div className="font-semibold text-gray-900">KSH 5,000</div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Maximum investment</span>
              <div className="text-right">
                <div className="font-semibold text-gray-900">KSH 12.4M</div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Funding goal</span>
              <div className="text-right">
                <div className="font-semibold text-gray-900">KSH 50M</div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Deadline</span>
              <div className="text-right">
                <div className="font-semibold text-gray-900">December 9, 2025</div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Type of security</span>
              <div className="text-right">
                <div className="font-semibold text-gray-900">SAFE</div>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
            How it works
          </button>
        </div>
        
        {/* Documents */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-gray-500 font-semibold mb-3">Documents</h3>
          <p className="text-xs text-gray-600 mb-4">
            Republic (OpenDeal Portal LLC, CRD #283874) is hosting this Reg CF securities offering by June Care Company. View the official SEC filing and all updates:
          </p>
          <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 mb-3">
            <FileText className="w-4 h-4" />
            Form C
          </a>
          
          <div className="mt-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">Company documents</p>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 mb-2">
              <FileText className="w-4 h-4" />
              June Care Company SAFE
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <FileText className="w-4 h-4" />
              June Care Company Form C.docx.pdf
            </a>
          </div>
        </div>
        
        {/* Bonus Perks */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-gray-500 font-semibold mb-3">Bonus perks</h3>
          <p className="text-sm text-gray-600 mb-4">
            In addition to your SAFE, you'll receive perks for investing in June Care Company.
          </p>
          
          <div className="space-y-4">
            {/* $1,000 tier */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-600">Invest</span>
              </div>
              <div className="text-2xl font-bold text-pink-500 mb-3">KSH 100,000</div>
              <div className="text-xs text-gray-600 mb-2">Receive</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• A June Care Branded Yeti</li>
                <li>• Access to our private investor newsletter with early updates and behind-the-scenes stories</li>
                <li>• Your name featured on our Founding Investor Wall on our website</li>
              </ul>
            </div>
            
            {/* $5,000 tier */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-600">Invest</span>
              </div>
              <div className="text-2xl font-bold text-pink-500 mb-3">KSH 500,000</div>
              <div className="text-xs text-gray-600 mb-2">Receive</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• A limited-edition June Care hoodie</li>
                <li>• + All perks from previous tier</li>
              </ul>
            </div>
            
            {/* $25,000 tier */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-600">Invest</span>
              </div>
              <div className="text-2xl font-bold text-pink-500 mb-3">KSH 2.5M</div>
              <div className="text-xs text-gray-600 mb-2">Receive</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• You'll be invited to join our Advisory Board</li>
                <li>• Enjoy a lifetime "Friends & Family" discount (e.g. no service or membership fees) on future June Care products or services</li>
                <li>• Receive a custom thank-you gift created by a June Care family</li>
                <li>• + All perks from previous tier</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

