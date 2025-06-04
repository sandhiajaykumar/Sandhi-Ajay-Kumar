
import { Code, Database, Wrench, Users, Sparkles } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "HTML5", "CSS3", "SQL", "JavaScript"],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      title: "Libraries & Tools", 
      icon: Wrench,
      skills: ["Pandas", "NumPy", "Git", "GitHub", "Google Colab", "Visual Studio"],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "Firebase", "Firestore"],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Time Management", "Communication", "Team Work", "Problem Solving"],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-green-500" />
              <span className="text-gray-600 font-medium">What I bring to the table</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and solving complex problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="group">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 h-full">
                  {/* Header */}
                  <div className="mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}></div>
                  </div>
                  
                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className={`bg-gradient-to-r ${category.bgColor} border border-white/60 px-4 py-3 rounded-xl text-center font-medium text-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default`}
                        style={{
                          animationDelay: `${index * 100 + skillIndex * 50}ms`
                        }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Certificates Section */}
          <div className="text-center">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/50 max-w-4xl mx-auto">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Certificates & Achievements</h3>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {["MERN Stack (ExcelR)", "Python (Kaggle)", "Pandas (Kaggle)"].map((cert, index) => (
                  <div key={cert} className="group">
                    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">🎓</span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{cert.split(' (')[0]}</h4>
                      <p className="text-gray-600 text-sm font-medium">
                        {cert.includes('(') ? `By ${cert.split('(')[1].replace(')', '')}` : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
