
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PLACEHOLDER_STYLE = "placeholder-[#222]"; // Ensure dark grey for placeholders

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Simulate "sending" a message (mock)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you at info@zenblocklabs.com.",
      className: "bg-zenblock-soft-mint border-zenblock-pharma-green text-zenblock-primary-text",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitting) {
    return (
      <section id="contact" className="py-20 bg-zenblock-soft-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zenblock-electric-blue mb-4"></div>
            <p className="text-zenblock-primary-text text-lg">Sending your message...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-zenblock-soft-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
            We're here to help. Get in touch with our team to discuss your pharmaceutical supply chain needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-zenblock-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name"
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text ${PLACEHOLDER_STYLE}`}
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text ${PLACEHOLDER_STYLE}`}
                    />
                  </div>
                  <div>
                    <Input 
                      type="text" 
                      name="company" 
                      placeholder="Your Company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text ${PLACEHOLDER_STYLE}`}
                    />
                  </div>
                  <div>
                    <Textarea 
                      name="message" 
                      placeholder="Your Message" 
                      rows={4} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text resize-none ${PLACEHOLDER_STYLE}`}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-zenblock-electric-blue text-zenblock-white hover:bg-zenblock-electric-blue/90"
                    disabled={isSubmitting}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <Card className="bg-zenblock-soft-mint">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-zenblock-white p-2">
                    <Phone className="w-6 h-6 text-zenblock-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zenblock-primary-text">Phone</h3>
                    <p className="text-zenblock-secondary-text">+91 9059392738</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-zenblock-white p-2">
                    <Mail className="w-6 h-6 text-zenblock-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zenblock-primary-text">Email</h3>
                    <p className="text-zenblock-secondary-text">info@zenblocklabs.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-zenblock-white p-2">
                    <MapPin className="w-6 h-6 text-zenblock-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zenblock-primary-text">Address</h3>
                    <p className="text-zenblock-secondary-text">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-zenblock-white p-2">
                    <MessageCircle className="w-6 h-6 text-zenblock-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zenblock-primary-text">Support</h3>
                    <p className="text-zenblock-secondary-text">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
