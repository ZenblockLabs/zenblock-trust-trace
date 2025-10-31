
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, Activity } from "lucide-react";

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
        <div className="animate-fade-in space-y-6 sm:space-y-8 pt-16 sm:pt-20 md:pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-zenblock-charcoal mb-4 sm:mb-6 leading-tight">
            <span className="flex flex-col space-y-2 sm:space-y-4 md:space-y-6">
              <span>Enabling Trust in</span>
              <span className="text-zenblock-professional-green">
                Regulated Supply Chains
              </span>
              <span>through Blockchain</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] text-zenblock-medium-grey mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            End-to-end traceability for supply chains—ensuring compliance and trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Button 
              size="lg" 
              onClick={handleBookDemo}
              className="bg-zenblock-professional-green text-white hover:bg-zenblock-fresh-green hover:scale-105 text-base sm:text-[1rem] px-6 sm:px-8 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto min-h-[44px] sm:min-h-[56px]"
            >
              Book a Demo
            </Button>
            
            <Button 
              size="lg" 
              onClick={handleExploreSolution}
              variant="outline"
              className="border-2 border-zenblock-professional-green text-zenblock-professional-green hover:bg-zenblock-mint-whisper text-base sm:text-[1rem] px-6 sm:px-8 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto min-h-[44px] sm:min-h-[56px]"
            >
              Explore Solution
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          
          <div className="bg-zenblock-mint-whisper border border-zenblock-border-grey rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-zenblock-professional-green/10 rounded-full group-hover:bg-zenblock-professional-green/20 transition-colors duration-300">
                    <Shield className="w-6 h-6 text-zenblock-professional-green" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-[1.5rem] font-bold text-zenblock-deep-forest mb-2 animate-fade-in">100%</div>
                <div className="text-zenblock-medium-grey text-xs sm:text-sm">Supply Traceability</div>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-zenblock-professional-green/10 rounded-full group-hover:bg-zenblock-professional-green/20 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-zenblock-professional-green" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-[1.5rem] font-bold text-zenblock-deep-forest mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>3+</div>
                <div className="text-zenblock-medium-grey text-xs sm:text-sm">Countries Compliant</div>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-zenblock-professional-green/10 rounded-full group-hover:bg-zenblock-professional-green/20 transition-colors duration-300">
                    <Activity className="w-6 h-6 text-zenblock-professional-green" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-[1.5rem] font-bold text-zenblock-deep-forest mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>24/7</div>
                <div className="text-zenblock-medium-grey text-xs sm:text-sm">Real-time Monitoring</div>
              </div>
            </div>
            
            <div className="text-center pt-4 border-t border-zenblock-border-grey">
              <a 
                href="/case-studies" 
                className="inline-flex items-center text-sm text-zenblock-professional-green hover:text-zenblock-fresh-green font-medium transition-colors duration-300 group"
              >
                See how we measure it
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
