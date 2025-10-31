
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill, Truck, Hospital, Smartphone, Shield, Search, ArrowRight, FileCheck } from "lucide-react";

const Solution = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Pill,
      title: "Drug Registration",
      description: "Secure registration of pharmaceutical products with unique digital identities on the blockchain"
    },
    {
      icon: Truck,
      title: "Event Logging",
      description: "Complete tracking from manufacturing through distribution to final dispensing"
    },
    {
      icon: Search,
      title: "Real-time Traceability",
      description: "Instant visibility into product location, condition, and custody chain"
    },
    {
      icon: Smartphone,
      title: "QR Code Verification",
      description: "End customers can verify product authenticity by scanning QR codes"
    },
    {
      icon: Shield,
      title: "Audit Logs",
      description: "Immutable records for regulatory compliance and audit requirements"
    },
    {
      icon: Hospital,
      title: "Recall Management",
      description: "Rapid identification and tracking of products for recalls and spoilage"
    }
  ];

  const steps = [
    { step: "1", title: "Manufacturing", description: "Product registered on blockchain", icon: Pill },
    { step: "2", title: "Distribution", description: "Each transfer logged securely", icon: Truck },
    { step: "3", title: "Retail/Hospital", description: "Arrival and storage tracked", icon: Hospital },
    { step: "4", title: "Consumer", description: "Authenticity verified via QR", icon: FileCheck }
  ];

  return (
    <section id="solution" className="py-20 bg-zenblock-cool-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest mb-4">Our Solution</h2>
          <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
            Comprehensive blockchain-powered traceability platform for pharmaceutical supply chains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow border-l-4 border-zenblock-professional-green">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-zenblock-professional-green" />
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

        <Card className="bg-white border border-zenblock-border-grey mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-zenblock-deep-forest mb-6 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-zenblock-mint-whisper flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-zenblock-professional-green" />
                  </div>
                  <div className="text-2xl font-bold text-zenblock-professional-green mb-2">{step.step}</div>
                  <h4 className="font-bold text-zenblock-charcoal mb-2">{step.title}</h4>
                  <p className="text-sm text-zenblock-medium-grey">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Card className="bg-zenblock-mint-whisper border-l-4 border-zenblock-professional-green">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-zenblock-charcoal mb-4">Ready to Transform Your Supply Chain?</h3>
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
    </section>
  );
};

export default Solution;
