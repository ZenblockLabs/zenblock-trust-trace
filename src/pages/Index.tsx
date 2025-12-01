import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solution from "@/components/Solution";
import Industries from "@/components/Industries";
import WhyBlockchain from "@/components/WhyBlockchain";
import Compliance from "@/components/Compliance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Zenblock Labs — Blockchain-Powered Authenticity & Supply Chain Verification"
        description="Enterprise-grade blockchain & AI solutions for pharma, defence, and luxury brands. Verify products, prevent counterfeits, ensure real-time supply chain transparency."
        canonical="https://www.zenblocklabs.com/"
      />
      <Navigation />
      <Hero />
      <About />
      <Solution />
      <Industries />
      <WhyBlockchain />
      <Compliance />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
