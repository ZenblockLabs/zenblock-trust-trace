
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDemo = () => {
    scrollToSection('contact');
  };

  const handleExploreSolution = () => {
    scrollToSection('solution');
  };

  return (
    <section id="home" className="bg-zenblock-pure-white min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in space-y-8 pt-16 sm:pt-20 md:pt-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-zenblock-charcoal mb-6 leading-tight sm:leading-relaxed">
            <span className="flex flex-col space-y-6">
              <span>Enabling Trust in</span>
              <span className="text-zenblock-professional-green">
                Regulated Supply Chains
              </span>
              <span>through Blockchain</span>
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-[1.25rem] text-zenblock-medium-grey mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Zenblock Labs provides end-to-end traceability solutions for pharmaceutical supply chains, 
            ensuring regulatory compliance and building trust between all stakeholders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4 sm:px-0">
            <Button 
              size="lg" 
              onClick={handleBookDemo}
              className="bg-zenblock-professional-green text-white hover:bg-zenblock-fresh-green text-sm sm:text-[1rem] px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Book a Demo
            </Button>
            
            <Button 
              size="lg" 
              onClick={handleExploreSolution}
              variant="outline"
              className="border-2 border-zenblock-professional-green text-zenblock-professional-green hover:bg-zenblock-professional-green hover:text-white text-sm sm:text-[1rem] px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              Explore Solution
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-4 sm:px-0 bg-zenblock-mint-whisper border border-zenblock-border-grey rounded-2xl p-8">
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-[1.5rem] font-bold text-zenblock-professional-green mb-2">100%</div>
              <div className="text-zenblock-medium-grey text-sm lg:text-[0.875rem]">Drug Traceability</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-[1.5rem] font-bold text-zenblock-professional-green mb-2">3+</div>
              <div className="text-zenblock-medium-grey text-sm lg:text-[0.875rem]">Countries Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-[1.5rem] font-bold text-zenblock-professional-green mb-2">24/7</div>
              <div className="text-zenblock-medium-grey text-sm lg:text-[0.875rem]">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
