
export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-elegant-charcoal mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-elegant-purple mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-elegant-slate text-lg leading-relaxed mb-6">
              I am a highly motivated Data Scientist with a strong passion for uncovering 
              insights from data and contributing to impactful decision-making. I specialize 
              in predictive modeling, machine learning, and cloud-based AI solutions.
            </p>
            <p className="text-elegant-slate text-lg leading-relaxed mb-8">
              I hold certifications as an AWS Cloud Practitioner and AI Practitioner. 
              My goal is to apply advanced analytical techniques to help organizations 
              grow and innovate through data-driven strategies.
            </p>
          </div>

          <div className="animate-scale-in">
            <div className="bg-elegant-cream p-8 rounded-2xl border border-elegant-dusty-blue/20">
              <h3 className="font-playfair text-2xl font-semibold text-elegant-charcoal mb-6">
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-elegant-purple pl-6">
                  <h4 className="font-semibold text-elegant-charcoal text-lg">
                    B.E. (Hons.), Computer Science & AI/ML
                  </h4>
                  <p className="text-elegant-slate">Chandigarh University</p>
                  <p className="text-elegant-slate text-sm">2022 – 2025</p>
                </div>
                
                <div className="border-l-4 border-elegant-dusty-blue pl-6">
                  <h4 className="font-semibold text-elegant-charcoal text-lg">
                    12th Grade
                  </h4>
                  <p className="text-elegant-slate">Central Academy, Alwar</p>
                  <p className="text-elegant-slate text-sm">2019 – 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
