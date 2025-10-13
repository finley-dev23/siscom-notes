"use client";

import { ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";

export default function Press() {
  const pressItems = [
    {
      title: "Siscom and Navon World partner to deploy AI-ready modular data centers, powering Africa's digital future",
      source: "Afcacia",
      date: "Jul 24, 2025",
      description: "By combining modular design, AI-driven computing, and inclusive investment, the two companies are laying the foundation for Africa's digital sovereignty and a future where the continent engineers its own path to technological empowerment.",
      url: "https://afcacia.io/siscom-and-navon-world-partner-to-deploy-ai-ready-modular-data-centers-powering-africas-digital-future/",
      logo: "/assets/home-screen-imgs/afcacia.png"
    },
    {
      title: "How Siscom is turning cloud infrastructure into a shared asset for Kenya's tech revolution",
      source: "Citizen Digital", 
      date: "Jul 02, 2025",
      description: "Siscom Nodes allows everyday citizens to invest directly in the servers powering everything from social media and streaming to e-commerce and artificial intelligence, starting from as little as KSH 15,000.",
      url: "https://www.citizen.digital/article/how-siscom-is-turning-cloud-infrastructure-into-a-shared-asset-for-kenyas-tech-revolution-n365639",
      logo: "/assets/home-screen-imgs/citizen-logo.jpg"
    },
    {
      title: "Kenyans can now own the cloud: Siscom launches crowd-invested data infrastructure",
      source: "Daily Nation",
      date: "Jul 01, 2025", 
      description: "Siscom's model flips the script by mobilizing local capital to build the digital backbone Africa needs, allowing individuals to invest in physical 'nodes' that power Kenya's digital economy.",
      url: "https://nation.africa/africa/news/kenyans-can-now-own-the-cloud-siscom-launches-crowd-invested-data-infrastructure-5104224",
      logo: "/assets/home-screen-imgs/dn-logo-svg-data.svg"
    },
    {
      title: "Kenyan tech firm launches platform for people to co-own cloud servers",
      source: "The Standard",
      date: "Jun 30, 2025",
      description: "Siscom has launched a revolutionary platform that allows Kenyans to collectively own and invest in cloud infrastructure, democratizing access to the digital economy and creating new investment opportunities.",
      url: "https://www.standardmedia.co.ke/business/sci-tech/article/2001523325/kenyan-tech-firm-launches-platform-for-people-to-co-own-cloud-servers",
      logo: "/assets/home-screen-imgs/standard-logo-web.jpg"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Press</h2>
      
      <div className="space-y-4">
        {pressItems.map((item, index) => (
          <a 
            key={index} 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-pink-500 transition">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 relative flex-shrink-0">
                      <Image
                        src={item.logo}
                        alt={`${item.source} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>{item.source}</span>
                  </div>
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
          </a>
        ))}
        
        <button className="w-full py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          Show all
        </button>
      </div>
    </div>
  );
}
