
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-purple/5 via-transparent to-elegant-purple/10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="text-elegant-slate font-inter text-lg">
              Hey, I'm Naman 👋
            </span>
          </div>
          
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-elegant-charcoal">Data</span>
            <span className="text-elegant-purple"> Scientist</span>
          </h1>
          
          <p className="text-elegant-slate text-lg lg:text-xl mb-8 leading-relaxed max-w-xl">
            I'm a data scientist passionate about solving real-world problems using AI, 
            machine learning, and cloud technologies. I build scalable, intelligent solutions 
            to help organizations make data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("portfolio")}
              className="bg-elegant-purple hover:bg-elegant-purple-dark text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-elegant-purple text-elegant-purple hover:bg-elegant-purple hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/lovable-uploads/9d74ef0d-c53f-412b-b999-bc60d077497a.png"
                alt="Naman Gupta"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-elegant-purple/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-elegant-purple/30 rounded-full blur-lg animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};
