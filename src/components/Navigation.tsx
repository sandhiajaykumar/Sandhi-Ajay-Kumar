
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    // Convert Google Drive view link to direct download link
    const fileId = "1rT2JcccUVqwRQQVHpsQcvl0f5LjtLuQk";
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(directDownloadUrl, "_blank");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SAK
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <Button
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};
