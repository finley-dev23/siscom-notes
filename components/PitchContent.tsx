"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function PitchContent() {
  const [activeSection, setActiveSection] = useState("problem");
  const [showSidebar, setShowSidebar] = useState(false);
  
  const sections = [
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "investment-rationale", label: "Why Invest" },
    { id: "market", label: "Market" },
    { id: "business-model", label: "Business Model" },
    { id: "traction", label: "Traction & Pipeline" },
    { id: "team", label: "Team" },
    { id: "gtm", label: "Go-to-Market" },
    { id: "funding", label: "Funding" },
    { id: "risks", label: "Risks" },
    { id: "impact", label: "Impact" },
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
        
        {/* Highlights Section */}
        <section id="highlights" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Highlights — Why Siscom, right now</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>First-mover:</strong> Building Africa's first dedicated Technology Bank + Investment Marketplace focused on financing cloud, GPU/AI compute, and data-center infrastructure.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Large & growing addressable market:</strong> Africa's digital infrastructure and data-center buildout is accelerating — trillions of dollars of downstream economic opportunity and billions of dollars of immediate infra TAM.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>AI drives demand for capital-intensive infra:</strong> Africa's AI market is forecast to reach ~US$16.5B by 2030, requiring GPUs, rackspace and local processing capacity.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Cloud adoption is surging in Africa:</strong> McKinsey finds cloud adoption is accelerating across African enterprises and is unlocking large productivity gains.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Diaspora capital is sizable & available:</strong> Kenya alone recorded &gt; $5.0B in 12-month remittance inflows — representing a large, under-deployed pool of capital.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><strong>Policy tailwinds:</strong> Data sovereignty and regulatory trends increase demand for local data hosting, creating structural demand for infrastructure we finance.</span>
            </li>
          </ul>
        </section>
        
        {/* Problem */}
        <section id="problem" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Problem</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Capital allocation is skewed in Africa</h3>
          <p className="text-2xl text-gray-700 mb-6">Infrastructure underbuilt despite massive opportunity</p>
          
          <ul className="space-y-4 text-lg text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
              <strong>Capital allocation is skewed:</strong> Over 70%+ of local savings flow into low-yield assets (real estate, government bonds) that underperform frontier tech infrastructure opportunities.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
              <strong>Infrastructure is underbuilt:</strong> Africa has &lt;1% of global data-center capacity despite rapidly accelerating data usage and cloud demand. External capital currently funds most buildouts — but local investors are excluded from the returns.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
              <strong>AI & cloud create new capital needs:</strong> GPUs, rackspace, and local compute are capital intensive (high upfront CAPEX), creating a funding gap that slows local deployments and increases reliance on foreign hyperscalers.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
              <strong>Regulatory pressure increases local demand:</strong> Data protection/data localisation trends force enterprises to host locally, increasing the cost and urgency of onshore infrastructure.
              </div>
            </li>
          </ul>
        </section>
        
        {/* Solution */}
        <section id="solution" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Solution</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">The Technology Bank of Africa</h3>
          
          <p className="text-lg text-gray-700 mb-4">
            Siscom is creating a regulated technology investment marketplace that channels local, diaspora, and institutional capital into Africa's high-capex, high-return technology infrastructure — from GPU clusters and HPC nodes to modular data centers and cloud service layers.
          </p>
          
          <p className="text-lg text-gray-700 mb-8">
            We are building the backbone that powers Africa's digital, AI, and cloud economy, enabling local participation in one of the continent's fastest-growing asset classes.
          </p>
          
          {/* Solution Components */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-bold text-blue-700 mb-6">The Siscom Product Stack</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">1) Marketplace & Platform</h5>
                <p className="text-base text-gray-700 mb-3">A unified platform for investing in Africa's digital infrastructure:</p>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• <strong>Investor onboarding & KYC/AML compliance</strong> — pan-African ready.</li>
                  <li>• <strong>Investment product catalog</strong> — fractional ownership of cloud tokens, GPU pods, and modular data center capacity.</li>
                  <li>• <strong>Liquidity layer</strong> — internal marketplace with scheduled buybacks for early liquidity and investor flexibility.</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">2) Deal Origination & Underwriting</h5>
                <p className="text-base text-gray-700 mb-3">Siscom partners with vetted infrastructure operators and handles the financial structuring to ensure safe, transparent, and sustainable returns:</p>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• <strong>Operator due diligence</strong> — onboarding and underwriting data center hosts, colocation partners, and GPU node operators.</li>
                  <li>• <strong>Bespoke financial engineering</strong> — cashflow waterfalls, revenue-sharing models, and risk-managed structures.</li>
                  <li>• <strong>Anchor contracts</strong> — take-or-pay agreements to stabilize early deployments and reduce investment risk.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-green-700 mb-4">Asset Types (Phase Roadmap)</h4>
            <div className="grid md:grid-cols-3 gap-4 text-base">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phase 1 (2025):</p>
                <p className="text-base text-gray-700">HPC nodes, AI GPU clusters (A100/H100 class), and hybrid cloud storage nodes.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phase 2 (2026–2027):</p>
                <p className="text-base text-gray-700">Modular data center campuses, Starlink/edge zones, and colocation infrastructure.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phase 3 (2028+):</p>
                <p className="text-base text-gray-700">Hyperscale-ready campuses, regional Points of Presence (PoPs), and high-yield digital infrastructure products.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-indigo-700 mb-4">Go-To-Market Strategy</h4>
            <p className="text-base text-gray-700 mb-4">Siscom is designed for scale — with multi-channel access to capital and infrastructure:</p>
            <ul className="text-base text-gray-700 space-y-3">
              <li>• <strong>Diaspora Retail Channel:</strong> Strategic partnerships with remittance and fintech platforms like M-Pesa, Flutterwave, and WorldRemit, enabling simple access for Africans abroad to invest back home.</li>
              <li>• <strong>Institutional Channel:</strong> Collaborations with pension funds, family offices, and local banks for large-scale, structured infrastructure investments.</li>
              <li>• <strong>Operator Channel:</strong> Partnerships with data center developers, GPU suppliers, and cloud infrastructure builders to ensure technical readiness and deployment capacity.</li>
            </ul>
          </div>
        </section>
        
        {/* Investment Rationale */}
        <section id="investment-rationale" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Why Invest</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Investment Rationale</h3>
          
          <p className="text-lg text-gray-700 mb-8">
            Siscom offers investors a gateway into Africa's most strategic and fast-growing asset class — digital infrastructure. By connecting capital directly to cloud, AI, and data infrastructure projects, Siscom enables investors to earn sustainable returns while fueling the continent's digital transformation.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Asymmetric Upside:</h4>
              <p className="text-lg text-gray-700">
                Siscom opens up access to high-yield, high-growth assets — such as GPU clusters and modular data centers — offering stronger risk-adjusted returns than traditional local assets like real estate or bonds.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Structural Demand:</h4>
              <p className="text-lg text-gray-700">
                The rise of AI, cloud, and data sovereignty laws is driving multi-decade demand for locally hosted compute and storage, creating a permanent market need for onshore infrastructure.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Scalable Model:</h4>
              <p className="text-lg text-gray-700">
                Siscom's marketplace model allows specialized infrastructure operators to originate and manage assets, while Siscom captures fees and recurring service revenue, ensuring scalability without operational overload.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Liquidity Innovation:</h4>
              <p className="text-lg text-gray-700">
                Through tokenization and periodic secondary market buybacks, Siscom provides early liquidity options — solving the traditional challenge of long lock-up periods in infrastructure investing.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Institutional Validation:</h4>
              <p className="text-lg text-gray-700">
                With major players like the IFC, World Bank, and Raxio investing heavily in African data centers, the macro tailwinds are undeniable. Siscom brings that same institutional confidence to the retail and diaspora investor level.
              </p>
            </div>
          </div>
        </section>
        
        {/* Market */}
        <section id="market" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Market</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Market Opportunity</h3>
          
          <p className="text-lg text-gray-700 mb-8">
            The market is massive — and just getting started.
          </p>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">AI Market (Africa)</h4>
              <p className="text-2xl font-bold text-purple-700 mb-2">$4.5B → $16.5B by 2030</p>
              <p className="text-base text-gray-700 mb-3">Driven by the explosion of AI model training, edge computing, and GPU demand, Africa's AI market is expected to grow more than 3x in five years.</p>
              <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-500 hover:underline flex items-center mt-2">
                Source: Mastercard, Statista <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Cloud Adoption</h4>
              <p className="text-base text-gray-700 mb-3">Cloud migration is accelerating across African enterprises, with local hosting creating new revenue and efficiency opportunities.</p>
              <a href="https://www.mckinsey.com" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-500 hover:underline flex items-center mt-2">
                Source: McKinsey & Company <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Data Center Expansion</h4>
              <p className="text-base text-gray-700 mb-3">The IFC and World Bank are investing hundreds of millions into regional data centers. For instance, IFC's $100M investment in Raxio reflects global confidence in Africa's digital infrastructure market.</p>
              <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-500 hover:underline flex items-center mt-2">
                Source: Reuters <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Diaspora Remittances (Kenya)</h4>
              <p className="text-2xl font-bold text-orange-700 mb-2">$5.0B+</p>
              <p className="text-base text-gray-700 mb-3">in annual inflows (2025), with monthly peaks exceeding $400M. Siscom taps into this massive pool of underutilized diaspora capital, redirecting it into productive tech assets that power local growth.</p>
              <a href="#" className="text-sm text-pink-500 hover:underline flex items-center mt-2">
                Source: Central Bank of Kenya <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Business Model */}
        <section id="business-model" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Business Model & Unit Economics</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Multiple Revenue Streams</h3>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Revenue Lines</h4>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Origination fees (one-time):</strong> charged to operators for raising capital via Siscom (2–4% typical)</li>
              <li><strong>Platform servicing / management fees:</strong> annual fees on AUM (1–2% per annum) for asset servicing and monitoring</li>
              <li><strong>Secondary market fees:</strong> per trade execution fees and spread capture on token trading</li>
              <li><strong>Value-add services:</strong> data center operations advisory, power/energy optimization, and marketplace integrations</li>
            </ul>
          </div>

          <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-50 rounded-r-xl">
            <h4 className="font-semibold text-gray-900 mb-3">Sample Unit Economics (5 MW modular campus)</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">CAPEX</p>
                <p className="text-xl font-bold text-gray-900">$25M</p>
              </div>
              <div>
                <p className="text-gray-600">Annual Revenue</p>
                <p className="text-xl font-bold text-gray-900">$6M/year</p>
              </div>
              <div>
                <p className="text-gray-600">Operating Margin</p>
                <p className="text-xl font-bold text-gray-900">35–45%</p>
              </div>
              <div>
                <p className="text-gray-600">Investor IRR</p>
                <p className="text-xl font-bold text-gray-900">20–35%</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Traction */}
        <section id="traction" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Traction & Pipeline</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Current Pipeline & Near-Term Projects</h3>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mb-8">
            <h4 className="text-xl font-bold text-indigo-700 mb-6">Pipeline Highlights</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Cluster 1 (Q1–Q3 2025)</h5>
                <p className="text-sm text-gray-700">HPC node pilot — demand $0.5M–$2M</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Cluster 2 (Q4 2025–Q3 2026)</h5>
                <p className="text-sm text-gray-700">Hybrid compute + storage cluster — target $5M–$10M</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">AI GPU Cluster</h5>
                <p className="text-sm text-gray-700">Partnership talks with NVIDIA channel partners, Supermicro — target initial cluster $10M</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Modular DC Site (Naivasha SEZ)</h5>
                <p className="text-sm text-gray-700">Campus with $100M funding goal (partnered design)</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section id="team" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Team</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Experienced Leadership</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Derrick Gakuu - Founder</h4>
              <p className="text-base text-gray-700">Derrick is the founder of Siscom Africa, leading the vision to build the Technology Bank of Africa. He is driving the mission to democratize access to Africa's technology infrastructure economy and enable local participation in the continent's fastest-growing asset class.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Nashon Garvey - Co-Founder</h4>
              <p className="text-base text-gray-700">Expert in Digital Infrastructure & Fintech | Reality Architect. Nashon co-leads Siscom's vision to democratize access to Africa's technology infrastructure economy, connecting local and diaspora capital to high-return digital infrastructure projects.</p>
            </div>
          </div>
        </section>
        
        {/* Go-to-Market */}
        <section id="gtm" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Go-to-Market</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Multi-Channel Strategy</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50">
              <h4 className="font-semibold text-gray-900 mb-2">Diaspora Channel (Quick Wins)</h4>
              <p className="text-sm text-gray-700">Integrate with remittance rails and major wallets (M-Pesa, payment processors) to present low-ticket infrastructure investments ($500–$2,500) to diaspora customers.</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-50">
              <h4 className="font-semibold text-gray-900 mb-2">Institutional Channel (Scale)</h4>
              <p className="text-sm text-gray-700">Run dedicated institutional funds / managed accounts for pension funds and family offices with larger minimums ($250k+), emphasizing regulatory compliance and yield.</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-4 bg-purple-50">
              <h4 className="font-semibold text-gray-900 mb-2">Operator Partnerships</h4>
              <p className="text-sm text-gray-700">Secure long-term colocation and take-or-pay contracts with anchor tenants (hyperscalers, telcos, large enterprise customers) to reduce revenue volatility.</p>
            </div>
          </div>
        </section>
        
        {/* Funding */}
        <section id="funding" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Funding</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Use of Proceeds</h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-600 mb-1">Round Type</p>
                <p className="text-2xl font-bold text-gray-900">Seed</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Target</p>
                <p className="text-2xl font-bold text-gray-900">$1.25M</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Pre-money Valuation</p>
                <p className="text-2xl font-bold text-gray-900">$10M</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Security</p>
                <p className="text-2xl font-bold text-gray-900">Equity + SAFE</p>
              </div>
            </div>

            <h4 className="text-lg font-bold text-gray-900 mb-4">Planned Use of Funds (24-month runway)</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Platform & product engineering</span>
                <span className="text-sm font-semibold text-gray-900">30%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Operator & deal pipeline development</span>
                <span className="text-sm font-semibold text-gray-900">25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Marketing & investor acquisition</span>
                <span className="text-sm font-semibold text-gray-900">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Regulatory, licensing & compliance</span>
                <span className="text-sm font-semibold text-gray-900">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Key hires</span>
                <span className="text-sm font-semibold text-gray-900">10%</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Risks */}
        <section id="risks" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Risks</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Investment Risks</h3>
          
          <p className="text-base text-gray-700 mb-6">
            At Siscom, we believe in transparency and responsible innovation. While the opportunities across Africa's digital infrastructure landscape are substantial, investors should be aware of the following potential risks associated with this emerging asset class:
          </p>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Execution Risk</h4>
              <p className="text-base text-gray-700">Developing, financing, and operationalizing data centers, GPU clusters, and hybrid cloud nodes requires significant capital and precision. Delays in procurement, deployment, or partner execution could temporarily impact projected timelines and returns.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Regulatory Risk</h4>
              <p className="text-base text-gray-700">Data protection, cloud licensing, and digital asset regulations vary across African jurisdictions and are still evolving. Siscom's marketplace and tokenization model will maintain pan-African regulatory compliance, but shifts in law or compliance costs may influence operations or returns.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Macroeconomic & FX Risk</h4>
              <p className="text-base text-gray-700">Given exposure to multiple African markets, currency fluctuations, inflation, or sovereign credit risk may affect infrastructure operator revenues and investor payouts. Siscom actively mitigates this through multi-currency structuring and diversified hosting zones.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Market Adoption Risk</h4>
              <p className="text-base text-gray-700">Market performance depends on enterprise adoption of local compute and storage solutions. Should hyperscalers or anchor tenants delay local hosting or contract commitments, early-stage projects could experience slower-than-expected cashflow stabilization.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Liquidity Risk</h4>
              <p className="text-base text-gray-700">While Siscom introduces tokenized infrastructure units with scheduled buybacks and internal marketplace liquidity, the secondary market depth may be limited during early rollout phases, potentially reducing immediate exit options for investors.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Technology Risk</h4>
              <p className="text-base text-gray-700">The GPU and compute hardware ecosystem evolves rapidly. New architectures or supply disruptions may necessitate additional capital expenditure to remain competitive, which could impact short-term yields or lead to stranded assets over time.</p>
            </div>
          </div>
        </section>
        
        {/* Impact */}
        <section id="impact" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Impact & Policy Alignment</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Creating Lasting Impact</h3>
          
          <p className="text-base text-gray-700 mb-8">
            Siscom is not just building infrastructure — we're shaping Africa's digital future by aligning growth with inclusion, sovereignty, and sustainability.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Economic Inclusion</h4>
              <p className="text-base text-gray-700">
                Siscom democratizes access to Africa's technology infrastructure economy by enabling diaspora, retail, and institutional investors to participate in high-return, real-economy assets — previously accessible only to global capital.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Digital Sovereignty</h4>
              <p className="text-base text-gray-700">
                By financing local cloud, AI, and data-hosting infrastructure, Siscom directly supports national digital transformation and data sovereignty goals. This reduces reliance on foreign hyperscalers and ensures that African data remains under African governance.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sustainable Infrastructure</h4>
              <p className="text-base text-gray-700">
                Siscom's infrastructure projects are built for efficiency and sustainability, leveraging modular data center designs and renewable energy (especially Kenya's clean energy mix). This approach lowers operational costs (OPEX) while contributing to Africa's net-zero and green technology ambitions.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
            <h4 className="text-xl font-bold text-green-700 mb-4">Exit Paths</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>IPO:</strong> Build to list as Africa's first Technology Bank / infra platform</li>
              <li>• <strong>Strategic sale:</strong> Sell platform or assets to global private equity, infrastructure funds, or hyperscalers</li>
              <li>• <strong>Portfolio monetization:</strong> Structured secondary market and corporate partnerships enable partial liquidity for early investors</li>
            </ul>
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
