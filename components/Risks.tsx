"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Risks() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const risks = [
    {
      title: "We have a limited operating history upon which you can evaluate our performance, and accordingly, our prospects must be considered in light of the risks that any new company encounters.",
      description: "The Issuer is still in an early phase, and we are just beginning to implement our business plan. There can be no assurance that we will ever operate profitably. The likelihood of our success should be considered in light of the problems, expenses, difficulties, complications and delays usually encountered by early-stage companies. The Issuer may not be successful in attaining the objectives necessary for it to overcome these risks and uncertainties."
    },
    {
      title: "The amount of capital the Issuer is attempting to raise in this Offering may not be enough to sustain the Issuer's current business plan.",
      description: "We may need additional funding beyond this offering to fully execute our business plan and achieve profitability."
    },
    {
      title: "We may face potential difficulties in obtaining capital.",
      description: "Future funding rounds may be challenging due to market conditions, investor sentiment, or other factors beyond our control."
    },
    {
      title: "The Issuer is currently substantially owned by its Founder and Chief Executive Officer, and she will exercise voting control.",
      description: "This concentration of ownership may limit the influence of other investors on company decisions."
    },
    {
      title: "We may implement new lines of business or offer new products and services within existing lines of business.",
      description: "Expansion into new areas may require additional resources and expertise, and may not be successful."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Risks</h2>
      
      <div className="space-y-2">
        {risks.map((risk, index) => (
          <div key={index}>
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left flex items-center justify-between hover:text-gray-700 transition py-2"
            >
              <span className="text-base font-medium text-gray-900 pr-4">{risk.title}</span>
              {openItems.includes(index) ? (
                <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            {openItems.includes(index) && (
              <div className="pb-3">
                <p className="text-base text-gray-700">{risk.description}</p>
              </div>
            )}
          </div>
        ))}
        
        <button className="w-full py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          Show all Risks
        </button>
      </div>
    </div>
  );
}
