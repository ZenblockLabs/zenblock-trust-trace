
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, FileCheck } from "lucide-react";

const Compliance = () => {
  const regulations = [
    {
      icon: Globe,
      name: "Tatmeen",
      region: "UAE",
      description: "Track and trace requirements for pharmaceutical products in the UAE market."
    },
    {
      icon: Shield,
      name: "DSCSA",
      region: "USA",
      description: "Drug Supply Chain Security Act requirements for US pharmaceutical supply chains."
    },
    {
      icon: FileCheck,
      name: "CDSCO",
      region: "India",
      description: "Central Drugs Standard Control Organization compliance for Indian pharmaceutical market."
    }
  ];

  return (
    <section id="compliance" className="py-20 bg-zenblock-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest mb-4">Regulatory Compliance</h2>
          <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
            Built for global standards — from Tatmeen to DSCSA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {regulations.map((regulation, index) => (
            <Card key={index} className="bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <regulation.icon className="w-10 h-10 text-zenblock-professional-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-zenblock-charcoal mb-2">{regulation.name}</h3>
                <p className="text-sm text-zenblock-professional-green font-semibold mb-3">{regulation.region}</p>
                <p className="text-zenblock-medium-grey text-sm">{regulation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/compliance" 
            className="inline-flex items-center text-zenblock-professional-green hover:text-zenblock-fresh-green font-semibold transition-colors duration-300 group"
          >
            Learn more about our compliance standards
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
