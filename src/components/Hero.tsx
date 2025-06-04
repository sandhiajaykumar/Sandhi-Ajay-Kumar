
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-blue-100/30"></div>
      </div>
      
      {/* Floating geometric shapes with improved animations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-sm animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-sm animate-pulse delay-500"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping delay-700"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced profile section */}
          <div className="relative mb-12">
            <div className="w-48 h-48 mx-auto mb-8 relative group">
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 animate-spin-slow opacity-75 blur-sm"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300 border-4 border-white">
                <img 
                  src="https://i.postimg.cc/rFMN4W2L/1741953263320.jpg" 
                  alt="Sandhi Ajay Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Sparkle effect */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>
          
          {/* Enhanced floating skill badges */}
          <div className="absolute -top-5 left-1/4 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg animate-bounce backdrop-blur-sm border border-white/20">
              🚀 React Developer
            </div>
          </div>
          <div className="absolute top-24 right-1/4 transform translate-x-1/2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-300 backdrop-blur-sm border border-white/20">
              💻 MERN Stack
            </div>
          </div>
          <div className="absolute -bottom-5 left-1/3 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-700 backdrop-blur-sm border border-white/20">
              🤖 AI & Data Science
            </div>
          </div>
          
          {/* Enhanced typography */}
          <div className="space-y-3 mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 animate-fade-in tracking-tight">
              <span className="block">Sandhi</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Ajay Kumar
              </span>
            </h1>
            
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3 shadow-lg animate-fade-in delay-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Aspiring Software Developer
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500 font-light">
              Building meaningful digital experiences with code. Specializing in 
              <span className="font-semibold text-blue-600"> AI & Data Science </span> 
              with a passion for 
              <span className="font-semibold text-purple-600"> full-stack development</span>.
            </p>
          </div>
          
          {/* Enhanced action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-700">
            <Button
              onClick={() => window.open("https://github.com/sandhiajaykumar", "_blank")}
              variant="outline"
              size="lg"
              className="rounded-full hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-gray-300 hover:bg-white/90 shadow-lg text-gray-700 font-semibold"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              onClick={() => window.open("https://linkedin.com/in/ajay-kumar-sandhi", "_blank")}
              size="lg"
              className="rounded-full hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg font-semibold"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              onClick={() => window.open("mailto:sandhiajay02@gmail.com", "_blank")}
              variant="outline"
              size="lg"
              className="rounded-full hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-gray-300 hover:bg-white/90 shadow-lg text-gray-700 font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </div>
          
          {/* Enhanced stats section */}
          <div className="inline-flex items-center gap-8 bg-white/60 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl animate-fade-in delay-1000 border border-white/40">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">2+</div>
              <div className="text-sm text-gray-600 font-medium">Years Learning</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">5+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Built</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">10+</div>
              <div className="text-sm text-gray-600 font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => {
          const element = document.getElementById('about');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-gray-600 transition-colors">
            <ArrowDown className="w-4 h-4 text-gray-400 mt-2 animate-pulse group-hover:text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
};
