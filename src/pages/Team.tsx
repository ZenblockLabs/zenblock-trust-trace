
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Executive Officer",
      background: "Former VP of Digital Innovation at leading pharmaceutical company with 15+ years experience.",
      expertise: "Pharmaceutical Operations, Digital Transformation"
    },
    {
      name: "Arjun Patel",
      role: "Chief Technology Officer", 
      background: "Blockchain architect with expertise in enterprise solutions and regulatory compliance systems.",
      expertise: "Blockchain Development, System Architecture"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Compliance Officer",
      background: "Former FDA regulatory affairs specialist with deep knowledge of global pharmaceutical regulations.",
      expertise: "Regulatory Affairs, Compliance Strategy"
    },
    {
      name: "Ananya Singh",
      role: "VP of Product",
      background: "Product management leader with experience building healthcare technology platforms.",
      expertise: "Product Strategy, Healthcare Technology"
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Our Team
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Meet the experts behind Zenblock Labs' innovative blockchain solutions 
              for pharmaceutical supply chain transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-zenblock-white card-hover border border-zenblock-soft-violet">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-zenblock-primary-text mb-2">{member.name}</h3>
                  <h4 className="text-lg font-semibold text-zenblock-electric-blue mb-4">{member.role}</h4>
                  <p className="text-zenblock-secondary-text mb-4">{member.background}</p>
                  <div className="border-t border-zenblock-soft-violet pt-4">
                    <span className="text-sm font-medium text-zenblock-pharma-green">
                      Expertise: {member.expertise}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-zenblock-soft-violet border border-zenblock-soft-violet">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-zenblock-primary-text mb-4">Join Our Team</h2>
                <p className="text-lg text-zenblock-secondary-text mb-6">
                  We're always looking for talented individuals who share our passion for 
                  revolutionizing pharmaceutical supply chains through blockchain technology.
                </p>
                <button className="bg-zenblock-electric-blue text-zenblock-white px-8 py-3 rounded-lg font-semibold hover:bg-zenblock-electric-blue/90 transition-colors">
                  View Open Positions
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
