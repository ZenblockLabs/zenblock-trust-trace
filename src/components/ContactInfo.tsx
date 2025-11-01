import { Phone, Mail, MapPin, MessageCircle, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => (
  <Card className="bg-white border border-zenblock-border-grey">
    <CardContent className="p-8 space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Phone className="w-6 h-6 text-zenblock-professional-green" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zenblock-charcoal">Phone</h3>
          <p className="text-zenblock-medium-grey">+91 9032965988</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Mail className="w-6 h-6 text-zenblock-professional-green" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zenblock-charcoal">Email</h3>
          <p className="text-zenblock-medium-grey">zenblocklabs@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <MapPin className="w-6 h-6 text-zenblock-professional-green" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zenblock-charcoal">Address</h3>
          <p className="text-zenblock-medium-grey">Hyderabad, India</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Linkedin className="w-6 h-6 text-zenblock-professional-green" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zenblock-charcoal">LinkedIn</h3>
          <a 
            href="https://www.linkedin.com/company/zenblock-labs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zenblock-professional-green hover:text-zenblock-fresh-green transition-colors"
          >
            Connect with us
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <MessageCircle className="w-6 h-6 text-zenblock-professional-green" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zenblock-charcoal">Support</h3>
          <p className="text-zenblock-medium-grey">Available 24/7</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ContactInfo;
