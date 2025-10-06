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
          <h3 className="text-4xl font-bold text-gray-900 mb-8">The Technology Bank of Africa</h3>
          <p className="text-lg text-gray-700 mb-8">
            Siscom is building a regulated marketplace and platform that channels domestic retail, diaspora, and institutional capital into high-capex, high-return technology infrastructure: HPC nodes, GPU clusters, modular data centers, and associated services.
          </p>
          
          {/* Solution Components */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-bold text-blue-700 mb-6">The Siscom Product Stack</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">1) Marketplace & Platform</h5>
                <ul className="text-base text-gray-700 space-y-2">
                  <li>• Investor onboarding & KYC/AML (pan-Africa compliant)</li>
                  <li>• Investment product catalog: tokenized cloud tokens, GPU pods, modular DC slots</li>
                  <li>• Secondary liquidity layer: internal order book + scheduled periodic buybacks</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">2) Deal Origination & Underwriting</h5>
                <ul className="text-base text-gray-700 space-y-2">
                  <li>• Underwrite infrastructure operators (data center hosts, colo partners)</li>
                  <li>• Bespoke financial engineering (cashflow waterfall, revenue sharing)</li>
                  <li>• Take-or-pay anchor contracts to de-risk early projects</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-green-700 mb-4">Asset Types (Phase Plan)</h4>
            <div className="grid md:grid-cols-3 gap-4 text-base">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phase 1 (2025)</p>
                <p className="text-base text-gray-700">HPC nodes, AI GPU clusters (H100 & A100 class), hybrid storage clusters</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phase 2 (2026–27)</p>
                <p className="text-base text-gray-700">Modular DC campuses, Starlink/edge zones, colocation slots</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phase 3 (2028+)</p>
                <p className="text-base text-gray-700">Hyperscale-ready campuses, cross-border regional POPs, high-yield structured products</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-indigo-700 mb-4">Go-to-Market (GTM)</h4>
            <ul className="text-base text-gray-700 space-y-2">
              <li>• <strong>Diaspora retail channel:</strong> partnerships with remittance providers and fintech wallets (M-Pesa, Flutterwave)</li>
              <li>• <strong>Institutional channel:</strong> pension funds, family offices, and local banks for larger tranches</li>
              <li>• <strong>Operator channel:</strong> developer partnerships with modular DC builders, IX Africa, GPU suppliers</li>
            </ul>
          </div>
        </section>
        
        {/* Investment Rationale */}
        <section id="investment-rationale" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Why Invest</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Investment Rationale</h3>
          
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong>Asymmetric upside:</strong> Local investors gain access to asset classes with higher risk-adjusted returns than domestic real estate and bonds.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong>Structural demand:</strong> Cloud & AI adoption + data sovereignty laws create multi-decade demand for locally provisioned compute and storage.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong>Scalable model:</strong> Marketplace approach — assets are originated by specialists; Siscom captures fees and recurring servicing income.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong>Liquidity innovation:</strong> Tokenization + periodic secondary mechanisms reduce the historical illiquidity of infra investments.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong>Macro tailwinds & institutional support:</strong> Major institutional entrants (IFC/World Bank investments) demonstrate confidence in market economics.
              </div>
            </li>
          </ul>
        </section>
        
        {/* Market */}
        <section id="market" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Market</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Large & Growing Addressable Market</h3>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">AI Market (Africa)</h4>
              <p className="text-2xl font-bold text-purple-700 mb-2">$4.5B → $16.5B</p>
              <p className="text-sm text-gray-700">Projected growth from 2025 to 2030, driving demand for GPUs and local processing capacity</p>
              <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center mt-2">
                Source: Mastercard/Statista <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Cloud Adoption</h4>
              <p className="text-gray-700 mb-2">McKinsey finds cloud adoption accelerating across African enterprises; cloud migration unlocking significant productivity and growth opportunities.</p>
              <a href="https://www.mckinsey.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center mt-2">
                Source: McKinsey & Company <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Data-Center Investment</h4>
              <p className="text-gray-700 mb-2">IFC/World Bank activity shows billions in active investments. Example: IFC backing Raxio with $100M to expand data centers across African markets.</p>
              <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center mt-2">
                Source: Reuters <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Remittances (Kenya)</h4>
              <p className="text-2xl font-bold text-orange-700 mb-2">$5.0B+</p>
              <p className="text-sm text-gray-700">12-month cumulative inflows to June 2025, with monthly peaks > $400M — a large addressable pool of capital for retail investment channels</p>
              <a href="#" className="text-sm text-blue-600 hover:underline flex items-center mt-2">
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

          <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-xl">
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
              <h4 className="text-lg font-semibold text-gray-900 mb-2">CEO / Founding CEO (Finance + Infra)</h4>
              <p className="text-sm text-gray-700">Ex-investment banker / structurer with track record in infrastructure deals and African markets. Leads fund design, institutional sales, and capital strategy.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">COO / Head of Platform</h4>
              <p className="text-sm text-gray-700">Product & operations lead — marketplace design, investor onboarding, compliance, partnerships with payment & remittance providers.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Head of Underwriting</h4>
              <p className="text-sm text-gray-700">Financial engineer with experience in structured finance, project finance, and asset securitization.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Head of Tech / CTO</h4>
              <p className="text-sm text-gray-700">Cloud & infra specialist — deep knowledge of data-center architectures, GPU clusters, and operator workflows.</p>
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
            <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50">
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
          
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Execution Risk</h4>
              <p className="text-sm text-gray-700">Building & financing data centers and GPU clusters is capital and project execution intensive. Delays can affect returns.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Regulatory Risk</h4>
              <p className="text-sm text-gray-700">Cross-jurisdictional licensing, data protection mandates, and securities law for tokenized products are evolving — compliance costs may rise.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Macroeconomic & FX Risk</h4>
              <p className="text-sm text-gray-700">Local currency depreciation, inflation and sovereign risk in some markets could affect operator cashflows and investor returns.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Market Adoption Risk</h4>
              <p className="text-sm text-gray-700">If hyperscalers delay local deployments or anchor contracts are not secured, cashflows will be slower to stabilize.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Liquidity Risk</h4>
              <p className="text-sm text-gray-700">Tokenized instruments rely on marketplace depth; early secondary liquidity may be limited.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Technology Risk</h4>
              <p className="text-sm text-gray-700">GPU supply cycles and rapid changes in compute architecture could require additional CAPEX upgrades or stranded assets.</p>
            </div>
          </div>
        </section>
        
        {/* Impact */}
        <section id="impact" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Impact & Policy Alignment</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Creating Lasting Impact</h3>
          
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong>Economic inclusion:</strong> Enables diaspora and local retail investors to participate in high-value digital infrastructure returns.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong>Digital sovereignty:</strong> By financing local data hosting, Siscom supports national strategies for data sovereignty and reduced foreign dependency.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong>Sustainable infrastructure:</strong> Focus on modular DC designs and renewable energy siting (Kenya's renewables profile) reduces OPEX and carbon footprint.
              </div>
            </li>
          </ul>

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
                    ? "text-blue-600 font-semibold"
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
