import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import hyperledgerArch from "@/assets/hyperledger-architecture.jpg";

const WhyBlockchain = () => {
  return (
    <section id="why-blockchain" className="py-16 bg-zenblock-cool-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-zenblock-mint-whisper border-l-4 border-zenblock-professional-green">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Shield className="w-10 h-10 text-zenblock-professional-green" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zenblock-charcoal mb-4">Built on Hyperledger Fabric</h2>
                  <p className="text-lg text-zenblock-medium-grey mb-4">
                    Enterprise-grade blockchain for regulated trust. Our platform leverages permissioned blockchain technology to ensure data integrity, transparency, and security across your supply chain.
                  </p>
                  <a 
                    href="/technology" 
                    className="inline-flex items-center text-zenblock-professional-green hover:text-zenblock-fresh-green font-semibold transition-colors duration-300 group"
                  >
                    Learn how our technology works
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <img src={hyperledgerArch} alt="Hyperledger Fabric architecture" className="w-full h-64 object-cover rounded-xl border border-zenblock-border-grey" loading="lazy" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyBlockchain;
