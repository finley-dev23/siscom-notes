"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How do I earn a return?",
      answer: "We are using Republic's SAFE security. Learn how this translates into a return on investment here."
    },
    {
      question: "What is a custodian and what is a custodial account?",
      answer: "A custodial account is a financial account held by a custodian for a beneficiary. The custodian manages the account on behalf of the beneficiary until they reach the age of majority."
    },
    {
      question: "Why use a custodial account?",
      answer: "Custodial accounts allow minors to invest in securities while ensuring proper oversight and management by a responsible adult."
    },
    {
      question: "Will I have to set up a custodial account? What is the process?",
      answer: "If you are investing on behalf of a minor, you may need to set up a custodial account. The process involves completing additional documentation and verification steps."
    },
    {
      question: "I'm being told my custody account is in manual review, what should I do?",
      answer: "If your custodial account is under manual review, please contact our support team. This is a normal part of the verification process and typically resolves within 1-2 business days."
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
      <h2 className="text-2xl font-semibold text-gray-900">FAQ</h2>
      
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left flex items-center justify-between hover:text-gray-700 transition py-2"
            >
              <span className="text-base font-medium text-gray-900">{faq.question}</span>
              {openItems.includes(index) ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {openItems.includes(index) && (
              <div className="pb-3">
                <p className="text-base text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        
        <button className="w-full py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          Show all FAQ
        </button>
      </div>
    </div>
  );
}
