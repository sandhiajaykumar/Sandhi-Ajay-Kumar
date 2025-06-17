
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles, Code, Database } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Eduswap",
      description: "A comprehensive peer-to-peer education platform featuring secure Firebase authentication, real-time data synchronization with Firestore, and an intuitive React.js interface for seamless learning experiences.",
      tech: ["React.js", "Firebase", "Firestore", "Authentication", "CSS3"],
      github: "https://github.com/sandhiajaykumar/eduswap-main",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      icon: "🎓",
      features: ["Real-time Chat", "User Authentication", "Resource Sharing"]
    },
    {
      title: "Petrol Estimation Tracker",
      description: "A web application that gives the amount that required to complete a trip based on starting point and destination point ",
      tech: [ "Express.js", "React.js", "Node.js", "Free maps APIs"],
      github: "https://github.com/sandhiajaykumar/Petrol-estimation-tracker",
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
      icon: "🛒",
      features: ["Shopping Cart", "Payment Gateway", "Admin Dashboard"]
    },
    {
      title: "E-Commerce Application",
      description: "A full-featured shopping platform built with MERN stack, featuring comprehensive product management, secure payment integration, RESTful APIs, and fully responsive design for optimal user experience.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Firebase", "REST APIs"],
      github: "https://github.com/sandhiajaykumar/ecommerce",
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
      icon: "🛒",
      features: ["Shopping Cart", "Payment Gateway", "Admin Dashboard"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-32 left-20 w-28 h-28 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
      <div className="absolute bottom-40 right-24 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-300"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <span className="text-gray-600 font-medium">Things I've built</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world applications showcasing my technical skills and problem-solving abilities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                  {/* Project Header/Visual */}
                  <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative text-center">
                      <div className="text-6xl mb-4">{project.icon}</div>
                      <div className="text-white/80 text-lg font-semibold">{project.title}</div>
                    </div>
                    
                    {/* Floating tech badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={tech} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span key={feature} className={`bg-gradient-to-r ${project.bgGradient} border border-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700`}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/50 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Explore More Projects</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                These are just a few highlights. Check out my GitHub for more projects and contributions.
              </p>
              <Button
                onClick={() => window.open("https://github.com/sandhiajaykumar", "_blank")}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Github className="w-6 h-6 mr-3" />
                See All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
