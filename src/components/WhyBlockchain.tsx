
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Handshake, Lock, CheckCircle2 } from "lucide-react";

const WhyBlockchain = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Tamper-Proof History",
      description: "Once data is recorded on the blockchain, it cannot be altered or deleted, ensuring complete integrity of your supply chain records."
    },
    {
      icon: Eye,
      title: "Shared Visibility",
      description: "All authorized stakeholders have real-time access to the same information, eliminating information silos and improving coordination."
    },
    {
      icon: Handshake,
      title: "Trust Without Intermediaries",
      description: "Blockchain creates trust through mathematics and cryptography, not through reliance on central authorities or third parties."
    },
    {
      icon: Lock,
      title: "Permissioned Access",
      description: "Unlike public blockchains, Hyperledger Fabric provides enterprise-grade privacy and access controls for sensitive business data."
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

  return (
    <section id="why-blockchain" className="py-20 bg-zenblock-cool-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest mb-4">Why Blockchain?</h2>
          <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
            Understanding the technology that powers trust in supply chains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-zenblock-professional-green" />
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

        <Card className="mb-16 bg-white border border-zenblock-border-grey">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-zenblock-deep-forest mb-6 text-center">Traditional vs. Blockchain</h3>
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
                      <td className="py-4 px-4 text-zenblock-medium-grey">{row.blockchain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zenblock-mint-whisper border-l-4 border-zenblock-professional-green">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Shield className="w-10 h-10 text-zenblock-professional-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zenblock-charcoal mb-4">Why Hyperledger Fabric?</h3>
                <p className="text-zenblock-medium-grey mb-4">
                  We use Hyperledger Fabric, an enterprise-grade blockchain framework, because it offers:
                </p>
                <ul className="space-y-2 text-zenblock-medium-grey">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" />
                    <span>Permissioned network ensuring only authorized parties can participate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" />
                    <span>Privacy and confidentiality through channels and private data collections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" />
                    <span>High transaction throughput suitable for enterprise needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" />
                    <span>Modular architecture allowing customization for specific requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyBlockchain;
