
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/zenblock-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleBookDemo = () => {
    scrollToSection('contact');
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('home');
    }
  };

  const aboutDropdown = [
    { title: "Our Story", href: "/about-us", description: "Learn about Zenblock Labs' mission and vision" },
    { title: "Leadership", href: "/team", description: "Meet the team behind the innovation" }
  ];

  const solutionsDropdown = [
    { title: "Overview", href: "/#solution", isSection: true, description: "Key features and capabilities" },
    { title: "Full Platform", href: "/solutions", description: "Complete feature set and use cases" },
    { title: "How It Works", href: "/#solution", isSection: true, description: "Step-by-step process flow" }
  ];

  const industriesDropdown = [
    { title: "Pharmaceuticals", href: "/#industries", isSection: true, description: "Drug traceability and compliance" },
    { title: "Agriculture & Food", href: "/#industries", isSection: true, description: "Farm-to-table tracking" },
    { title: "Luxury & Exports", href: "/#industries", isSection: true, description: "Authenticity verification" }
  ];

  const complianceDropdown = [
    { title: "Global Regulations", href: "/compliance", description: "Tatmeen, DSCSA, CDSCO standards" },
    { title: "Technology & Security", href: "/technology", description: "Blockchain infrastructure details" }
  ];

  const handleDropdownClick = (item: any) => {
    if (item.isSection) {
      const sectionId = item.href.split('#')[1];
      scrollToSection(sectionId);
    } else {
      navigate(item.href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-zenblock-border-grey" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="hover:opacity-80 transition-opacity"
              aria-label="Go to homepage"
            >
              <img 
                src={logo} 
                alt="Zenblock Labs Logo" 
                className="h-11"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                {/* Home */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-zenblock-charcoal hover:text-zenblock-fresh-green px-4 py-2 text-[0.95rem] font-medium transition-colors duration-200 relative group"
                    style={{ fontWeight: 500 }}
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-zenblock-professional-green scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </button>
                </NavigationMenuItem>

                {/* About Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-zenblock-charcoal hover:text-zenblock-fresh-green px-4 py-2 text-[0.95rem] font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent" style={{ fontWeight: 500 }}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-full bg-white rounded-xl border border-zenblock-border-grey shadow-lg p-4 w-[280px] mt-2">
                    {aboutDropdown.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <button
                          onClick={() => navigate(item.href)}
                          className="block w-full text-left px-4 py-3 rounded-lg hover:bg-zenblock-mint-whisper transition-colors group"
                        >
                          <div className="font-semibold text-zenblock-charcoal group-hover:text-zenblock-professional-green text-sm mb-1">
                            {item.title}
                          </div>
                          <div className="text-xs text-zenblock-medium-grey">
                            {item.description}
                          </div>
                        </button>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solutions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-zenblock-charcoal hover:text-zenblock-fresh-green px-4 py-2 text-[0.95rem] font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent" style={{ fontWeight: 500 }}>
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-full bg-white rounded-xl border border-zenblock-border-grey shadow-lg p-4 w-[280px] mt-2">
                    {solutionsDropdown.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <button
                          onClick={() => handleDropdownClick(item)}
                          className="block w-full text-left px-4 py-3 rounded-lg hover:bg-zenblock-mint-whisper transition-colors group"
                        >
                          <div className="font-semibold text-zenblock-charcoal group-hover:text-zenblock-professional-green text-sm mb-1">
                            {item.title}
                          </div>
                          <div className="text-xs text-zenblock-medium-grey">
                            {item.description}
                          </div>
                        </button>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-zenblock-charcoal hover:text-zenblock-fresh-green px-4 py-2 text-[0.95rem] font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent" style={{ fontWeight: 500 }}>
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-full bg-white rounded-xl border border-zenblock-border-grey shadow-lg p-4 w-[280px] mt-2">
                    {industriesDropdown.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <button
                          onClick={() => handleDropdownClick(item)}
                          className="block w-full text-left px-4 py-3 rounded-lg hover:bg-zenblock-mint-whisper transition-colors group"
                        >
                          <div className="font-semibold text-zenblock-charcoal group-hover:text-zenblock-professional-green text-sm mb-1">
                            {item.title}
                          </div>
                          <div className="text-xs text-zenblock-medium-grey">
                            {item.description}
                          </div>
                        </button>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Compliance Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-zenblock-charcoal hover:text-zenblock-fresh-green px-4 py-2 text-[0.95rem] font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent" style={{ fontWeight: 500 }}>
                    Compliance
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-full bg-white rounded-xl border border-zenblock-border-grey shadow-lg p-4 w-[280px] mt-2">
                    {complianceDropdown.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <button
                          onClick={() => navigate(item.href)}
                          className="block w-full text-left px-4 py-3 rounded-lg hover:bg-zenblock-mint-whisper transition-colors group"
                        >
                          <div className="font-semibold text-zenblock-charcoal group-hover:text-zenblock-professional-green text-sm mb-1">
                            {item.title}
                          </div>
                          <div className="text-xs text-zenblock-medium-grey">
                            {item.description}
                          </div>
                        </button>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-zenblock-charcoal hover:text-zenblock-fresh-green px-4 py-2 text-[0.95rem] font-medium transition-colors duration-200 relative group"
                    style={{ fontWeight: 500 }}
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-zenblock-professional-green scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={handleBookDemo}
              className="bg-zenblock-professional-green text-white hover:bg-zenblock-fresh-green px-8 py-3 text-[0.95rem] rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              style={{ fontWeight: 700 }}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zenblock-charcoal hover:text-zenblock-professional-green min-h-[44px]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-zenblock-border-grey max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white">
              {/* Home */}
              <button
                onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}
                className="text-zenblock-charcoal hover:text-zenblock-professional-green block px-4 py-3 rounded-lg text-[1rem] font-medium w-full text-left"
                style={{ fontWeight: 500 }}
              >
                Home
              </button>

              {/* About Mobile */}
              <div className="space-y-1">
                <div className="text-zenblock-charcoal px-4 py-2 text-[1rem] font-semibold flex items-center">
                  About <ChevronDown size={16} className="ml-1" />
                </div>
                {aboutDropdown.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => { navigate(item.href); setIsMenuOpen(false); }}
                    className="text-zenblock-medium-grey hover:text-zenblock-professional-green block px-8 py-2 rounded-lg text-sm w-full text-left"
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* Solutions Mobile */}
              <div className="space-y-1">
                <div className="text-zenblock-charcoal px-4 py-2 text-[1rem] font-semibold flex items-center">
                  Solutions <ChevronDown size={16} className="ml-1" />
                </div>
                {solutionsDropdown.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => { handleDropdownClick(item); setIsMenuOpen(false); }}
                    className="text-zenblock-medium-grey hover:text-zenblock-professional-green block px-8 py-2 rounded-lg text-sm w-full text-left"
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* Industries Mobile */}
              <div className="space-y-1">
                <div className="text-zenblock-charcoal px-4 py-2 text-[1rem] font-semibold flex items-center">
                  Industries <ChevronDown size={16} className="ml-1" />
                </div>
                {industriesDropdown.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => { handleDropdownClick(item); setIsMenuOpen(false); }}
                    className="text-zenblock-medium-grey hover:text-zenblock-professional-green block px-8 py-2 rounded-lg text-sm w-full text-left"
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* Compliance Mobile */}
              <div className="space-y-1">
                <div className="text-zenblock-charcoal px-4 py-2 text-[1rem] font-semibold flex items-center">
                  Compliance <ChevronDown size={16} className="ml-1" />
                </div>
                {complianceDropdown.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => { navigate(item.href); setIsMenuOpen(false); }}
                    className="text-zenblock-medium-grey hover:text-zenblock-professional-green block px-8 py-2 rounded-lg text-sm w-full text-left"
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* Contact */}
              <button
                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
                className="text-zenblock-charcoal hover:text-zenblock-professional-green block px-4 py-3 rounded-lg text-[1rem] font-medium w-full text-left"
                style={{ fontWeight: 500 }}
              >
                Contact
              </button>

              <div className="pt-4">
                <Button 
                  onClick={handleBookDemo}
                  className="w-full bg-zenblock-professional-green text-white hover:bg-zenblock-fresh-green px-8 py-3 text-[1rem] rounded-full shadow-md"
                  style={{ fontWeight: 700 }}
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
