import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Handles form submission: send via Resend edge function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          formType: 'contact'
        }
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you soon at zenblocklabs@gmail.com.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to Send",
        description: "Sorry, something went wrong. Please try again later or email us directly at zenblocklabs@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};
