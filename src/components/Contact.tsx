
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";
import ContactInfo from "./ContactInfo";

// Tailwind class to ensure placeholder text is dark grey
const PLACEHOLDER_STYLE = "placeholder:text-[#222]";

const Contact = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  if (isSubmitting) {
    return (
      <section id="contact" className="py-20 bg-zenblock-soft-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zenblock-electric-blue mb-4"></div>
            <p className="text-zenblock-primary-text text-lg">
              Sending your message...
            </p>
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
            We're here to help. Get in touch with our team to discuss your
            pharmaceutical supply chain needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-zenblock-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text ${PLACEHOLDER_STYLE}`}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text ${PLACEHOLDER_STYLE}`}
                  />
                  <Input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text ${PLACEHOLDER_STYLE}`}
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`bg-zenblock-soft-mint border-none text-zenblock-primary-text resize-none ${PLACEHOLDER_STYLE}`}
                  />
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

          {/* Contact Info */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
