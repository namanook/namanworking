
import { Code, User, Briefcase, Calendar, Brain, Cloud, Server } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & LLMs",
      icon: Brain,
      skills: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "MCP Servers", "Agentic Pipelines", "FAISS", "GPT / Claude / Llama"]
    },
    {
      title: "ML & Deep Learning",
      icon: Code,
      skills: ["TensorFlow", "Keras", "Scikit-learn", "NLP", "Computer Vision", "Predictive Modelling", "Time Series Forecasting"]
    },
    {
      title: "Cloud & MLOps",
      icon: Cloud,
      skills: ["Amazon SageMaker", "AWS Lambda", "AWS SQS", "AWS S3", "Serverless Deployment", "Cloudflare R2"]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["FastAPI", "REST APIs", "SSE", "Async Python", "Redis", "MongoDB", "BytePlus Vision API"]
    },
    {
      title: "Programming",
      icon: User,
      skills: ["Python", "C++", "HTML/CSS", "Git"]
    },
    {
      title: "Tools & Frameworks",
      icon: Briefcase,
      skills: ["Pandas", "NumPy", "Matplotlib", "HuggingFace", "Ollama"]
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
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
