
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=2000&q=80')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="md:max-w-3xl lg:max-w-2xl xl:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Your Journey to Global Education Starts Here
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Expert guidance for your international education aspirations. 
            Get personalized assistance with university applications, visas, 
            and scholarships for studying abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-edu-accent-500 hover:bg-edu-accent-600 text-white px-8 py-6 text-lg">
              Explore Programs
            </Button>
            <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/30 px-8 py-6 text-lg backdrop-blur-sm">
              Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/10 backdrop-blur-md p-6 rounded-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">200+</h3>
            <p className="text-white/80">Universities</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">15+</h3>
            <p className="text-white/80">Countries</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">5000+</h3>
            <p className="text-white/80">Students Placed</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">98%</h3>
            <p className="text-white/80">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
