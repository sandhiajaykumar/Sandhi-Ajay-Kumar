
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "Excler",
      period: "May 2024 – Jun 2024",
      description: "Hands-on MERN stack training and integration projects. Gained practical experience in building full-stack applications with MongoDB, Express.js, React, and Node.js.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      icon: "🚀"
    },
    {
      title: "Frontend Developer Intern",
      company: "Codeway Solutions", 
      period: "Feb 2024 – Mar 2024",
      description: "Built responsive UI with HTML, JavaScript, and CSS. Improved user experience with adaptive design patterns and modern frontend development practices.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      icon: "💻"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-16 w-28 h-28 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-6 py-3 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-gray-600 font-medium">My professional journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world experience building applications and solving problems
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10 hidden md:block group-hover:scale-125 transition-transform duration-300`}></div>
                  
                  <div className="md:ml-20">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-14 h-14 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {exp.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Briefcase className="w-5 h-5 text-gray-500" />
                                <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed text-lg">{exp.description}</p>
                          
                          <div className="mt-6">
                            <div className={`inline-block bg-gradient-to-r ${exp.bgColor} border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700`}>
                              {exp.period.includes('2024') ? 'Recent Experience' : 'Past Experience'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for New Challenges</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm actively seeking new opportunities to contribute to innovative projects and grow as a developer.
              </p>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Briefcase className="w-5 h-5" />
                Open to Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
