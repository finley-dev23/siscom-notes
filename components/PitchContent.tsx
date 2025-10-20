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
    { id: "competitive-advantage", label: "Competitive Advantage" },
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
        
        {/* Problem */}
        <section id="problem" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Problem</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Africa's Digital Growth Constrained</h3>
          <p className="text-2xl text-gray-700 mb-6">Infrastructure underbuilt despite massive opportunity</p>
          
          <ul className="space-y-4 text-lg text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
              <strong>Global Cloud Dependence:</strong> Most data & workloads hosted offshore → latency, compliance risk, capital flight
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
              <strong>Engineering & Deployment Complexity:</strong> Hyperscaler platforms too complex for SMEs
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
              <strong>Rigid Pricing Models:</strong> AWS/Azure-style pricing misaligned with SME realities, currency volatility, seasonal workloads
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
              <strong>Data Flight = Lost Intelligence:</strong> When data leaves Africa, value for AI, analytics, and research is lost
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
              <strong>Infrastructure Inequality:</strong> Africa consumes digital infrastructure but owns little; profits & innovation externalized
              </div>
            </li>
          </ul>
          
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Context: Cost Barriers for SMEs</h4>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                <strong>Billing Currency Mismatch:</strong> OPEX billed in USD, revenue in KES; exchange rate volatility inflates bills
                  <div className="mt-2 text-base text-gray-600 italic">
                    Example: $42 cloud bill → KES 5,418; 20% KES depreciation → KES 6,510
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                <strong>Hidden Hyperscaler Add-Ons:</strong> Network egress, load balancers, managed services inflate OPEX
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                <strong>Rigid Commitment Models:</strong> Yearly contracts don't match seasonal or irregular workloads → overpayment
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Solution */}
        <section id="solution" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-semibold text-gray-500 mb-6">Solution</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Siscom Cloud & Infrastructure Stack</h3>
          
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
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Cloud & Compute Infrastructure</h5>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• HPC nodes, AI GPU clusters (H100/A100), hybrid storage clusters</li>
                  <li>• Scalable modular DCs, edge zones for regional connectivity</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Locally-Owned, Intelligent Cloud</h5>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• Pan-African cloud designed for African workloads</li>
                  <li>• Data residency compliant & secure</li>
                  <li>• Affordable pricing for SMEs & enterprises</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Scalable Crowdfunding & Lean Model</h5>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• Distributed compute nodes funded by retail, diaspora, and institutional channels</li>
                  <li>• Rapid capacity expansion with lean operations, enabling market leadership</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Strategic Positioning</h5>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• <strong>Kenya & Greater East Africa:</strong> Meet growing SME & enterprise cloud demand while ensuring data sovereignty</li>
                  <li>• <strong>Scalable, Lean Model:</strong> Crowdfunding nodes enable rapid expansion and cost efficiency</li>
                  <li>• <strong>Affordable Access:</strong> SMEs gain cloud & compute without prohibitive CAPEX</li>
                  <li>• <strong>Market Leadership:</strong> Early mover advantage in HPC & regional cloud infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-green-700 mb-4">Phased Expansion</h4>
            <div className="grid md:grid-cols-3 gap-4 text-base">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phase 1 (2025):</p>
                <p className="text-base text-gray-700">HPC nodes & AI clusters</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phase 2 (2026–27):</p>
                <p className="text-base text-gray-700">Modular DC campuses, colocation, edge zones</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phase 3 (2028+):</p>
                <p className="text-base text-gray-700">Hyperscale campuses & regional POP</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-indigo-700 mb-4">Go-To-Market — Cloud, Data & AI Focus</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">SME & Enterprise Channels</h5>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• Affordable cloud subscriptions, hybrid storage, AI compute tailored to local business needs</li>
                  <li>• Use-case driven adoption: agriculture, healthcare, fintech, creative industries, e-government</li>
                  <li>• SaaS partnerships accelerate enterprise digital transformation</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Developer & Innovation Community</h5>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• Incentivize developers & startups to build on Siscom cloud</li>
                  <li>• Hackathons, grants, incubation programs for AI, analytics, and cloud-native solutions</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Strategic Infrastructure Partnerships</h5>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• Modular DC builders, IX providers, GPU suppliers for rapid scaling</li>
                  <li>• Co-located infrastructure ensures low-latency, compliant, cost-effective services</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Regional Use-Case Expansion</h5>
                <ul className="text-base text-gray-700 space-y-2 ml-4">
                  <li>• <strong>AgTech:</strong> AI-driven precision agriculture & supply chain solutions</li>
                  <li>• <strong>HealthTech:</strong> EMR, telemedicine, AI diagnostics</li>
                  <li>• <strong>FinTech:</strong> Payments, core banking, microfinance analytics</li>
                  <li>• <strong>Creative / Media:</strong> Rendering, video, digital content pipelines</li>
                  <li>• <strong>E-Government:</strong> Citizen data, analytics, service hosting</li>
                </ul>
              </div>
            </div>
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
          
          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">SME/MSME Digitization</h4>
              <ul className="text-base text-gray-700 space-y-2">
                <li>• MSMEs = ~98% of Kenyan businesses, 30%+ GDP contribution</li>
                <li>• Digitization spans payments, SaaS, cloud hosting, and sector-specific platforms (agriculture, health, retail)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Cloud & Digital Transformation</h4>
              <ul className="text-base text-gray-700 space-y-2">
                <li>• Kenya cloud market: ~$959M (2024), growing rapidly</li>
                <li>• Africa digital transformation market: ~$30B (2025), projected to double by 2030</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">AI & Advanced Compute</h4>
              <p className="text-base text-gray-700">Multi-billion USD by mid-2020s; demand for local GPU/AI compute for language, ag analytics, health AI, fintech risk models</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Government & Public Sector Modernization</h4>
              <p className="text-base text-gray-700">Digitization & data residency laws increase demand for compliant hosting and cloud platforms</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-indigo-700 mb-4">Why This Matters for Siscom:</h4>
            <ul className="text-base text-gray-700 space-y-3">
              <li>• <strong>Large addressable market:</strong> SMEs + public sector + AI workloads = multiple revenue streams</li>
              <li>• <strong>Timing validated by hyperscaler investments and government programs</strong></li>
              <li>• <strong>Moat:</strong> Local billing, sovereign hosting, SME-ready products, and crowdfunded ownership drive adoption & retention</li>
            </ul>
          </div>
          
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/10.png"
              alt="Market Opportunity Visualization"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/11.png"
              alt="Market Insights"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/12.png"
              alt="Market Analysis"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>
        
        {/* Business Model */}
        <section id="business-model" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6">Business Model & Unit Economics</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Multiple Revenue Streams</h3>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Revenue Streams</h4>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Investment fee:</strong> Transaction fees charged on successful investments (2–4% of capital raised)</li>
              <li><strong>Asset management fee:</strong> Annual management fees on Assets Under Management (1–2% per annum)</li>
              <li><strong>SAAS products:</strong> Subscription-based software solutions for infrastructure operators and investors</li>
              <li><strong>IAAS products & services:</strong> Infrastructure-as-a-Service offerings including compute, storage, and networking solutions</li>
            </ul>
          </div>

          <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-50 rounded-r-xl">
            <h4 className="font-semibold text-gray-900 mb-3">Sample Unit Economics (5 MW modular campus)</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">CAPEX</p>
                <p className="text-xl font-bold text-gray-900">KSH 2.5B</p>
              </div>
              <div>
                <p className="text-gray-600">Annual Revenue</p>
                <p className="text-xl font-bold text-gray-900">KSH 600M/year</p>
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
          <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">Competitive Advantage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-700 mb-3">Built for Kenya's Scale & Use Cases</h3>
              <p className="text-sm text-gray-700">SMEs, startups, developers, counties; solving local challenges in ag, health, fintech, e-government</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-xl shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-700 mb-3">Affordable, Locally Funded Infrastructure</h3>
              <p className="text-sm text-gray-700">Crowdfunded nodes, lean OPEX, KES-based pricing; eliminates USD risk</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl shadow-md p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Edge Intelligence & AI Readiness</h3>
              <p className="text-sm text-gray-700">Local GPU infrastructure, supporting locally hosted LLMs</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-xl shadow-md p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-700 mb-3">Data Sovereignty & Neutrality</h3>
              <p className="text-sm text-gray-700">Hosted in Kenyan Tier 3 DCs, carrier & DC neutral</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl shadow-md p-6 border-l-4 border-pink-500 md:col-span-2">
              <h3 className="text-lg font-bold text-pink-700 mb-3">Community-Owned, Developer-First Cloud</h3>
              <p className="text-sm text-gray-700">Backed by local investors, 500+ developers, academia, cooperatives</p>
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
