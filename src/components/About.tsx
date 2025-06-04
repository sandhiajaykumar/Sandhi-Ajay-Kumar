
import { Sparkles, GraduationCap, MapPin, Code, Trophy } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 font-medium">Get to know me better</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-20"></div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 relative">
                  I like to make simple and <span className="text-blue-600">elegant</span> design
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                  As a Computer Science undergraduate with specialization in <span className="font-semibold text-blue-600">AI & Data Science</span>, 
                  I am passionate about creating user interfaces that are intuitive, visually appealing, and easy to use.
                </p>
                <p className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                  With hands-on experience in both frontend and full-stack development through internships and personal projects, 
                  I am keen to collaborate on impactful tech projects and am open to new opportunities in the software development field.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  🚀 Innovation Driven
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  🎯 Detail Oriented
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  🤝 Team Player
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Education Card */}
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Education</h4>
                </div>
                <div className="space-y-4">
                  <div className="relative pl-6 border-l-4 border-blue-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <h5 className="font-bold text-gray-900 text-lg">B.Tech in CSE (AI & Data Science)</h5>
                    <p className="text-gray-600 font-medium">Vishnu Institute of Technology (2022–Present)</p>
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mt-2">
                      GPA: 8.04/10
                    </div>
                  </div>
                  <div className="relative pl-6 border-l-4 border-green-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                    <h5 className="font-bold text-gray-900 text-lg">Intermediate - MPC</h5>
                    <p className="text-gray-600 font-medium">Sri Chaitanya Junior College (2020–2022)</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Facts Card */}
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Quick Facts</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🏠", text: "From Bhimavaram, AP", color: "from-blue-500 to-blue-600" },
                    { icon: "🤖", text: "AI & Data Science", color: "from-green-500 to-green-600" },
                    { icon: "💻", text: "Full-stack Developer", color: "from-purple-500 to-purple-600" },
                    { icon: "🚀", text: "Open to collaborate", color: "from-orange-500 to-orange-600" }
                  ].map((fact, index) => (
                    <div key={index} className={`bg-gradient-to-r ${fact.color} text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      <div className="text-2xl mb-2">{fact.icon}</div>
                      <div className="text-sm font-semibold">{fact.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Achievements Card */}
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Trophy className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Achievements</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                    <span className="text-3xl">🏆</span>
                    <span className="text-gray-700 font-medium">Runner-Up – Spark Tank 2024 Competition</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <span className="text-3xl">🧠</span>
                    <span className="text-gray-700 font-medium">Participant – GDSC 24-Hour Hackathon 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
