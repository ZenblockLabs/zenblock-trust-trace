import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Truck, Store, User, Activity, Smartphone, Shield, Hospital, ArrowRight, FileCheck, Search, AlertCircle } from "lucide-react";

const Solutions = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const allFeatures = [
    {
      icon: Package,
      title: "Product Registration",
      description: "Secure registration of products with unique digital identities on the blockchain. Each product receives a tamper-proof digital twin that follows it throughout the supply chain.",
      benefits: ["Unique digital identity", "Tamper-proof records", "Real-time registration"]
    },
    {
      icon: Activity,
      title: "Event Logging",
      description: "Complete tracking from source through distribution to final delivery. Every touchpoint, transfer, and status change is recorded immutably on the blockchain.",
      benefits: ["Immutable audit trail", "Timestamp verification", "Chain of custody"]
    },
    {
      icon: Search,
      title: "Real-Time Monitoring",
      description: "Instant visibility into product location, condition, and custody chain. Monitor temperature, humidity, location, and handling conditions in real-time.",
      benefits: ["Live tracking", "Condition monitoring", "Instant alerts"]
    },
    {
      icon: Smartphone,
      title: "QR Code Verification",
      description: "End users can verify product authenticity by scanning QR codes. Instant access to complete product history, origin, and verification status.",
      benefits: ["Consumer confidence", "Instant verification", "Counterfeit prevention"]
    },
    {
      icon: Shield,
      title: "Audit Logs",
      description: "Immutable records for regulatory compliance and audit requirements. Complete transparency with cryptographically secured logs that meet international standards.",
      benefits: ["Regulatory compliance", "Cryptographic security", "Complete transparency"]
    },
    {
      icon: AlertCircle,
      title: "Recall Management",
      description: "Rapid identification and tracking of products for recalls and spoilage. Pinpoint affected batches instantly and trace their exact location across the supply chain.",
      benefits: ["Rapid response", "Precise targeting", "Risk mitigation"]
    }
  ];

  const steps = [
    { step: "1", title: "Source", description: "Product registered on blockchain with unique ID and initial metadata", icon: Package },
    { step: "2", title: "Distribution", description: "Each transfer between parties logged securely with timestamps", icon: Truck },
    { step: "3", title: "Retail", description: "Arrival and storage conditions tracked and verified", icon: Store },
    { step: "4", title: "End-User", description: "Final authenticity verified via QR code scan", icon: User }
  ];

  const useCases = [
    {
      industry: "Pharmaceuticals",
      challenge: "Drug counterfeiting and regulatory compliance across multiple markets",
      solution: "End-to-end traceability with automatic compliance documentation for FDA, CDSCO, and Tatmeen",
      results: ["100% product authentication", "90% faster recalls", "Full regulatory compliance"]
    },
    {
      industry: "Agriculture",
      challenge: "Food safety and origin verification from farm to table",
      solution: "Real-time tracking of produce with temperature monitoring and quality assurance",
      results: ["Complete origin transparency", "Reduced waste by 30%", "Consumer trust increase"]
    },
    {
      industry: "Luxury Goods",
      challenge: "Counterfeit prevention and authenticity verification",
      solution: "Digital certificates of authenticity with immutable ownership records",
      results: ["Zero counterfeits", "Enhanced brand value", "Customer engagement"]
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-pure-white">
      <SEOHead 
        title="Blockchain Supply Chain Solutions | Zenblock Labs"
        description="Complete blockchain traceability platform for regulated supply chains. Product serialization, track & trace, counterfeit detection, and regulatory compliance."
        canonical="https://www.zenblocklabs.com/solutions"
      />
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-deep-forest mb-6">
              Comprehensive Blockchain Solutions
            </h1>
            <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
              End-to-end traceability platform that transforms supply chain integrity across regulated industries
            </p>
          </div>

          {/* Blockchain in Motion Visual */}
          <div className="mb-16 bg-white rounded-2xl p-8 border border-zenblock-border-grey shadow-sm">
            <h2 className="text-2xl font-bold text-zenblock-deep-forest mb-6 text-center">Blockchain in Motion</h2>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg bg-zenblock-professional-green/10 flex items-center justify-center">
                  <Package className="w-8 h-8 text-zenblock-professional-green" />
                </div>
                <span className="text-sm text-zenblock-medium-grey mt-2">Register</span>
              </div>
              <ArrowRight className="w-6 h-6 text-zenblock-professional-green hidden sm:block" />
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg bg-zenblock-professional-green/10 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-zenblock-professional-green" />
                </div>
                <span className="text-sm text-zenblock-medium-grey mt-2">Track</span>
              </div>
              <ArrowRight className="w-6 h-6 text-zenblock-professional-green hidden sm:block" />
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg bg-zenblock-professional-green/10 flex items-center justify-center">
                  <FileCheck className="w-8 h-8 text-zenblock-professional-green" />
                </div>
                <span className="text-sm text-zenblock-medium-grey mt-2">Verify</span>
              </div>
              <ArrowRight className="w-6 h-6 text-zenblock-professional-green hidden sm:block" />
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg bg-zenblock-professional-green/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-zenblock-professional-green" />
                </div>
                <span className="text-sm text-zenblock-medium-grey mt-2">Deliver</span>
              </div>
            </div>
          </div>

          {/* All Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-zenblock-deep-forest mb-8 text-center">Complete Feature Set</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allFeatures.map((feature, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow border-l-4 border-zenblock-professional-green">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <feature.icon className="w-8 h-8 text-zenblock-professional-green" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zenblock-charcoal mb-2">{feature.title}</h3>
                        <p className="text-zenblock-medium-grey mb-4">{feature.description}</p>
                      </div>
                    </div>
                    <div className="border-t border-zenblock-border-grey pt-4">
                      <h4 className="text-sm font-semibold text-zenblock-charcoal mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-zenblock-medium-grey flex items-start">
                            <span className="text-zenblock-professional-green mr-2">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <Card className="bg-white border border-zenblock-border-grey mb-16">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-zenblock-deep-forest mb-8 text-center">How It Works</h2>
              <div className="flex items-start justify-center gap-4 flex-wrap">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-zenblock-mint-whisper flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-zenblock-professional-green" strokeWidth={1.5} />
                      </div>
                      <div className="text-2xl font-bold text-zenblock-professional-green mb-2">{step.step}</div>
                      <h3 className="font-bold text-zenblock-charcoal mb-2">{step.title}</h3>
                      <p className="text-sm text-zenblock-medium-grey max-w-[200px]">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-zenblock-professional-green mx-4 mt-8 hidden lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Industry Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-zenblock-deep-forest mb-8 text-center">Industry Applications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-zenblock-mint-whisper border border-zenblock-border-grey hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-zenblock-charcoal mb-3">{useCase.industry}</h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zenblock-medium-grey mb-2">Challenge:</h4>
                      <p className="text-sm text-zenblock-charcoal">{useCase.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zenblock-medium-grey mb-2">Solution:</h4>
                      <p className="text-sm text-zenblock-charcoal">{useCase.solution}</p>
                    </div>
                    <div className="border-t border-zenblock-border-grey pt-4">
                      <h4 className="text-sm font-semibold text-zenblock-charcoal mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {useCase.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-zenblock-medium-grey flex items-start">
                            <span className="text-zenblock-professional-green mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-zenblock-mint-whisper border-l-4 border-zenblock-professional-green">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-zenblock-charcoal mb-4">Ready to Transform Your Supply Chain?</h2>
                <p className="text-zenblock-medium-grey mb-6 max-w-2xl mx-auto">
                  See how our blockchain solution can enhance trust and compliance in your operations.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-zenblock-professional-green text-white hover:bg-zenblock-fresh-green font-semibold rounded-full px-8"
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
