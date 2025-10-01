"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function PitchContent() {
  const [activeSection, setActiveSection] = useState("problem");
  
  const sections = [
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "traction", label: "Traction" },
    { id: "vision", label: "Vision and strate..." },
    { id: "summary", label: "Summary" },
    { id: "product", label: "Product" },
    { id: "competition", label: "Competition" },
    { id: "funding", label: "Funding" },
    { id: "founders", label: "Founders" },
    { id: "about", label: "About" },
    { id: "team", label: "Team" },
    { id: "press", label: "Press" },
    { id: "faq", label: "FAQ" },
    { id: "risks", label: "Risks" },
    { id: "discussion", label: "Discussion" },
  ];
  
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  return (
    <div className="flex gap-8">
      {/* Left Navigation */}
      <nav className="hidden lg:block w-48 flex-shrink-0">
        <div className="sticky top-24 space-y-0.5">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded transition ${
                activeSection === section.id
                  ? "bg-gray-900 text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="flex items-center justify-between">
                <span className="truncate">{section.label}</span>
                {activeSection === section.id && <ChevronRight className="w-3 h-3 flex-shrink-0 ml-1" />}
              </span>
            </button>
          ))}
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Highlights Section */}
        <section id="highlights" className="mb-16 scroll-mt-24">
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-500 mb-6">Highlights</h2>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-500 mb-6">Deal terms</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3 text-gray-700">
                <li>• Solving childcare + parent income crisis.</li>
                <li>• $75B childcare market: ripe for disruption.</li>
                <li>• +300% YoY growth; $1.3M GMV annualized.</li>
                <li>• 30K+ nationwide providers; 11K+ families.</li>
                <li>• 98.6% of providers 5-star rated.</li>
                <li>• Backed by top VCs: CRAFT & GREYCROFT.</li>
                <li>• Featured on Good Morning America.</li>
              </ul>
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Valuation cap</span>
                  <span className="font-semibold text-gray-900">$20,000,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Minimum investment</span>
                  <span className="font-semibold text-gray-900">$50</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Maximum investment</span>
                  <span className="font-semibold text-gray-900">$124,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Funding goal</span>
                  <span className="font-semibold text-gray-900">$500K</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Deadline</span>
                  <span className="font-semibold text-gray-900">December 9, 2025</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Type of security</span>
                  <span className="font-semibold text-gray-900">SAFE</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
                How it works
              </button>
            </div>
          </div>
        </section>
        
        {/* Problem */}
        <section id="problem" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Problem</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">A dual crisis for parents</h3>
          <p className="text-xl text-gray-700 mb-6">$75B market ripe for innovation</p>
          <p className="text-gray-700 mb-6">Today's parents face an unprecedented challenge:</p>
          <ul className="space-y-4 text-gray-700 mb-8">
            <li>
              <strong>For Working Parents:</strong> Finding trusted, accessible, and affordable childcare is increasingly difficult and stressful.
            </li>
            <li>
              <strong>For Stay-at-Home Parents:</strong> It's hard to find flexible opportunities to earn income that fit around their childcare responsibilities.
            </li>
          </ul>
        </section>
        
        {/* Solution */}
        <section id="solution" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Solution</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">The June Care App</h3>
          <p className="text-gray-700 mb-8">
            June Care bridges this gap with an intuitive mobile app that puts power directly into parents' hands:
          </p>
          
          {/* App Features - Placeholder for phone mockups */}
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-white rounded-lg p-6 h-64 flex items-center justify-center mb-3">
                  <div className="text-gray-400">📱</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Provider Recommendations</h4>
                <p className="text-sm text-gray-600">97% fill rate</p>
              </div>
              <div>
                <div className="bg-white rounded-lg p-6 h-64 flex items-center justify-center mb-3">
                  <div className="text-gray-400">💬</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">In-App Chat and Video Calls</h4>
                <p className="text-sm text-gray-600">Easily confirm details and fit</p>
              </div>
              <div>
                <div className="bg-white rounded-lg p-6 h-64 flex items-center justify-center mb-3">
                  <div className="text-gray-400">✅</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">On-Demand Childcare You Can Trust</h4>
                <p className="text-sm text-gray-600">Book and pay in seconds</p>
              </div>
            </div>
          </div>
          
          <ul className="space-y-4 text-gray-700">
            <li>• <strong>Easy connections:</strong> We connect parents needing care with vetted, experienced caregivers in their community.</li>
            <li>• <strong>Flexible scheduling:</strong> Book care for a few hours, a full day, or ongoing arrangements.</li>
            <li>• <strong>Trust & safety:</strong> All providers complete background checks and profile reviews.</li>
          </ul>
        </section>
        
        {/* Traction */}
        <section id="traction" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Traction</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Rapid growth & national recognition</h3>
          <p className="text-gray-700 mb-8">June Care's model is proving incredibly effective, driven by authentic community growth:</p>
          
          {/* Traction Stats - Placeholder */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h4 className="text-xl font-bold text-teal-700 mb-6">Key Milestones & Traction</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Nationwide Network of 30,000 providers</p>
                <p className="text-sm text-gray-600 mb-2">Launched in San Diego</p>
                <p className="text-sm text-gray-600 mb-2">Early Organic Expansion</p>
              </div>
              <div className="bg-purple-600 text-white rounded-lg p-6">
                <p className="text-3xl font-bold mb-2">30,000 providers</p>
                <p className="text-sm mb-4">... and growing nationwide</p>
                <p className="text-3xl font-bold mb-2">11,000 families</p>
                <p className="text-sm mb-4">use June Care for childcare</p>
                <p className="text-3xl font-bold mb-2">$1.3M GMV</p>
                <p className="text-sm mb-4">annualized</p>
                <p className="text-3xl font-bold">+300% growth</p>
                <p className="text-sm">year over year</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">📺</div>
              <div>
                <p className="font-bold text-gray-900">Big News!</p>
                <p className="text-gray-700">June Care featured on Good Morning America</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision and Strategy */}
        <section id="vision" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Vision and strategy</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Expanding access, everywhere</h3>
          <p className="text-gray-700 mb-6">
            June Care's vision is simple yet powerful: moms supporting moms in their most important work. We aim to expand access to income opportunities for parents everywhere. With an <strong>annualized GMV projected to reach $5M by Q2 2026</strong>, we are poised for significant expansion.
          </p>
          <p className="text-gray-700 mb-6">
            We are currently <strong>raising $500K to capitalize on this momentum</strong>, planning to build on organic growth across California and new markets, expand to 3+ new cities per month, and launch strategic partnerships to access employer-sponsored demand. We are at a "crucible moment" with regulatory tailwinds, a proven product, and a strong "word of mom" flywheel.
          </p>
          
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8">
            <h4 className="text-xl font-bold text-teal-700 mb-4">Raising $500K to capture the moment</h4>
            <p className="text-sm text-teal-600 mb-4">With additional capital, we can:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Build on organic growth</strong> across CA and new markets</li>
              <li>• <strong>Expand June Care</strong> to new +3 new cities / month</li>
              <li>• <strong>Launch strategic partnerships</strong> to access employer-sponsored demand</li>
            </ul>
          </div>
        </section>
        
        {/* Summary */}
        <section id="summary" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Summary</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Invest: Seize the Heart of the Care Economy</h3>
          <p className="text-gray-700 mb-6">
            June Care offers a compelling investment opportunity in a rapidly expanding, underserved $75B market:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              • <strong>Disruptive Model:</strong> Creating a new "careshare" category by leveraging existing parental networks, addressing supply and demand unlike traditional incumbents.
            </li>
            <li>
              • <strong>Proven Traction & Growth:</strong> Demonstrating explosive user growth, high retention, and significant GMV increases driven largely by organic referrals.
            </li>
            <li>
              • <strong>Strong Leadership:</strong> A passionate and experienced team with relevant industry and startup experience.
            </li>
            <li>
              • <strong>Mission-Driven Impact:</strong> Investing in June Care means empowering parents, fostering community, and solving a critical societal need, all within a high-growth market.
            </li>
          </ul>
          <p className="text-gray-700 mt-6">
            Invest in June Care and help build... <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </p>
        </section>
        
        {/* Product */}
        <section id="product" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Product</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">A user-friendly app that makes finding trusted childcare a breeze</h3>
          <p className="text-gray-700 mb-8">
            June Care transforms finding childcare into a peer-to-peer experience, making it easier for parents to get childcare they trust. And they're able to do that with our user-friendly app. Here's how it works:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>• Parents use the June Care app to browse profiles of local caregivers and see their reviews, experience, rates, and location.</li>
            <li>• You can book and pay for childcare directly in the app, with options to chat or video call the provider beforehand to make sure they're a good fit.</li>
            <li>• Most providers are highly rated, and many come recommended by other parents. June Care emphasizes "word of mom" referrals to maintain trust and quality.</li>
            <li>• The app gives you access to a lot of part-time, flexible care options that traditional daycares don't offer.</li>
          </ul>
        </section>
        
        {/* Competition */}
        <section id="competition" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Competition</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">The most affordable, high-quality care families can find!</h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              • <strong>Affordable:</strong> no membership fees or long-term contracts. Families only pay for the care they need / use.
            </li>
            <li>
              • <strong>Flexible</strong> care for today's modern workforce - works for hybrid, shift, last-minute schedules vs. traditional M-F, 9AM - 5PM schedules.
            </li>
            <li>
              • <strong>High quality</strong> providers must complete a full profile, share reviews / references, complete background checks and a profile review by our trust & safety team. Only 30% of applicants are onboarded as a June Care provider.
            </li>
            <li>
              • <strong>Personalized (automated) matching</strong> so families can find their perfect match in minutes (vs. days or weeks with traditional solutions).
            </li>
            <li>
              • <strong>Easy-to-use</strong> mobile app means families can book trusted care anytime from their phone.
            </li>
          </ul>
        </section>
        
        {/* Funding */}
        <section id="funding" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Funding</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">$3.6 million raised from Craft Ventures, Greycroft, and angel investors</h3>
          <p className="text-gray-700 mb-6">
            June Care has raised $3.6 million in funding to support its mission of providing flexible, affordable, and community-driven childcare.
          </p>
          <p className="text-gray-700 mb-6">
            Secured over two rounds, the funding comes from notable backers such as VC firms Craft Ventures (Airbnb, Facebook, Slack), Greycroft (Venmo, Bumble, Huffington Post), and Yes VC (Etsy, Kickstarter, Unity), as well as Pinterest co-founder Evan Sharp and Instacart co-founder Max Mullen.
          </p>
        </section>
        
        {/* Founders */}
        <section id="founders" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Founders</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet the team</h3>
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-gray-700">
              Our founding team brings together expertise in technology, childcare, and community building to create a platform that truly serves parents' needs.
            </p>
          </div>
        </section>
        
        {/* About */}
        <section id="about" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">About</h2>
          <p className="text-gray-700 mb-4">
            June Care is revolutionizing the childcare industry by creating a trusted community marketplace that connects families with quality in-home care providers.
          </p>
        </section>
        
        {/* Team */}
        <section id="team" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Team</h2>
          <p className="text-gray-700">
            Led by experienced entrepreneurs and childcare advocates with a passion for supporting families.
          </p>
        </section>
        
        {/* Press */}
        <section id="press" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Press</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <p className="font-semibold text-gray-900">Good Morning America</p>
              <p className="text-sm text-gray-600">Featured coverage of June Care's innovative approach to childcare</p>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">FAQ</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-gray-900 mb-2">How does June Care vet providers?</h4>
              <p className="text-gray-700 text-sm">All providers undergo comprehensive background checks and profile reviews. Only 30% of applicants are approved.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-gray-900 mb-2">What are the fees?</h4>
              <p className="text-gray-700 text-sm">No membership fees or long-term contracts. Families only pay for the care they use.</p>
            </div>
          </div>
        </section>
        
        {/* Risks */}
        <section id="risks" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Risks</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-sm text-gray-700 mb-4">
              <strong>Investment Risk:</strong> Investing in early-stage companies involves significant risk and may result in the loss of your entire investment.
            </p>
            <p className="text-sm text-gray-700">
              Specific risks include market competition, regulatory changes, and execution challenges inherent in scaling a marketplace business.
            </p>
          </div>
        </section>
        
        {/* Discussion */}
        <section id="discussion" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Discussion</h2>
          <p className="text-gray-600 text-center py-8">
            Join the conversation in the Discussion tab above.
          </p>
        </section>
      </div>
    </div>
  );
}
