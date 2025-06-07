
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Globe, Shield } from "lucide-react";

const Compliance = () => {
  const regulations = [
    {
      region: "UAE",
      name: "Tatmeen",
      status: "ready",
      icon: "🇦🇪",
      description: "Track and trace requirements for pharmaceutical products",
      timeline: "Currently compliant",
      features: ["Product registration", "Event tracking", "Real-time monitoring", "Audit trails"]
    },
    {
      region: "India",
      name: "CDSCO",
      status: "pilot",
      icon: "🇮🇳", 
      description: "Central Drugs Standard Control Organization compliance",
      timeline: "Pilot program 2025",
      features: ["Manufacturing tracking", "Distribution logs", "Quality assurance", "Regulatory reporting"]
    },
    {
      region: "United States",
      name: "DSCSA",
      status: "development",
      icon: "🇺🇸",
      description: "Drug Supply Chain Security Act requirements",
      timeline: "Development phase",
      features: ["Serialization", "Verification", "Enhanced tracking", "Suspect product investigations"]
    }
  ];

  const standards = [
    {
      name: "GS1 Standards",
      description: "Global standards for business communication and supply chain management",
      compliance: "Full compatibility with GS1 GLN (Global Location Numbers) and GTIN (Global Trade Item Numbers)"
    },
    {
      name: "ISO 27001",
      description: "Information security management systems",
      compliance: "Security framework aligned with international standards"
    },
    {
      name: "FDA 21 CFR Part 11",
      description: "Electronic records and signatures",
      compliance: "Blockchain-based audit trails meet regulatory requirements"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready": return "bg-green-100 text-green-800 border-green-200";
      case "pilot": return "bg-blue-100 text-blue-800 border-blue-200";
      case "development": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ready": return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "pilot": return <Clock className="w-5 h-5 text-blue-600" />;
      case "development": return <Clock className="w-5 h-5 text-yellow-600" />;
      default: return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <section id="compliance" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Regulatory Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is designed to meet the stringent regulatory requirements 
            across multiple jurisdictions, ensuring seamless compliance for global operations.
          </p>
        </div>

        {/* Regional Compliance */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Regional Regulations</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {regulations.map((reg, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{reg.icon}</div>
                    <Badge className={getStatusColor(reg.status)}>
                      {getStatusIcon(reg.status)}
                      <span className="ml-1 capitalize">{reg.status}</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{reg.name}</CardTitle>
                  <p className="text-sm text-gray-500">{reg.region}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{reg.description}</p>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Timeline</div>
                    <div className="text-sm text-gray-600">{reg.timeline}</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">Key Features</div>
                    <div className="space-y-1">
                      {reg.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-zenblock-blue rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* International Standards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">International Standards</h3>
          <div className="space-y-6">
            {standards.map((standard, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-zenblock-blue flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{standard.name}</h4>
                      <p className="text-gray-600 mb-3">{standard.description}</p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-zenblock-blue mb-1">Our Compliance</div>
                        <div className="text-sm text-gray-700">{standard.compliance}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Roadmap */}
        <div>
          <Card className="bg-gradient-to-r from-zenblock-blue to-zenblock-navy text-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Compliance Roadmap</h3>
                <p className="text-blue-100">
                  Our ongoing commitment to regulatory excellence across global markets
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">FDA Sandbox</h4>
                  <p className="text-blue-200 text-sm">Participating in regulatory sandbox programs</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">EU MDR</h4>
                  <p className="text-blue-200 text-sm">Expanding to European medical device regulations</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">WHO Standards</h4>
                  <p className="text-blue-200 text-sm">Aligning with World Health Organization guidelines</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
