
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Pharmaceutical Manufacturer Traceability",
      industry: "Pharmaceuticals",
      challenge: "Need for end-to-end drug traceability to combat counterfeiting",
      solution: "Blockchain-based tracking from manufacturing to patient delivery",
      results: ["100% product authenticity verification", "50% reduction in compliance costs", "Real-time supply chain visibility"]
    },
    {
      title: "Multi-Country Compliance Solution", 
      industry: "Global Pharma",
      challenge: "Managing different regulatory requirements across India, UAE, and US",
      solution: "Unified compliance platform with jurisdiction-specific reporting",
      results: ["Streamlined regulatory reporting", "Reduced audit preparation time", "Enhanced stakeholder trust"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Discover how Zenblock Labs is transforming pharmaceutical supply chains 
              with real-world implementations and measurable results.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-zenblock-white shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <span className="text-sm text-zenblock-electric-blue font-medium">{study.industry}</span>
                    <h2 className="text-3xl font-bold text-zenblock-primary-text mt-2 mb-4">{study.title}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-zenblock-primary-text mb-3">Challenge</h3>
                      <p className="text-zenblock-secondary-text">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-zenblock-primary-text mb-3">Solution</h3>
                      <p className="text-zenblock-secondary-text">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-zenblock-primary-text mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-zenblock-secondary-text flex items-start">
                            <span className="text-zenblock-electric-blue mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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

export default CaseStudies;
