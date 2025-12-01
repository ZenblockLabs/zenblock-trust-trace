import { Card, CardContent } from "@/components/ui/card";
import { Pill, Leaf, Gem, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import pharmaManufacturing from "@/assets/pharma-manufacturing.jpg";
import agricultureTech from "@/assets/agriculture-tech.jpg";
import luxuryGoods from "@/assets/luxury-goods.jpg";

const Industries = () => {
  const industryImages: Record<string, string> = {
    pharma: pharmaManufacturing,
    agri: agricultureTech,
    luxury: luxuryGoods,
  };

  const industries = [
    {
      id: "pharma",
      icon: Pill,
      name: "Pharma",
      tagline: "Trace every vial.",
      description: "Transforming pharmaceutical supply chains with blockchain traceability.",
      benefits: [
        "Prevent counterfeit drugs from entering the market",
        "Ensure regulatory compliance across borders",
        "Enable rapid recalls and spoilage tracking",
        "Provide end-to-end audit trails"
      ]
    },
    {
      id: "agri",
      icon: Leaf,
      name: "Agri",
      tagline: "Track every crop.",
      description: "Farm-to-table traceability for food safety and organic certification.",
      benefits: [
        "Track produce from farm to consumer",
        "Verify organic and sustainable practices",
        "Manage cold chain compliance",
        "Enable rapid contamination response"
      ]
    },
    {
      id: "luxury",
      icon: Gem,
      name: "Luxury",
      tagline: "Verify every creation.",
      description: "Authenticity verification for high-value products and collectibles.",
      benefits: [
        "Prevent counterfeiting of premium goods",
        "Provide digital certificates of authenticity",
        "Track provenance and ownership history",
        "Build consumer trust and brand value"
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-zenblock-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest mb-4">Industries We Serve</h2>
          <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
            Blockchain traceability across regulated supply chains
          </p>
        </div>

        <Tabs defaultValue="pharma" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-zenblock-mint-whisper">
            {industries.map((industry) => (
              <TabsTrigger 
                key={industry.id} 
                value={industry.id}
                className="data-[state=active]:bg-white data-[state=active]:text-zenblock-professional-green"
              >
                <industry.icon className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">{industry.name}: </span>
                <span className="font-semibold">{industry.tagline}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {industries.map((industry) => (
            <TabsContent key={industry.id} value={industry.id}>
              <Card className="bg-white border border-zenblock-border-grey">
                <CardContent className="p-8">
                  <img src={industryImages[industry.id]} alt={`${industry.name} blockchain supply chain traceability and anti-counterfeit verification solution`} className="w-full h-56 md:h-72 object-cover rounded-xl border border-zenblock-border-grey mb-6" loading="lazy" />
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <industry.icon className="w-12 h-12 text-zenblock-professional-green" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-zenblock-charcoal mb-2">
                        {industry.name}: <span className="text-zenblock-professional-green">{industry.tagline}</span>
                      </h3>
                      <p className="text-lg text-zenblock-medium-grey">{industry.description}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-zenblock-professional-green flex-shrink-0 mt-1" strokeWidth={1.5} />
                        <span className="text-zenblock-medium-grey">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Industries;
