
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Heart Disease Detection from ECG",
      description: "ML Internship @ C-DAC - Used Random Forest/SVM on preprocessed ECG data to achieve 92% accuracy.",
      technologies: ["Python", "Random Forest", "SVM", "ECG Analysis"],
      category: "Machine Learning",
      link: "https://github.com/naman-gupta/heart-disease-detection" // Add your actual GitHub link
    },
    {
      title: "SKIMLIT Biomedical NLP",
      description: "Sentence classification in medical abstracts using Conv1D deep learning model for enhanced literature review.",
      technologies: ["NLP", "Conv1D", "TensorFlow", "Biomedical Text"],
      category: "Deep Learning",
      link: "https://github.com/namanook/SKIMLIT"
    },
    {
      title: "Time Series Forecasting – Bitcoin",
      description: "Built dense neural network models to forecast Bitcoin price trends using historical data (2013–2021).",
      technologies: ["Time Series", "Neural Networks", "Python", "Financial Data"],
      category: "Forecasting",
      link: "https://github.com/namanook/TIME-SERIES-FORCASTING-OF-BITCOIN"
    }
  ];

  const handleProjectLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-elegant-light-gray to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-elegant-charcoal mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-elegant-purple mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <span className="text-elegant-purple text-sm font-semibold bg-elegant-purple/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-elegant-charcoal mb-4 group-hover:text-elegant-purple transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-elegant-slate leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-elegant-cream text-elegant-slate px-2 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button
                onClick={() => handleProjectLink(project.link)}
                variant="outline"
                className="w-full border-elegant-purple text-elegant-purple hover:bg-elegant-purple hover:text-white transition-all duration-300 group/btn"
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
