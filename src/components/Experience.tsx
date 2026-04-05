
import { Briefcase, MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Matchbestsoftware",
      location: "Gurgaon, India",
      date: "Jul 2025 – Present",
      points: [
        "Architected multi-label medical image classification system using Amazon SageMaker and FastAPI, reducing clinical triage effort via AWS Lambda.",
        "Integrated injury detection using BytePlus Skylark Vision API for real-time clinical decision support within HealNova.",
        "Engineered FastAPI backend for Comic Flow AI with SSE streaming, async jobs, MongoDB, Cloudflare R2, and Redis rate limiting.",
        "Developed backend microservices for AI avatar generation using BytePlus Omnihuman 1.5 with AWS SQS, MongoDB, and Redis."
      ]
    },
    {
      title: "AI/ML Intern",
      company: "C-DAC (Centre for Development of Advanced Computing)",
      location: "Mohali, India",
      date: "Dec 2024",
      points: [
        "Developed and benchmarked ML models for heart disease detection from ECG signals with data cleaning, EDA, and feature engineering.",
        "Contributed to Psychiatric Chair ML project with data ingestion pipelines and technical documentation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-elegant-charcoal mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-elegant-purple mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className="bg-elegant-cream p-8 rounded-2xl border border-elegant-dusty-blue/20 hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <div className="w-12 h-12 bg-elegant-purple/10 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-elegant-purple" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-elegant-charcoal">
                      {exp.title}
                    </h3>
                    <p className="text-elegant-purple font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end text-sm text-elegant-slate">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {exp.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 ml-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-elegant-slate leading-relaxed flex items-start gap-3">
                    <span className="w-2 h-2 bg-elegant-purple rounded-full mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
