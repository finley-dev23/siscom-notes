"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ExternalLink, Mail, Linkedin } from "lucide-react";
import Image from "next/image";

export default function PitchContent() {
  const [activeSection, setActiveSection] = useState("problem");
  const [showSidebar, setShowSidebar] = useState(false);
  
  const sections = [
    // Starting from Problem — match in-page titles
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Siscom Cloud & Infrastructure Stack" },
    { id: "investment-rationale", label: "Why Invest" },
    { id: "market", label: "Market" },
    { id: "business-model", label: "Business Model" },
    { id: "traction", label: "Traction — From Concept to Operating Cloud" },
    { id: "roadmap", label: "Roadmap — Building Africa's Edge Cloud & AI Future" },
    { id: "competitive-advantage", label: "Product Moat" },
    { id: "team", label: "Team" },
    { id: "funding", label: "Funding & Terms" },
  ];
  
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const problemSection = document.getElementById('problem');
      
      if (problemSection) {
        const rect = problemSection.getBoundingClientRect();
        // Show sidebar when Problem section reaches the top of viewport
        setShowSidebar(rect.top <= 100);
      }
      
      const sectionIds = sections.map(s => s.id);
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);
  
  return (
    <div className="relative">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto xl:ml-10">
        
        {/* Elevator Pitch */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Elevator Pitch</h2>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 space-y-4">
            <p className="text-xl text-gray-800 leading-relaxed">
              At Siscom Africa, we're reimagining what cloud means for Africa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We asked ourselves two questions:
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              1. How can a small kiosk in Turkana enjoy the same transformative power of cloud and AI as an enterprise client using AWS in Nairobi?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              2. How can a young Kenyan investor earn returns from the very digital infrastructure powering that kiosk's success?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our answer is a vertically integrated Kenyan SME cloud & Digitization ecosystem — purpose-built for financial services, SME digitization, analytics, automation, and developers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We make it possible for millions of SMEs to adopt cloud, data, and AI solutions through a localized, affordable stack — while Kenyan investors co-own the backbone of this transformation: the servers, GPUs, and data centers fueling it all.
            </p>
            <p className="text-lg text-gray-800 font-semibold leading-relaxed">
              We're democratizing Africa's digital economy from the ground up.
            </p>
          </div>
        </section>
        
        {/* Highlights Section */}
        <section id="highlights" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Highlights — Why Siscom, right now</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Kenya's Cloud Market on the Rise:</strong> 2025 market projected at ~$1.3B, CAGR 13.8%</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Digital Transformation Accelerates:</strong> Growth in finance, e-commerce, healthcare, and government services increases cloud demand</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Policy Tailwinds & Data Sovereignty:</strong> Data localization laws create structural demand for secure, homegrown cloud services</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Limited Competition, High First-Mover Advantage:</strong> Few local providers; Siscom can establish leadership and set standards before global hyperscalers dominate</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Node Investment MOAT:</strong> Crowdfunding model allows rapid scaling, lean ops, affordable pricing, and fast-tracked leadership across Kenya & East Africa</span>
            </li>
          </ul>
        </section>
        
        {/* YouTube Video */}
        <section className="mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg bg-black">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/82MT7MJ0ogc"
                title="Siscom Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
        
        {/* Problem */}
        <section id="problem" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Problem</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">The Problem — Kenya's Cloud Divide</h3>
          <p className="text-2xl text-gray-700 mb-6">Kenya's 7.4 million SMEs power over 80% of employment and nearly half of GDP — yet they remain locked out of the digital transformation driving the modern economy.</p>
          
          <p className="text-xl text-gray-700 mb-8">Here's the challenge:</p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h4 className="text-xl font-bold text-gray-900 mb-3">1. High Cost of Global Cloud</h4>
              <p className="text-lg text-gray-700 mb-2">Most cloud infrastructure is priced in U.S. dollars and optimized for large enterprises.</p>
              <p className="text-lg text-gray-700">SMEs in Nakuru, Kisumu, or Turkana can't absorb these costs — nor manage dollar-based volatility.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h4 className="text-xl font-bold text-gray-900 mb-3">2. Rigid Billing and Cashflow Mismatch</h4>
              <p className="text-lg text-gray-700 mb-2">Global providers demand fixed monthly commitments.</p>
              <p className="text-lg text-gray-700">Kenyan SMEs operate on daily or weekly cashflows, not predictable subscription cycles.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h4 className="text-xl font-bold text-gray-900 mb-3">3. Technical Barriers</h4>
              <p className="text-lg text-gray-700">Building and managing cloud-native tools requires DevOps, data engineering, and cybersecurity expertise — skills that most SMEs can't afford or access.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h4 className="text-xl font-bold text-gray-900 mb-3">4. Foreign Clouds, Foreign Context</h4>
              <p className="text-lg text-gray-700">Global cloud solutions aren't built for Kenya's retail, fintech, or regulatory realities — no integration with M-Pesa, PesaLink, or local data sovereignty laws.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h4 className="text-xl font-bold text-gray-900 mb-3">5. Value Flight</h4>
              <p className="text-lg text-gray-700 mb-2">Every shilling spent on global cloud leaks value offshore.</p>
              <p className="text-lg text-gray-700">Kenyan investors don't own or earn from the data centers, GPUs, or servers powering their own economy.</p>
            </div>
          </div>
        </section>
        
        {/* Solution */}
        <section id="solution" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Solution</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Solution — The Kenyan Cloud for Kenya's Economy</h3>
          
          <p className="text-2xl text-gray-700 mb-8">
            At Siscom, we're building Kenya's first vertically integrated cloud ecosystem — designed from the ground up for Kenyan industries, Kenyan developers, and Kenyan investors.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-bold text-blue-700 mb-6">A 3-Layer Cloud Stack</h4>
            <p className="text-lg text-gray-700 mb-6">Our cloud platform operates at three layers — fully interoperable, compliant, and industry-aware:</p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                <h5 className="text-xl font-bold text-gray-900 mb-3">1. Infrastructure-as-a-Service (IaaS)</h5>
                <p className="text-lg text-gray-700">Locally hosted compute, storage, and GPU infrastructure at IX Africa and regional data centers — ensuring data sovereignty, low latency, and compliance with Kenyan regulations.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                <h5 className="text-xl font-bold text-gray-900 mb-3">2. Platform-as-a-Service (PaaS)</h5>
                <p className="text-lg text-gray-700">Developer-ready environments for APIs, analytics, and automation — enabling fast, secure, and scalable application development without deep DevOps expertise.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                <h5 className="text-xl font-bold text-gray-900 mb-3">3. Software-as-a-Service (SaaS)</h5>
                <p className="text-lg text-gray-700">Industry-specific applications that address real Kenyan use cases — financial services, retail, e-commerce, healthcare, and even the church — all available as plug-and-play digital tools.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-8">
            <h4 className="text-2xl font-bold text-green-700 mb-6">Built for Kenya's Reality</h4>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-green-600">✓</span>
                <span><strong>Flexible billing</strong> — daily, monthly, or annual, to match SME cashflow cycles.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">✓</span>
                <span><strong>Billed in Kenya Shillings, not dollars.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">✓</span>
                <span><strong>Plug & Play</strong> — SMEs can deploy ready-made digital tools without technical teams.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">✓</span>
                <span><strong>Local developer ecosystem</strong> — empowering Kenyan engineers to build on Kenyan infrastructure.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">✓</span>
                <span><strong>Compliant by design</strong> — aligned with CBK, ODPC, and ICT Authority regulations.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-purple-700 mb-4">Funded by Kenyans, for Kenya</h4>
            <p className="text-lg text-gray-700 mb-4">
              We're redefining what it means to invest in digital infrastructure.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Through micro-investment opportunities, local investors can co-own the cloud — from the servers and GPUs to the data centers that power Kenya's digital future.
            </p>
            <p className="text-lg text-gray-800 font-semibold">
              So the same young Kenyan who uses PesaHub or runs a kiosk in Turkana can invest in and profit from the very cloud infrastructure enabling their growth.
            </p>
          </div>
        </section>
        
        {/* Investment Rationale */}
        <section id="investment-rationale" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Why Invest</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Investment Rationale</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">1. Tackling Africa's Cloud Cost Crisis</h4>
              <p className="text-lg text-gray-700">
                African businesses pay 20–50% more for cloud than the global average, driven by USD pricing, high upfront costs, and rigid annual models. Siscom's local currency billing and flexible pay-as-you-grow plans directly solve this — unlocking mass adoption for millions of SMEs.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">2. Massive Untapped Market</h4>
              <p className="text-lg text-gray-700">
                Africa's digital economy is projected to exceed $180B by 2025, yet less than 20% of workloads are hosted locally. Siscom is positioned to capture this gap by providing affordable, compliant, and localized cloud infrastructure purpose-built for African realities.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">3. Local Data = Local Intelligence</h4>
              <p className="text-lg text-gray-700">
                By keeping data on the continent, Siscom enables AI, analytics, and innovation ecosystems to thrive in Africa. This builds a foundation for digital sovereignty while reducing cross-border costs and latency — a key differentiator in markets reliant on offshore data centers.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">4. Inclusive Ownership Model</h4>
              <p className="text-lg text-gray-700">
                Siscom isn't just building infrastructure — it's democratizing ownership. Through a crowdfunded, cooperative model, local investors, communities, and innovators can own and profit from Africa's digital backbone, creating both social and financial returns.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">5. Developer-First, Africa-Ready Platform</h4>
              <p className="text-lg text-gray-700">
                Siscom offers a simple, affordable, and locally optimized cloud for developers and SMEs — blending the ease of DigitalOcean, the compute efficiency of CoreWeave, and pricing that reflects local economies. This drives adoption across high-impact sectors like health, agriculture, logistics, and education.
              </p>
            </div>
          </div>
        </section>
        
        {/* Market */}
        <section id="market" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Market</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Market Opportunity</h3>
          
          <p className="text-2xl text-gray-700 mb-8">
            Digitizing 7.8M SMEs = a multi-billion-dollar cloud market waiting to be localized and democratized.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b-2 border-purple-500">
                  <th className="text-left py-4 px-6 text-lg font-bold text-gray-900">Metric</th>
                  <th className="text-left py-4 px-6 text-lg font-bold text-gray-900">Insight</th>
                  <th className="text-left py-4 px-6 text-lg font-bold text-gray-900">Estimated Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-base font-semibold text-gray-900">TAM (All SMEs)</td>
                  <td className="py-4 px-6 text-base text-gray-700">7.8M Kenyan SMEs adopting cloud & AI tools</td>
                  <td className="py-4 px-6 text-base font-bold text-purple-700">US$5.2 – 7.8 Billion</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-base font-semibold text-gray-900">SAM (Regulated Industries)**</td>
                  <td className="py-4 px-6 text-base text-gray-700">Finance, Healthcare, eGov, Retail</td>
                  <td className="py-4 px-6 text-base font-bold text-purple-700">US$2.5 – 3.5 Billion</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-base font-semibold text-gray-900">SOM (Phase 1 Focus)**</td>
                  <td className="py-4 px-6 text-base text-gray-700">FinTechs, Retailers, Developer Ecosystem</td>
                  <td className="py-4 px-6 text-base font-bold text-purple-700">US$500 Million – 1 Billion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Business Model */}
        <section id="business-model" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Business Model & Unit Economics</h2>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/12.png"
              alt="Business Model and Revenue Streams"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>
        
        {/* Traction */}
        <section id="traction" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Traction — From Concept to Operating Cloud</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Launched March 2025 — operational & revenue-aligned</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <div className="text-lg font-bold text-green-700 mb-1">10 Fully Funded Nodes</div>
                <div className="text-base text-gray-700">$270k total investment, crowdfunded & deployed at IX Africa Tier 3 DC</div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-lg font-bold text-green-700 mb-1">3 Active Nodes</div>
                <div className="text-base text-gray-700">Powering live workloads in East Africa</div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-lg font-bold text-green-700 mb-1">2 Active Customers</div>
                <div className="text-base text-gray-700">IaaS & PaaS global developer platform running POP on Siscom</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <div className="text-lg font-bold text-green-700 mb-1">$344k Committed Demand</div>
                <div className="text-base text-gray-700">5 enterprise clients signed (2025–2030)</div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-lg font-bold text-green-700 mb-1">Developer Ecosystem</div>
                <div className="text-base text-gray-700">500+ active Kenyan developers building on Siscom</div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-lg font-bold text-green-700 mb-1">Data Compliance</div>
                <div className="text-base text-gray-700">Regulated both as a data controller and a data processor</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/14.png"
              alt="Traction Metrics"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>
        
        {/* Roadmap */}
        <section id="roadmap" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">Roadmap — Building Africa's Edge Cloud & AI Future</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 2025 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-100 rounded-xl shadow-md p-6 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-pink-700 mb-4">2025 — Foundation & Market Validation</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
                <li>Launch Siscom Cloud Grid, 10 funded nodes</li>
                <li>Strategic partnerships with academia, cooperatives, counties & banks</li>
                <li>Operational traction: 3 live nodes, 2 enterprise customers</li>
              </ul>
            </div>
            
            {/* 2026 */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-xl shadow-md p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-700 mb-4">2026 — Growth & Intelligence Layer</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
                <li>Deploy AI GPU nodes (EdgeAI grid)</li>
                <li>Host locally trained SaaS LLMs with MindIntelligence</li>
                <li>Capture 30% of developer market via credits & community events</li>
                <li>Commercialize AI workloads & GPU compute for enterprises</li>
              </ul>
            </div>
            
            {/* 2027 */}
            <div className="bg-gradient-to-br from-blue-50 to-green-100 rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-4">2027 — Scale & Integration</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
                <li>Enter modular DC segment (Navon partnership)</li>
                <li>Deliver first vertically integrated AI + GPU turnkey infrastructure</li>
                <li>Expand edge nodes across Kenya</li>
                <li>Launch regional developer acceleration hubs</li>
              </ul>
            </div>
            
            {/* 2028 */}
            <div className="bg-gradient-to-br from-green-50 to-yellow-100 rounded-xl shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-4">2028 — Market Leadership & Regional Expansion</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
                <li>Capture 10% of Kenya's $1B Edge Cloud market ($3B TAM by 2028)</li>
                <li>Lead East Africa's Edge AI ecosystem</li>
                <li>Expand into Uganda, Tanzania, Rwanda</li>
                <li>Position for Series A & strategic hyperscale partnerships</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Competitive Advantage */}
        <section id="competitive-advantage" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Moat — The Siscom Ecosystem Advantage</h2>
          <h3 className="text-2xl text-gray-700 mb-8">Built for Kenya. Scaled for Africa.</h3>
          
          <p className="text-xl text-gray-700 mb-10">
            Siscom's competitive moat lies in deep vertical integration, local compliance, and multi-layered interoperability across infrastructure, platform, and intelligence layers — all priced and billed in Kenya Shillings, and optimized for African realities of scale.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-blue-700 mb-6">Our Product Pillars (The Moat Components)</h4>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-6 border-l-4 border-blue-500">
                <h5 className="text-xl font-bold text-gray-900 mb-4">1. Siscom Dev — On-Demand Cloud for Developers</h5>
                <p className="text-lg text-gray-700 mb-4">
                  The first Kenyan-built PAAS cloud offering local developers access to compute and AI resources.
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• Pay-as-you-go (hourly, monthly, annual) in KES</li>
                  <li>• Elastic compute, storage, APIs, GPU access</li>
                  <li>• Integrated AI environments (ML training, model deployment)</li>
                  <li>• Developer-friendly CLI, SDK, and low-latency edge servers hosted locally (IX Africa)</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                  <p className="text-base text-blue-900 font-semibold">→ Moat: Captures the developer economy with local billing, lower latency, and regulatory confidence.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 mb-6 border-l-4 border-green-500">
                <h5 className="text-xl font-bold text-gray-900 mb-4">2. Pesahub — FinTech-as-a-Service Cloud</h5>
                <p className="text-lg text-gray-700 mb-4">
                  A vertically integrated platform for FinTechs and Financial Institutions to build, launch, and scale faster.
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• Wallet-as-a-Service (multi-currency, interoperable)</li>
                  <li>• API Gateway (M-Pesa, PesaLink, Cards, Wallets, Banks)</li>
                  <li>• Digital Onboarding & KYC APIs</li>
                  <li>• AML Screening, Credit Scoring, and Analytics</li>
                  <li>• Automated Reconciliation & Customer Lifecycle Management</li>
                  <li>• Cybersecurity & Compliance Layer: Regulated as both data controller and processor</li>
                  <li>• High availability & redundancy per CBK & ODPC guidelines</li>
                </ul>
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-base text-green-900 font-semibold">→ Moat: Combines infrastructure + compliance + innovation — making it nearly impossible for global players to localize at this depth.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-6 border-l-4 border-purple-500">
                <h5 className="text-xl font-bold text-gray-900 mb-4">3. Siscom Pulse — Community & Ecosystem Engine</h5>
                <p className="text-lg text-gray-700 mb-4">
                  Backend infrastructure for events, community, networking, and innovation hubs.
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• API-driven event management & ticketing</li>
                  <li>• Real-time analytics on participation and engagement</li>
                  <li>• Community growth and developer network integration</li>
                </ul>
                <div className="mt-4 p-4 bg-purple-100 rounded-lg">
                  <p className="text-base text-purple-900 font-semibold">→ Moat: Creates network effects around the Siscom brand — developer loyalty + community lock-in.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 mb-6 border-l-4 border-indigo-500">
                <h5 className="text-xl font-bold text-gray-900 mb-4">4. Siscom CloudX — SME Digitization Stack</h5>
                <p className="text-lg text-gray-700 mb-4">
                  Unified billing, automation, and workplace productivity tools for Kenya's 7.8M SMEs.
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• Centralized dashboard for billing, CRM, POS, Payroll, and Analytics</li>
                  <li>• Integrations with Zoho, Google Workspace, Microsoft 365</li>
                  <li>• Localized AI assistants for business productivity</li>
                </ul>
                <div className="mt-4 p-4 bg-indigo-100 rounded-lg">
                  <p className="text-base text-indigo-900 font-semibold">→ Moat: Captures the largest TAM — SME digitization — and enables retention through daily operational reliance.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 mb-6 border-l-4 border-orange-500">
                <h5 className="text-xl font-bold text-gray-900 mb-4">5. AI Mtaani — Africa's Localized AI Suite</h5>
                <p className="text-lg text-gray-700 mb-4">
                  Local-language, culturally tuned AI solutions and training programs.
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• Corporate & sector-specific LLMs</li>
                  <li>• AI developer training programs & R&D labs</li>
                  <li>• Enterprise AI adoption tools</li>
                  <li>• Partnerships with universities and government AI initiatives</li>
                </ul>
                <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                  <p className="text-base text-orange-900 font-semibold">→ Moat: Positions Siscom as the AI infrastructure and knowledge backbone of Kenya.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* YouTube Video - Team Introduction */}
        <section className="mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg bg-black">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/tc4VOOJaDxY"
                title="Siscom Team"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section id="team" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Team</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Experienced Leadership</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Derrick Gakuu */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Portrait */}
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-pink-500">
                  <Image
                    src="/assets/home-screen-imgs/derrick-gakuu.jpg"
                    alt="Derrick Gakuu - Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Name and Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Derrick Gakuu</h4>
                <p className="text-lg text-pink-500 font-semibold mb-4">Founder</p>
                
                {/* Bio */}
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Derrick is the founder of Siscom Africa, leading the vision to build the Technology Bank of Africa. He is driving the mission to democratize access to Africa's technology infrastructure economy and enable local participation in the continent's fastest-growing asset class.
                </p>
                
                {/* Contact Details */}
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/derrick-gakuu-a2889137/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:derrick@siscom.tech"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Nashon Garvey */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Portrait */}
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-pink-500">
                  <Image
                    src="/assets/home-screen-imgs/nashon-garvey.jpg"
                    alt="Nashon Garvey - Co-Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Name and Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Nashon Garvey</h4>
                <p className="text-lg text-pink-500 font-semibold mb-4">Co-Founder</p>
                
                {/* Bio */}
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Expert in Digital Infrastructure & Fintech | Reality Architect. Nashon co-leads Siscom's vision to democratize access to Africa's technology infrastructure economy, connecting local and diaspora capital to high-return digital infrastructure projects.
                </p>
                
                {/* Contact Details */}
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/nashon-garvey-582b6b19b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:garvey@siscom.tech"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Dorcas Kanini */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Portrait */}
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-pink-500">
                  <Image
                    src="/assets/home-screen-imgs/dorcas-kanini.jpeg"
                    alt="Dorcas Kanini"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Name and Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Dorcas Kanini</h4>
                <p className="text-lg text-pink-500 font-semibold mb-4">Digital Sales Lead</p>
                
                {/* Bio */}
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Dorcas brings valuable expertise to the Siscom team, contributing to our mission of democratizing access to Africa's technology infrastructure economy.
                </p>
                
                {/* Contact Details */}
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/dorcas-kanini-b86485365?fromQR=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:dorcas@siscom.tech"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Ian Obiero */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Portrait */}
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-pink-500">
                  <Image
                    src="/assets/home-screen-imgs/ian-obiero.jpg"
                    alt="Ian Obiero"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Name and Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Ian Obiero</h4>
                <p className="text-lg text-pink-500 font-semibold mb-4">Digital Marketing Lead</p>
                
                {/* Bio */}
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Ian plays a key role in advancing Siscom's vision of building the Technology Bank of Africa and connecting capital to digital infrastructure opportunities.
                </p>
                
                {/* Contact Details */}
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/ian-obiero-350440367/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:ian@siscom.tech"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Riyaz Bachani */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Portrait */}
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-pink-500">
                  <Image
                    src="/assets/images/riyaz-bachani.jpeg"
                    alt="Riyaz Bachani"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Name and Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Riyaz Bachani</h4>
                <p className="text-lg text-pink-500 font-semibold mb-4">Advisor</p>
                
                {/* Bio */}
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Riyaz brings strategic expertise and valuable insights to help guide Siscom's growth and expansion across Africa's technology infrastructure landscape.
                </p>
                
                {/* Contact Details */}
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/riyaz-bachani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Alfred Ongere */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Portrait */}
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-pink-500">
                  <Image
                    src="/assets/images/alfred-ongere.png"
                    alt="Alfred Ongere"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Name and Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Alfred Ongere</h4>
                <p className="text-lg text-pink-500 font-semibold mb-4">Advisor</p>
                
                {/* Bio */}
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Alfred provides strategic guidance and industry expertise to support Siscom's mission of democratizing access to Africa's technology infrastructure economy.
                </p>
                
                {/* Contact Details */}
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/alfred-ongere-2963b873/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Eric Ruenji */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col items-center text-center">
                {/* Portrait */}
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-pink-500">
                  <Image
                    src="/assets/images/eric-ruenji.jpeg"
                    alt="Eric Ruenji"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Name and Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Eric Ruenji</h4>
                <p className="text-lg text-pink-500 font-semibold mb-4">Advisor</p>
                
                {/* Bio */}
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Eric contributes valuable expertise and strategic insights to help Siscom achieve its vision of building Africa's intelligent Cloud, Data, and AI infrastructure.
                </p>
                
                {/* Contact Details */}
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/ericruenji/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Go-to-Market */}
        
        
        {/* Funding */}
        <section id="funding" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Funding & Terms</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Raise: $270k / Ksh 35M Seed</h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-600 mb-1">Structure</p>
                <p className="text-2xl font-bold text-gray-900">Equity + potential SAFE</p>
                <p className="text-sm text-gray-600 mt-1">For early participants</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Issue</p>
                <p className="text-2xl font-bold text-gray-900">100 SAFE Notes</p>
                <p className="text-sm text-gray-600 mt-1">@ Ksh 350k each</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Equity Raise</p>
                <p className="text-2xl font-bold text-gray-900">Ksh 35M for 10%</p>
              </div>
            </div>

            <h4 className="text-lg font-bold text-gray-900 mb-4">Use of Funds (12-month runway to 2026):</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Platform Build & Product Development: (nodes, PaaS, billing platform)</span>
                <span className="text-sm font-semibold text-gray-900">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Developer Community & Operator Partnerships</span>
                <span className="text-sm font-semibold text-gray-900">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Marketing & Customer Acquisition</span>
                <span className="text-sm font-semibold text-gray-900">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Team Expansion (Tech + Business Dev)</span>
                <span className="text-sm font-semibold text-gray-900">40%</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/19.png"
              alt="Funding Breakdown"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>
        
        
      </div>
      
      {/* Left Sidebar Navigation */}
      {showSidebar && (
        <nav className="fixed left-0 top-24 hidden lg:block w-40 z-50">
            <div className="p-4 space-y-0.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 text-base rounded transition ${
                    activeSection === section.id
                    ? "text-pink-500 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
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
      )}
    </div>
  );
}
