
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "News", href: "#" }
    ],
    product: [
      { name: "Solution", href: "#solution" },
      { name: "Industries", href: "#industries" },
      { name: "Compliance", href: "#compliance" },
      { name: "Documentation", href: "#" }
    ],
    resources: [
      { name: "Case Studies", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Whitepapers", href: "#" },
      { name: "API Docs", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  return (
    <footer className="bg-zenblock-dark-blue text-zenblock-inverse-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-zenblock-white mb-4">
              Zenblock Labs
            </div>
            <p className="text-zenblock-inverse-text/80 mb-6 max-w-md text-[1rem]">
              Enabling trust in regulated supply chains through blockchain technology. 
              Building the future of pharmaceutical traceability and compliance.
            </p>
            <div className="text-sm text-zenblock-inverse-text/70">
              <p>Hyderabad, India</p>
              <p className="mt-2">info@zenblocklabs.com</p>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-zenblock-white font-semibold mb-4 text-[1rem]">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-zenblock-inverse-text/70 hover:text-zenblock-electric-blue transition-colors duration-200 text-[1rem]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-zenblock-white font-semibold mb-4 text-[1rem]">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-zenblock-inverse-text/70 hover:text-zenblock-electric-blue transition-colors duration-200 text-[1rem]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-zenblock-white font-semibold mb-4 text-[1rem]">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-zenblock-inverse-text/70 hover:text-zenblock-electric-blue transition-colors duration-200 text-[1rem]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-zenblock-white font-semibold mb-4 text-[1rem]">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-zenblock-inverse-text/70 hover:text-zenblock-electric-blue transition-colors duration-200 text-[1rem]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-zenblock-inverse-text/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-zenblock-inverse-text/70 text-[0.875rem]">
            © 2024 Zenblock Labs. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-zenblock-inverse-text/70 hover:text-zenblock-electric-blue transition-colors duration-200 text-[1rem]"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-zenblock-inverse-text/70 hover:text-zenblock-electric-blue transition-colors duration-200 text-[1rem]"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-zenblock-inverse-text/70 hover:text-zenblock-electric-blue transition-colors duration-200 text-[1rem]"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
