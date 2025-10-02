"use client";

import Hero from "@/components/Hero";
import InvestmentSummary from "@/components/InvestmentSummary";
import MediaGallery from "@/components/MediaGallery";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Section */}
        <div className="mb-6">
          <Hero />
        </div>
        
        {/* Media Gallery with Sticky Investment Summary */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 mb-6">
          <div className="lg:col-span-2">
            <MediaGallery />
          </div>
          <div className="lg:col-span-1 mt-6 lg:mt-0">
            <div className="sticky top-6">
              <InvestmentSummary />
            </div>
          </div>
        </div>
        
        {/* Tabs and Content */}
        <div>
          <Tabs />
        </div>
      </main>
    </div>
  );
}

