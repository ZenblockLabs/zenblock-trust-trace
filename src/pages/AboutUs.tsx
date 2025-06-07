
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Trust",
      description: "Building unshakeable confidence in every transaction"
    },
    {
      icon: <Target className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Transparency", 
      description: "Complete visibility across the entire supply chain"
    },
    {
      icon: <Users className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Integrity",
      description: "Honest, ethical practices in everything we do"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-zenblock-electric-blue" />,
      title: "Innovation",
      description: "Cutting-edge technology for tomorrow's challenges"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              About Zenblock Labs
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Our vision is to ensure and assure that every business operates on trust. 
              We're solving the critical challenges of counterfeits, compliance gaps, 
              and supply chain fragmentation in regulated industries.
            </p>
          </div>

          <div className="mb-16">
            <Card className="bg-zenblock-white shadow-lg border-l-4 border-l-zenblock-electric-blue">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-zenblock-primary-text mb-6">Our Mission</h2>
                <p className="text-lg text-zenblock-secondary-text mb-6">
                  To revolutionize pharmaceutical supply chains through blockchain technology, 
                  ensuring complete traceability, regulatory compliance, and trust between all stakeholders.
                </p>
                <h3 className="text-2xl font-bold text-zenblock-primary-text mb-4">The Problem We Solve</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-zenblock-primary-text mb-2">Counterfeiting</h4>
                    <p className="text-zenblock-secondary-text">$200B+ annual losses from fake pharmaceuticals globally</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zenblock-primary-text mb-2">Compliance Gaps</h4>
                    <p className="text-zenblock-secondary-text">Complex regulatory requirements across multiple jurisdictions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zenblock-primary-text mb-2">Fragmentation</h4>
                    <p className="text-zenblock-secondary-text">Lack of visibility and coordination across supply chain partners</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center text-zenblock-primary-text mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center card-hover bg-zenblock-white">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-zenblock-primary-text mb-2">{value.title}</h3>
                    <p className="text-zenblock-secondary-text">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
