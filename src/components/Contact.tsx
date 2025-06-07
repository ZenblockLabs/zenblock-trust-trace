
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-zenblock-blue" />,
      title: "Headquarters",
      details: ["Mumbai, India", "SINE IIT Bombay Incubator"]
    },
    {
      icon: <Phone className="w-6 h-6 text-zenblock-blue" />,
      title: "Phone",
      details: ["+91 XXX XXX XXXX", "Available 9 AM - 6 PM IST"]
    },
    {
      icon: <Mail className="w-6 h-6 text-zenblock-blue" />,
      title: "Email",
      details: ["info@zenblocklabs.com", "partnerships@zenblocklabs.com"]
    },
    {
      icon: <Calendar className="w-6 h-6 text-zenblock-blue" />,
      title: "Book a Call",
      details: ["Schedule a demo", "Free consultation available"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your supply chain? Let's discuss how Zenblock Labs 
            can help you build trust and transparency in your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your supply chain challenges and how we can help..."
                  />
                </div>

                <Button type="submit" className="w-full bg-zenblock-blue hover:bg-zenblock-navy text-lg py-6">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {info.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, dIndex) => (
                        <p key={dIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="space-y-4 pt-6">
              <Button 
                size="lg" 
                className="w-full bg-zenblock-blue hover:bg-zenblock-navy"
              >
                <Calendar className="mr-2" size={20} />
                Schedule a Demo
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-zenblock-blue text-zenblock-blue hover:bg-zenblock-blue hover:text-white"
              >
                <Phone className="mr-2" size={20} />
                WhatsApp Us
              </Button>
            </div>

            {/* Additional Info */}
            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Partner With Us?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-zenblock-blue rounded-full"></div>
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-zenblock-blue rounded-full"></div>
                    <span>Custom solution design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-zenblock-blue rounded-full"></div>
                    <span>Regulatory compliance support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-zenblock-blue rounded-full"></div>
                    <span>24/7 technical support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
