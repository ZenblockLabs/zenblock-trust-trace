
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
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
              Pioneering blockchain solutions for pharmaceutical supply chain transparency, 
              compliance, and trust in the digital age.
            </p>
          </div>

          <div className="space-y-12">
            <Card className="bg-zenblock-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-zenblock-primary-text mb-6">Our Mission</h2>
                <p className="text-lg text-zenblock-secondary-text leading-relaxed">
                  At Zenblock Labs, we're dedicated to revolutionizing pharmaceutical supply chains 
                  through cutting-edge blockchain technology. Our mission is to create an ecosystem 
                  where every medication can be traced from manufacturer to patient, ensuring 
                  authenticity, safety, and regulatory compliance at every step.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zenblock-soft-violet">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-zenblock-primary-text mb-4">Our Vision</h3>
                  <p className="text-zenblock-secondary-text">
                    To build a future where pharmaceutical supply chains are completely transparent, 
                    secure, and trusted by patients, healthcare providers, and regulatory bodies worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zenblock-soft-mint">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-zenblock-primary-text mb-4">Our Values</h3>
                  <ul className="space-y-2 text-zenblock-secondary-text">
                    <li>• Transparency in every transaction</li>
                    <li>• Innovation through technology</li>
                    <li>• Patient safety first</li>
                    <li>• Regulatory compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-zenblock-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-zenblock-primary-text mb-6">Why Choose Zenblock Labs?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-zenblock-electric-blue mb-3">
                      Proven Technology
                    </h4>
                    <p className="text-zenblock-secondary-text">
                      Our blockchain platform has been tested and validated by leading pharmaceutical companies.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-zenblock-pharma-green mb-3">
                      Regulatory Expertise
                    </h4>
                    <p className="text-zenblock-secondary-text">
                      Deep understanding of global pharmaceutical regulations and compliance requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-zenblock-electric-blue mb-3">
                      Scalable Solutions
                    </h4>
                    <p className="text-zenblock-secondary-text">
                      From small biotech firms to global pharmaceutical giants, our platform scales with your needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
