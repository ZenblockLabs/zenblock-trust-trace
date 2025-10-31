
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
      {/* Blockchain supply chain visual background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Connected nodes pattern */}
        <div className="absolute top-20 left-10 opacity-10 animate-pulse">
          <svg width="200" height="200" viewBox="0 0 200 200" className="text-zenblock-professional-green">
            <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="160" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="100" cy="120" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="40" cy="180" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="160" cy="180" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <line x1="60" y1="40" x2="140" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4"/>
            <line x1="50" y1="55" x2="90" y2="105" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4"/>
            <line x1="150" y1="55" x2="110" y2="105" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4"/>
            <line x1="90" y1="135" x2="50" y2="165" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4"/>
            <line x1="110" y1="135" x2="150" y2="165" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-10 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
          <svg width="180" height="180" viewBox="0 0 180 180" className="text-zenblock-fresh-green">
            <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="150" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="90" cy="90" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="30" cy="150" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="150" cy="150" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <line x1="45" y1="30" x2="135" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="40" y1="42" x2="80" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="140" y1="42" x2="100" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="80" y1="100" x2="40" y2="138" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="100" y1="100" x2="140" y2="138" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3"/>
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <svg width="600" height="400" viewBox="0 0 600 400" className="text-zenblock-deep-forest">
            {/* Supply chain flow arrows */}
            <path d="M50,200 L200,200" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
            <path d="M250,200 L400,200" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
            <path d="M450,200 L550,200" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
            
            {/* Nodes */}
            <rect x="20" y="180" width="40" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="220" y="180" width="40" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="420" y="180" width="40" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
            
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="currentColor"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
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
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-0 bg-zenblock-mint-whisper border border-zenblock-border-grey rounded-2xl p-6 sm:p-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-[1.5rem] font-bold text-zenblock-deep-forest mb-2">100%</div>
              <div className="text-zenblock-medium-grey text-xs sm:text-sm">Drug Traceability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-[1.5rem] font-bold text-zenblock-deep-forest mb-2">3+</div>
              <div className="text-zenblock-medium-grey text-xs sm:text-sm">Countries Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-[1.5rem] font-bold text-zenblock-deep-forest mb-2">24/7</div>
              <div className="text-zenblock-medium-grey text-xs sm:text-sm">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
