"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InvestmentSummary from "@/components/InvestmentSummary";
import MediaGallery from "@/components/MediaGallery";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Investment Summary */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 mb-8">
          <div className="lg:col-span-2">
            <Hero />
          </div>
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <InvestmentSummary />
          </div>
        </div>
        
        {/* Media Gallery */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 mb-8">
          <div className="lg:col-span-2">
            <MediaGallery />
          </div>
        </div>
        
        {/* Tabs and Content */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <Tabs />
          </div>
        </div>
      </main>
    </div>
  );
}

