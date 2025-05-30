
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair font-bold text-2xl text-elegant-charcoal">
            Naman Gupta
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-elegant-slate hover:text-elegant-purple transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-elegant-slate hover:text-elegant-purple transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-elegant-slate hover:text-elegant-purple transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-elegant-slate hover:text-elegant-purple transition-colors duration-300"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-elegant-slate hover:text-elegant-purple transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-elegant-purple hover:bg-elegant-purple-dark text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};
