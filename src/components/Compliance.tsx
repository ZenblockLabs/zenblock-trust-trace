
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Globe, Shield, CheckCircle2 } from "lucide-react";

const Compliance = () => {
  const regulations = [
    {
      icon: Globe,
      name: "Tatmeen (UAE)",
      region: "United Arab Emirates",
      description: "Track and trace requirements for pharmaceutical products in the UAE market.",
      requirements: [
        "Product registration and serialization",
        "Event tracking across supply chain",
        "Real-time monitoring and reporting"
      ]
    },
    {
      icon: FileCheck,
      name: "CDSCO (India)",
      region: "India",
      description: "Central Drugs Standard Control Organization compliance for Indian pharmaceutical market.",
      requirements: [
        "Manufacturing tracking",
        "Distribution logs",
        "Quality assurance documentation"
      ]
    },
    {
      icon: Shield,
      name: "DSCSA (USA)",
      region: "United States",
      description: "Drug Supply Chain Security Act requirements for US pharmaceutical supply chains.",
      requirements: [
        "Product serialization",
        "Transaction verification",
        "Suspect product investigation"
      ]
    }
  ];

  return (
    <section id="compliance" className="py-20 bg-zenblock-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest mb-4">Regulatory Compliance</h2>
          <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
            Meeting and exceeding global pharmaceutical traceability standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {regulations.map((regulation, index) => (
            <Card key={index} className="bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <regulation.icon className="w-8 h-8 text-zenblock-professional-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zenblock-charcoal mb-2">{regulation.name}</h3>
                    <p className="text-sm text-zenblock-professional-green font-semibold mb-2">{regulation.region}</p>
                  </div>
                </div>
                <p className="text-zenblock-medium-grey mb-4">{regulation.description}</p>
                <div className="space-y-2">
                  {regulation.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-zenblock-professional-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zenblock-medium-grey">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
