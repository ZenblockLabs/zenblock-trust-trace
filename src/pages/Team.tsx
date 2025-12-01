
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Swetha Panda",
      role: "Founder, Zenblock Labs",
      background: "MBA | 11+ Years of Industry Experience. Former Software Developer at IBM and Product Manager at RentenPe. Swetha combines deep technical know-how with strategic business insight.",
      image: "/lovable-uploads/05fb628d-0ac2-4497-95e0-899da9345a41.png"
    },
    {
      name: "Sapan Kumar Panda",
      role: "Financial Consultant, Zenblock Labs", 
      background: "B.Com | 30 Years in Real Estate & Financial Advisory. A seasoned financial consultant bringing deep insight into financial structuring and regulatory navigation.",
      image: "/lovable-uploads/744df5bf-e5ef-42ca-b1d4-cd35bc74a88e.png"
    },
    {
      name: "Alex Morgan",
      role: "Lead UI/UX Designer, Zenblock Labs",
      background: "15+ Years Crafting Exceptional User Experiences. Award-winning designer with expertise in user-centered design, design systems, and digital product strategy. Previously led design teams at Fortune 500 companies.",
      image: "/lovable-uploads/designer-headshot.png"
    }
  ];

  return (
    <div className="min-h-screen bg-zenblock-pure-white">
      <SEOHead 
        title="Leadership Team | Zenblock Labs"
        description="Meet the leadership team at Zenblock Labs. Experts in blockchain technology, supply chain management, and regulatory compliance."
        canonical="https://www.zenblocklabs.com/team"
      />
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-deep-forest mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-zenblock-medium-grey max-w-3xl mx-auto">
              The experts behind Zenblock Labs' innovative blockchain solutions 
              for supply chain transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white border border-zenblock-border-grey hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-zenblock-professional-green"
                    />
                    <h3 className="text-2xl font-bold text-zenblock-charcoal mb-2">{member.name}</h3>
                    <h4 className="text-lg font-semibold text-zenblock-professional-green mb-4">{member.role}</h4>
                  </div>
                  <p className="text-zenblock-medium-grey text-center">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-zenblock-mint-whisper border border-zenblock-border-grey">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-zenblock-deep-forest mb-4">Join Our Team</h2>
                <p className="text-lg text-zenblock-medium-grey mb-6">
                  We're always looking for talented individuals who share our passion for 
                  revolutionizing supply chains through blockchain technology.
                </p>
                <a 
                  href="/careers"
                  className="inline-block bg-zenblock-professional-green text-white px-8 py-3 rounded-full font-semibold hover:bg-zenblock-fresh-green transition-colors"
                >
                  View Open Positions
                </a>
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
