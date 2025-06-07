
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Handshake, Lock } from "lucide-react";

const WhyBlockchain = () => {
  const benefits = [
    {
      icon: <Shield className="w-10 h-10 text-zenblock-blue" />,
      title: "Tamper-Proof History",
      description: "Once data is recorded on the blockchain, it cannot be altered or deleted, ensuring complete integrity of your supply chain records."
    },
    {
      icon: <Eye className="w-10 h-10 text-zenblock-blue" />,
      title: "Shared Visibility",
      description: "All authorized stakeholders have real-time access to the same information, eliminating information silos and improving coordination."
    },
    {
      icon: <Handshake className="w-10 h-10 text-zenblock-blue" />,
      title: "Trust Without Intermediaries",
      description: "Blockchain creates trust through mathematics and cryptography, not through reliance on central authorities or third parties."
    },
    {
      icon: <Lock className="w-10 h-10 text-zenblock-blue" />,
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Blockchain?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Blockchain technology provides the foundation for unshakeable trust 
            and transparency in complex supply chain networks.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {benefit.icon}
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Traditional vs. Blockchain Approach
          </h3>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zenblock-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-6 py-4 text-left font-semibold">Traditional Systems</th>
                    <th className="px-6 py-4 text-left font-semibold">Blockchain Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.aspect}</td>
                      <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                      <td className="px-6 py-4 text-zenblock-blue font-medium">{row.blockchain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Hyperledger Fabric Callout */}
        <div>
          <Card className="bg-gradient-to-r from-zenblock-blue to-zenblock-navy text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Why Hyperledger Fabric?</h3>
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                Unlike public blockchains, Hyperledger Fabric is designed for enterprise use with 
                permissioned networks, private data channels, and modular architecture that meets 
                the stringent requirements of regulated industries.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-2xl font-bold mb-2">Enterprise Ready</div>
                  <div className="text-blue-200">Built for business requirements</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">Privacy First</div>
                  <div className="text-blue-200">Confidential transactions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">Scalable</div>
                  <div className="text-blue-200">High throughput and performance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyBlockchain;
