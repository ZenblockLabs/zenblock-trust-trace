import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Globe, Shield, CheckCircle2, Building, Scale, FileText } from "lucide-react";

const CompliancePage = () => {
  const regulations = [
    {
      icon: Globe,
      name: "Tatmeen (UAE)",
      region: "United Arab Emirates",
      fullName: "UAE Pharmaceutical Track and Trace System",
      description: "Tatmeen is the UAE's national system for pharmaceutical product traceability, ensuring that all medications in the supply chain are tracked from manufacturer to patient.",
      requirements: [
        "Product registration and unique serialization codes",
        "Real-time event tracking across the entire supply chain",
        "Continuous monitoring and automated reporting to authorities",
        "Integration with UAE health authority systems",
        "Verification capabilities at point of dispensing"
      ],
      benefits: [
        "Prevents counterfeit drugs from entering the market",
        "Enables rapid response to product recalls",
        "Ensures patient safety through complete traceability",
        "Facilitates regulatory audits and compliance checks"
      ]
    },
    {
      icon: Shield,
      name: "DSCSA (USA)",
      region: "United States",
      fullName: "Drug Supply Chain Security Act",
      description: "DSCSA establishes national requirements for tracing prescription drugs in the US supply chain, creating an electronic, interoperable system to identify and trace certain prescription drugs.",
      requirements: [
        "Product serialization with unique identifiers at package level",
        "Transaction Information, History, and Statement (TI, TH, TS) documentation",
        "Verification capabilities to confirm product legitimacy",
        "Investigation and notification procedures for suspect or illegitimate products",
        "Interoperable electronic data exchange systems"
      ],
      benefits: [
        "Enhanced ability to detect and remove counterfeit drugs",
        "More efficient recall management and execution",
        "Improved supply chain visibility and security",
        "Protection of patient safety through verification"
      ]
    },
    {
      icon: FileCheck,
      name: "CDSCO (India)",
      region: "India",
      fullName: "Central Drugs Standard Control Organization",
      description: "CDSCO is India's national regulatory body for pharmaceuticals and medical devices, establishing standards for drug manufacturing, clinical trials, and supply chain integrity.",
      requirements: [
        "Manufacturing process tracking and documentation",
        "Complete distribution chain logs and records",
        "Quality assurance and quality control documentation",
        "Batch tracking and lot management",
        "Compliance with Good Manufacturing Practices (GMP)"
      ],
      benefits: [
        "Ensures drug quality and safety standards",
        "Enables rapid identification of quality issues",
        "Facilitates regulatory inspections and audits",
        "Supports market authorization and licensing"
      ]
    }
  ];

  const complianceFeatures = [
    {
      icon: Building,
      title: "Multi-Jurisdictional Support",
      description: "Our platform is designed to simultaneously comply with regulations across multiple markets, enabling seamless cross-border operations."
    },
    {
      icon: Scale,
      title: "Automated Compliance",
      description: "Smart contracts and automated workflows ensure that every transaction meets regulatory requirements without manual intervention."
    },
    {
      icon: FileText,
      title: "Audit-Ready Documentation",
      description: "Complete, immutable records that are instantly accessible for regulatory audits and compliance verification."
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-pure-white">
      <SEOHead 
        title="Global Compliance & Regulatory Standards | Zenblock Labs"
        description="Blockchain compliance solutions for FDA, CDSCO, Tatmeen, GS1, DSCSA, EU FMD, and more. Meet global pharmaceutical and supply chain regulations."
        canonical="https://www.zenblocklabs.com/compliance"
      />
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-deep-forest mb-6">
              Regulatory Compliance
            </h1>
            <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
              Meeting and exceeding global pharmaceutical traceability standards across multiple jurisdictions
            </p>
          </div>

          {/* Compliance Overview */}
          <div className="mb-16">
            <Card className="bg-zenblock-mint-whisper border-l-4 border-zenblock-professional-green">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-charcoal mb-4">Built for Global Standards</h2>
                <p className="text-lg text-zenblock-medium-grey">
                  Our blockchain traceability platform is engineered to meet the stringent requirements of pharmaceutical regulations worldwide. From Tatmeen to DSCSA, we ensure your supply chain operations remain compliant across all markets you serve.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Regulations */}
          <div className="mb-16 space-y-12">
            {regulations.map((regulation, index) => (
              <Card key={index} className="bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <regulation.icon className="w-12 h-12 text-zenblock-professional-green" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-zenblock-charcoal mb-2">{regulation.name}</h2>
                      <p className="text-lg text-zenblock-professional-green font-semibold mb-2">{regulation.region}</p>
                      <p className="text-sm text-zenblock-medium-grey italic mb-4">{regulation.fullName}</p>
                    </div>
                  </div>
                  
                  <p className="text-zenblock-medium-grey mb-6 text-lg">{regulation.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-zenblock-charcoal mb-4">Key Requirements</h3>
                      <ul className="space-y-3">
                        {regulation.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                            <span className="text-zenblock-medium-grey">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-zenblock-charcoal mb-4">Benefits</h3>
                      <ul className="space-y-3">
                        {regulation.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                            <span className="text-zenblock-medium-grey">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Compliance Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-zenblock-deep-forest mb-8 text-center">How We Ensure Compliance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {complianceFeatures.map((feature, index) => (
                <Card key={index} className="bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <feature.icon className="w-10 h-10 text-zenblock-professional-green" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-zenblock-charcoal mb-3">{feature.title}</h3>
                    <p className="text-zenblock-medium-grey">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-zenblock-mint-whisper border-l-4 border-zenblock-professional-green">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-zenblock-charcoal mb-4">Need Compliance Guidance?</h2>
              <p className="text-zenblock-medium-grey mb-6 max-w-2xl mx-auto">
                Our team can help you navigate the complex regulatory landscape and ensure your supply chain meets all applicable standards.
              </p>
              <a 
                href="/#contact"
                className="inline-block bg-zenblock-professional-green text-white px-8 py-3 rounded-full font-semibold hover:bg-zenblock-fresh-green transition-colors"
              >
                Contact Our Compliance Team
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompliancePage;
