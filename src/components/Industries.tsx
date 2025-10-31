
import { Card, CardContent } from "@/components/ui/card";
import { Pill, Leaf, Battery, Gem, CheckCircle2 } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Pill,
      name: "Pharmaceuticals",
      description: "Our primary focus: transforming pharmaceutical supply chains with blockchain traceability.",
      benefits: [
        "Prevent counterfeit drugs from entering the market",
        "Ensure regulatory compliance across borders",
        "Enable rapid recalls and spoilage tracking",
        "Provide end-to-end audit trails"
      ]
    },
    {
      icon: Leaf,
      name: "Agriculture & Food",
      description: "Farm-to-table traceability for food safety and organic certification.",
      benefits: [
        "Track produce from farm to consumer",
        "Verify organic and sustainable practices",
        "Manage cold chain compliance",
        "Enable rapid contamination response"
      ]
    }
  ];

  const futureIndustries = [
    {
      icon: Battery,
      title: "Battery-as-a-Service",
      description: "Tracking battery lifecycle, performance, and recycling"
    },
    {
      icon: Gem,
      title: "Luxury Goods",
      description: "Authenticity verification for high-value products"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-zenblock-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest mb-4">Industries We Serve</h2>
          <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
            Tailored solutions for different sectors of the pharmaceutical industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <industry.icon className="w-10 h-10 text-zenblock-professional-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zenblock-charcoal mb-2">{industry.name}</h3>
                    <p className="text-zenblock-medium-grey mb-4">{industry.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-0.5" />
                      <span className="text-zenblock-medium-grey">{benefit}</span>
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

export default Industries;
