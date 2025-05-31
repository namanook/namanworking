
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "AWS AI Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      type: "Cloud AI",
      description: "Foundational understanding of AI/ML services on AWS",
      badge: "AI/ML",
      link: "https://drive.google.com/file/d/18JaVxMXtljxnT_Jjs42kwYKZ9ul3hElS/view?usp=sharing"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services", 
      date: "2024",
      type: "Cloud Computing",
      description: "Core AWS services and cloud computing fundamentals",
      badge: "Cloud",
      link: "https://drive.google.com/file/d/186KNPfb0nigRXK4-28nyr0HLyyKM_orw/view?usp=sharing"
    },
    {
      title: "AWS APAC Solution Architecture",
      issuer: "Amazon Web Services",
      date: "2024",
      type: "Cloud Architecture",
      description: "Advanced solution architecture design for AWS APAC region",
      badge: "Architecture",
      link: "https://drive.google.com/file/d/1DkJtsUYZisiMcdQd0nRdfyI3MtHaKW5f/view?usp=sharing"
    },
    {
      title: "Prompt Engineering",
      issuer: "AI Professional Certification",
      date: "2024",
      type: "AI Engineering",
      description: "Advanced prompt design and optimization for LLMs",
      badge: "AI"
    }
  ];

  const handleCertificateLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-elegant-charcoal mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-elegant-purple mx-auto rounded-full" />
          <p className="text-elegant-slate text-lg mt-6 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in AI, machine learning, and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in border-elegant-dusty-blue/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-elegant-purple/10 rounded-full">
                    <Award className="w-6 h-6 text-elegant-purple" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-elegant-purple/10 text-elegant-purple border-elegant-purple/20"
                  >
                    {cert.badge}
                  </Badge>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-elegant-charcoal mb-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center text-elegant-slate mb-3">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-elegant-slate text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-elegant-purple bg-elegant-purple/5 px-3 py-1 rounded-full">
                    {cert.type}
                  </span>
                  {cert.link ? (
                    <ExternalLink 
                      className="w-4 h-4 text-elegant-dusty-blue group-hover:text-elegant-purple transition-colors duration-300 cursor-pointer" 
                      onClick={() => handleCertificateLink(cert.link)}
                    />
                  ) : (
                    <ExternalLink className="w-4 h-4 text-elegant-dusty-blue group-hover:text-elegant-purple transition-colors duration-300" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
