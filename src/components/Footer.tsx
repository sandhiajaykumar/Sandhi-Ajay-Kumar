
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/sandhiajaykumar",
      color: "hover:text-blue-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/ajay-kumar-sandhi", 
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:sandhiajay02@gmail.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-16 w-28 h-28 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                  Sandhi Ajay Kumar
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Aspiring Software Developer specializing in AI & Data Science. 
                  Building meaningful digital experiences with modern technologies.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for new opportunities</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {navigationLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-left text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform text-lg"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <div className="space-y-4">
                <div className="text-gray-300">
                  <p className="text-lg">📍 Bhimavaram, Andhra Pradesh</p>
                  <p className="text-lg">📧 sandhiajay02@gmail.com</p>
                  <p className="text-lg">📞 +91 9640282886</p>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(social.url, "_blank")}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20 border border-white/20`}
                      title={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© 2024 Sandhi Ajay Kumar. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="font-medium">Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4">
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white">Open Source</span> • 
                <span className="ml-1">Feel free to explore the code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
