
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Whitepapers = () => {
  const whitepapers = [
    {
      title: "Blockchain for Pharmaceutical Traceability: A Comprehensive Guide",
      description: "An in-depth analysis of how blockchain technology can transform pharmaceutical supply chains, reduce counterfeiting, and ensure regulatory compliance.",
      pages: "24 pages",
      category: "Technology"
    },
    {
      title: "Regulatory Compliance in Digital Supply Chains",
      description: "Understanding the regulatory landscape for blockchain implementations in pharmaceutical industries across India, UAE, and global markets.",
      pages: "18 pages", 
      category: "Compliance"
    },
    {
      title: "The Economic Impact of Supply Chain Transparency",
      description: "Quantifying the benefits of end-to-end traceability solutions for pharmaceutical manufacturers, distributors, and patients.",
      pages: "15 pages",
      category: "Business Impact"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Whitepapers
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Deep insights and research on blockchain technology, pharmaceutical compliance, 
              and supply chain innovation from our expert team.
            </p>
          </div>

          <div className="space-y-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="bg-zenblock-white card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-zenblock-soft-violet rounded-lg flex items-center justify-center">
                        <FileText className="w-8 h-8 text-zenblock-electric-blue" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-zenblock-electric-blue font-medium">{paper.category}</span>
                        <span className="text-sm text-zenblock-secondary-text">{paper.pages}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-zenblock-primary-text mb-3">{paper.title}</h2>
                      <p className="text-zenblock-secondary-text mb-6">{paper.description}</p>
                      <Button className="bg-zenblock-electric-blue text-zenblock-white hover:bg-zenblock-electric-blue/90">
                        Download PDF
                      </Button>
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

export default Whitepapers;
