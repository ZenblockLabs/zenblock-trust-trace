import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Handshake, Lock, CheckCircle2, Database, Network, Key, Zap } from "lucide-react";
import hyperledgerArch from "@/assets/hyperledger-architecture.jpg";

const Technology = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Tamper-Proof History",
      description: "Once data is recorded on the blockchain, it cannot be altered or deleted, ensuring complete integrity of your supply chain records. Every transaction is cryptographically linked to previous ones."
    },
    {
      icon: Eye,
      title: "Shared Visibility",
      description: "All authorized stakeholders have real-time access to the same information, eliminating information silos and improving coordination. Everyone works from a single source of truth."
    },
    {
      icon: Handshake,
      title: "Trust Without Intermediaries",
      description: "Blockchain creates trust through mathematics and cryptography, not through reliance on central authorities or third parties. Consensus mechanisms ensure agreement among participants."
    },
    {
      icon: Lock,
      title: "Permissioned Access",
      description: "Unlike public blockchains, Hyperledger Fabric provides enterprise-grade privacy and access controls for sensitive business data. Only authorized parties can view specific information."
    }
  ];

  const comparison = [
    {
      aspect: "Data Integrity",
      traditional: "Can be modified or deleted",
      blockchain: "Immutable and verifiable"
    },
    {
      aspect: "Trust Model",
      traditional: "Relies on central authorities",
      blockchain: "Cryptographic consensus"
    },
    {
      aspect: "Transparency",
      traditional: "Limited visibility",
      blockchain: "Shared ledger access"
    },
    {
      aspect: "Audit Trail",
      traditional: "Fragmented records",
      blockchain: "Complete provenance"
    }
  ];

  const fabricFeatures = [
    {
      icon: Key,
      title: "Permissioned Network",
      description: "Only authorized parties can participate, ensuring security and privacy for enterprise operations"
    },
    {
      icon: Database,
      title: "Private Data Collections",
      description: "Sensitive data can be shared only with specific organizations while maintaining blockchain verification"
    },
    {
      icon: Zap,
      title: "High Throughput",
      description: "Enterprise-scale transaction processing suitable for complex supply chain operations"
    },
    {
      icon: Network,
      title: "Modular Architecture",
      description: "Customizable components that can be adapted to specific business requirements and workflows"
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-pure-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-deep-forest mb-6">
              Our Technology
            </h1>
            <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
              Understanding the blockchain technology that powers trust and transparency in supply chains
            </p>
          </div>

          <div className="mb-10">
            <img src={hyperledgerArch} alt="Permissioned blockchain architecture diagram" className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl border border-zenblock-border-grey" loading="lazy" />
          </div>

          {/* Why Blockchain */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-zenblock-deep-forest mb-8 text-center">Why Blockchain?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <benefit.icon className="w-8 h-8 text-zenblock-professional-green" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zenblock-charcoal mb-2">{benefit.title}</h3>
                        <p className="text-zenblock-medium-grey">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <Card className="mb-16 bg-white border border-zenblock-border-grey">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-zenblock-deep-forest mb-6 text-center">Traditional vs. Blockchain</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-zenblock-border-grey">
                      <th className="text-left py-4 px-4 text-zenblock-charcoal">Aspect</th>
                      <th className="text-left py-4 px-4 text-zenblock-charcoal">Traditional Systems</th>
                      <th className="text-left py-4 px-4 text-zenblock-charcoal">Blockchain Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b border-zenblock-border-grey">
                        <td className="py-4 px-4 font-semibold text-zenblock-charcoal">{row.aspect}</td>
                        <td className="py-4 px-4 text-zenblock-medium-grey">{row.traditional}</td>
                        <td className="py-4 px-4 text-zenblock-professional-green font-medium">{row.blockchain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Hyperledger Fabric */}
          <div className="mb-16">
            <Card className="bg-zenblock-mint-whisper border-l-4 border-zenblock-professional-green mb-8">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-12 h-12 text-zenblock-professional-green" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-zenblock-charcoal mb-4">Why Hyperledger Fabric?</h2>
                    <p className="text-lg text-zenblock-medium-grey mb-6">
                      We use Hyperledger Fabric, an enterprise-grade blockchain framework, because it's specifically designed for regulated industries requiring privacy, scalability, and permissioned access.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              {fabricFeatures.map((feature, index) => (
                <Card key={index} className="bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <feature.icon className="w-8 h-8 text-zenblock-professional-green" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zenblock-charcoal mb-2">{feature.title}</h3>
                        <p className="text-zenblock-medium-grey">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <Card className="bg-white border border-zenblock-border-grey">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-zenblock-deep-forest mb-6 text-center">Key Technical Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-zenblock-charcoal mb-4">Core Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-zenblock-medium-grey">Pluggable consensus mechanisms for optimal performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-zenblock-medium-grey">Smart contracts (chaincode) for automated business logic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-zenblock-medium-grey">Channel architecture for confidential transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-zenblock-medium-grey">Identity management through certificate authorities</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zenblock-charcoal mb-4">Enterprise Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-zenblock-medium-grey">No cryptocurrency requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-zenblock-medium-grey">Selective data sharing with business partners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-zenblock-medium-grey">Compliance with regulatory requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-zenblock-medium-grey">Proven at enterprise scale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Technology;
