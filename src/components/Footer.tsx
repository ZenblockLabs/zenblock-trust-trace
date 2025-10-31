
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { name: "About", href: "/#about", isAnchor: true },
      { name: "Solution", href: "/#solution", isAnchor: true },
      { name: "Industries", href: "/#industries", isAnchor: true },
      { name: "Compliance", href: "/#compliance", isAnchor: true }
    ],
    resources: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "Whitepapers", href: "/whitepapers" },
      { name: "Careers", href: "/careers" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "GDPR", href: "/gdpr" }
    ]
  };

  const handleLinkClick = (link: any) => {
    if (link.isAnchor) {
      const sectionId = link.href.split('#')[1];
      if (window.location.pathname !== '/') {
        window.location.href = link.href;
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  return (
    <footer className="bg-zenblock-deep-forest border-t border-zenblock-professional-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-zenblock-professional-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zenblock Labs</span>
            </div>
            <p className="text-zenblock-cool-grey text-sm">
              Building trust in pharmaceutical supply chains through blockchain technology.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 capitalize">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.isAnchor ? (
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-zenblock-cool-grey hover:text-zenblock-fresh-green text-sm transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-zenblock-cool-grey hover:text-zenblock-fresh-green text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zenblock-professional-green/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zenblock-cool-grey text-sm mb-4 md:mb-0">
            © 2025 Zenblock Labs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zenblock-cool-grey hover:text-zenblock-fresh-green transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-zenblock-cool-grey hover:text-zenblock-fresh-green transition-colors duration-200">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-zenblock-cool-grey hover:text-zenblock-fresh-green transition-colors duration-200">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
