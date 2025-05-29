
import { Code, User, Briefcase, Calendar } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      icon: Code,
      skills: ["Machine Learning", "Deep Learning", "Predictive Modeling", "NLP"]
    },
    {
      title: "Tools & Frameworks",
      icon: Briefcase,
      skills: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "Programming",
      icon: User,
      skills: ["Python", "C++", "HTML/CSS"]
    },
    {
      title: "Cloud & Certifications",
      icon: Calendar,
      skills: ["AWS AI Practitioner", "AWS Cloud Practitioner", "Time Series Forecasting", "Prompt Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-elegant-light-gray to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-elegant-charcoal mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-elegant-purple mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-elegant-purple/10 rounded-full mb-6 mx-auto">
                <category.icon className="w-8 h-8 text-elegant-purple" />
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-elegant-charcoal mb-4 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="text-elegant-slate text-sm bg-elegant-cream px-3 py-2 rounded-lg text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
