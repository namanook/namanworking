
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
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
                  rows={6}
                  className="bg-elegant-cream border-elegant-dusty-blue/30 focus:border-elegant-purple resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-elegant-purple hover:bg-elegant-purple-dark text-white py-3 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
