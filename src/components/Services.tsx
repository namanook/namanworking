
import { Code, Briefcase, User, Calendar, Book, Mail } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Machine Learning Model Development",
      description: "Custom ML models tailored to your specific business needs and data requirements.",
      icon: Code
    },
    {
      title: "AI/ML Workflow Deployment on AWS",
      description: "Scalable deployment of AI solutions using cloud infrastructure and best practices.",
      icon: Briefcase
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for biomedical text analysis and document processing.",
      icon: Book
    },
    {
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights with compelling visualizations.",
      icon: User
    },
    {
      title: "Time Series Forecasting",
      description: "Predict future trends and patterns using advanced statistical and ML techniques.",
      icon: Calendar
    },
    {
      title: "End-to-End Data Science Solutions",
      description: "Complete data science pipelines from data collection to model deployment.",
      icon: Mail
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-elegant-charcoal mb-6">
            Services Offered
          </h2>
          <div className="w-24 h-1 bg-elegant-purple mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gradient-to-br from-elegant-cream to-white p-8 rounded-2xl border border-elegant-dusty-blue/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-elegant-purple/10 group-hover:bg-elegant-purple group-hover:text-white rounded-full mb-6 transition-all duration-300">
                <service.icon className="w-8 h-8 text-elegant-purple group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-elegant-charcoal mb-4">
                {service.title}
              </h3>
              
              <p className="text-elegant-slate leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
