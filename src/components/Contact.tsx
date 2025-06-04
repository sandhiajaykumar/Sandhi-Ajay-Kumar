
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Github, Linkedin, MapPin, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9640282886",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Mail,
      title: "Email", 
      value: "sandhiajay02@gmail.com",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhimavaram, Andhra Pradesh, India",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/sandhiajaykumar",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/ajay-kumar-sandhi",
      color: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-16 w-28 h-28 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-6 py-3 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="text-gray-600 font-medium">Let's start a conversation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's work together</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development. Feel free to reach out!
                </p>
                
                {/* Contact Info Cards */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                        <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <contact.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-lg">{contact.title}</p>
                          <p className="text-gray-600 font-medium">{contact.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        onClick={() => window.open(social.url, "_blank")}
                        size="lg"
                        className={`bg-gradient-to-r ${social.color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        <social.icon className="w-5 h-5 mr-2" />
                        {social.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Quick Response</h4>
                <p className="text-gray-600 mb-4">
                  I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Usually responds within a few hours</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Send me a message</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full h-32 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
