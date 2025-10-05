"use client";

import { ExternalLink, Calendar } from "lucide-react";

export default function Press() {
  const pressItems = [
    {
      title: "TechCrunch Africa Features New Infrastructure Startup - Siscom Africa",
      source: "TechCrunch Africa",
      date: "Dec 15, 2024",
      description: "This Kenyan entrepreneur turned a cloud infrastructure gap into a startup that's raised $2.5 million",
      url: "#"
    },
    {
      title: "Siscom Africa infrastructure service 'by Africans for Africans' comes to Nairobi",
      source: "TechCrunch Africa", 
      date: "Nov 28, 2024",
      description: "Siscom Africa, a platform that connects investors with infrastructure opportunities, has launched in Nairobi. Siscom Africa connects investors who need infrastructure with local providers who can deliver...",
      url: "#"
    },
    {
      title: "This platform connects investors who need infrastructure with providers in Africa",
      source: "TechCrunch Africa",
      date: "Oct 14, 2024", 
      description: "Siscom Africa is an infrastructure investment platform that connects investors who need infrastructure with providers in their region who can deliver...",
      url: "#"
    },
    {
      title: "Siscom Africa Offers Affordable Infrastructure Solutions in Kenya",
      source: "TechCrunch Africa",
      date: "Sep 22, 2024",
      description: "With 2x more African enterprises adopting cloud infrastructure in 2024 than 2023, we need more affordable infrastructure solutions + flexible investment options...",
      url: "#"
    },
    {
      title: "Nairobi entrepreneur creates platform to help investors find infrastructure opportunities",
      source: "TechCrunch Africa",
      date: "Sep 21, 2024",
      description: "The COVID-19 pandemic accelerated digital transformation across Africa, creating an 'infrastructure opportunity' for local investors...",
      url: "#"
    },
    {
      title: "African-led company providing access to affordable infrastructure investment opportunities",
      source: "BBC Africa",
      date: "Aug 5, 2024",
      description: "Siscom Africa, a Nairobi company, links investors with infrastructure providers for affordable opportunities, offering 30% lower costs than traditional solutions...",
      url: "#"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Press</h2>
      
      <div className="space-y-4">
        {pressItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <span>{item.source}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <p className="text-base text-gray-700 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
            </div>
          </div>
        ))}
        
        <button className="w-full py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          Show all
        </button>
      </div>
    </div>
  );
}
