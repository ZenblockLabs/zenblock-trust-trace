
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Founder & CEO",
      role: "Blockchain Expert",
      description: "Leading the vision for pharmaceutical supply chain transformation through blockchain technology."
    },
    {
      name: "CTO",
      role: "Technical Architect", 
      description: "Designing and implementing scalable blockchain solutions for regulated industries."
    },
    {
      name: "Head of Compliance",
      role: "Regulatory Expert",
      description: "Ensuring all solutions meet international pharmaceutical compliance standards."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Our Team
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Meet the experts behind Zenblock Labs, dedicated to revolutionizing pharmaceutical supply chains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover bg-zenblock-white">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-zenblock-soft-violet rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-zenblock-electric-blue">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zenblock-primary-text mb-2">{member.name}</h3>
                  <p className="text-zenblock-electric-blue font-medium mb-3">{member.role}</p>
                  <p className="text-zenblock-secondary-text">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
