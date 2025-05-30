
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("lXiK9onrBeB0qRy8J");

      // Send email using your service and template IDs
      await emailjs.send(
        "service_axp5p3e", // Your service ID
        "template_p2rb5m4", // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Naman Gupta",
        }
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-elegant-charcoal mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-elegant-purple mx-auto rounded-full" />
          <p className="text-elegant-slate text-lg mt-6 max-w-2xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="font-playfair text-2xl font-semibold text-elegant-charcoal mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-elegant-purple/10 rounded-full">
                  <Phone className="w-5 h-5 text-elegant-purple" />
                </div>
                <div>
                  <p className="text-elegant-charcoal font-semibold">Phone</p>
                  <p className="text-elegant-slate">+91 8905634587</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-elegant-purple/10 rounded-full">
                  <Mail className="w-5 h-5 text-elegant-purple" />
                </div>
                <div>
                  <p className="text-elegant-charcoal font-semibold">Email</p>
                  <p className="text-elegant-slate">namangupta13c@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-elegant-purple/10 rounded-full">
                  <Linkedin className="w-5 h-5 text-elegant-purple" />
                </div>
                <div>
                  <p className="text-elegant-charcoal font-semibold">LinkedIn</p>
                  <p className="text-elegant-slate">Connect with me</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="bg-elegant-cream border-elegant-dusty-blue/30 focus:border-elegant-purple"
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
                  disabled={isLoading}
                  className="bg-elegant-cream border-elegant-dusty-blue/30 focus:border-elegant-purple"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={6}
                  className="bg-elegant-cream border-elegant-dusty-blue/30 focus:border-elegant-purple resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-elegant-purple hover:bg-elegant-purple-dark text-white py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
