
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "Building unshakeable confidence in every transaction"
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Complete visibility across the entire supply chain"
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Honest, ethical practices in everything we do"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technology for tomorrow's challenges"
    }
  ];

  const milestones = [
    { year: "2024", title: "MVP Completed", description: "Successfully developed and tested our blockchain traceability platform" },
    { year: "2024", title: "Pilot Outreach", description: "Engaging with pharmaceutical companies across India and UAE" },
    { year: "2025", title: "Regulatory Partnerships", description: "Building relationships with Tatmeen, FDA, and CDSCO" }
  ];

  const teamMembers = [
    {
      name: "Swetha Panda",
      role: "Founder, Zenblock Labs",
      background: "MBA | 9+ Years of Industry Experience. Former Software Developer at IBM and Product Manager at RentenPe. Swetha combines deep technical know-how with strategic business insight.",
      image: "/lovable-uploads/05fb628d-0ac2-4497-95e0-899da9345a41.png"
    },
    {
      name: "Sapan Kumar Panda",
      role: "Financial Consultant, Zenblock Labs", 
      background: "B.Com | 30 Years in Real Estate & Financial Advisory. A seasoned financial consultant bringing deep insight into financial structuring and regulatory navigation.",
      image: "/lovable-uploads/744df5bf-e5ef-42ca-b1d4-cd35bc74a88e.png"
    }
  ];

  return (
    <section id="about" className="py-20 bg-zenblock-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest mb-4">About Zenblock Labs</h2>
          <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
            Building the future of pharmaceutical supply chain integrity through blockchain technology
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-zenblock-deep-forest mb-8 text-center">The Problem We Solve</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-zenblock-professional-green bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-zenblock-charcoal mb-3">Counterfeit Drugs</h4>
                <p className="text-zenblock-medium-grey">
                  Drug counterfeiting costs the pharmaceutical industry billions annually and puts patient safety at risk.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-zenblock-professional-green bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-zenblock-charcoal mb-3">Supply Chain Opacity</h4>
                <p className="text-zenblock-medium-grey">
                  Lack of visibility makes it difficult to track drug provenance and ensure regulatory compliance.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-zenblock-professional-green bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-zenblock-charcoal mb-3">Regulatory Complexity</h4>
                <p className="text-zenblock-medium-grey">
                  Different countries have varying regulations, making multi-market compliance challenging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-zenblock-deep-forest mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <value.icon className="w-8 h-8 text-zenblock-professional-green" />
                  </div>
                  <h4 className="text-lg font-bold text-zenblock-charcoal mb-2">{value.title}</h4>
                  <p className="text-sm text-zenblock-medium-grey">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-zenblock-deep-forest mb-8 text-center">Our Journey</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-zenblock-professional-green">{milestone.year}</span>
                </div>
                <div className="flex-grow border-l-2 border-zenblock-border-grey pl-6 pb-6">
                  <h4 className="text-xl font-bold text-zenblock-charcoal mb-2">{milestone.title}</h4>
                  <p className="text-zenblock-medium-grey">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-zenblock-deep-forest mb-8 text-center">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-zenblock-charcoal mb-1">{member.name}</h4>
                      <p className="text-zenblock-professional-green font-semibold mb-2">{member.role}</p>
                      <p className="text-sm text-zenblock-medium-grey">{member.background}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
