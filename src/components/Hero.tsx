
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-zenblock-inverse-text mb-6 leading-tight">
            Enabling Trust in
            <br />
            <span className="bg-gradient-to-r from-zenblock-white to-zenblock-electric-blue bg-clip-text text-transparent">
              Regulated Supply Chains
            </span>
            <br />
            through Blockchain
          </h1>
          
          <p className="text-lg md:text-xl text-zenblock-inverse-text/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zenblock Labs provides end-to-end traceability solutions for pharmaceutical supply chains, 
            ensuring regulatory compliance and building trust between all stakeholders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-zenblock-electric-blue text-zenblock-white hover:bg-zenblock-electric-blue/90 text-base px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Our Solution
              <ArrowRight className="ml-2" size={18} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zenblock-white text-zenblock-white hover:bg-zenblock-white hover:text-zenblock-dark-blue text-base px-6 py-3 rounded-full font-semibold backdrop-blur-sm"
            >
              Book a Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-zenblock-white mb-2">100%</div>
              <div className="text-zenblock-inverse-text/80 text-sm">Drug Traceability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zenblock-white mb-2">3+</div>
              <div className="text-zenblock-inverse-text/80 text-sm">Countries Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zenblock-white mb-2">24/7</div>
              <div className="text-zenblock-inverse-text/80 text-sm">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
