
import React from 'react';
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  country: string;
  image: string;
  universities: number;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ country, image, universities, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg fade-in-section">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
      
      <img 
        src={image}
        alt={`Study in ${country}`}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-center mb-2">
          <MapPin className="h-5 w-5 text-edu-accent-400 mr-2" />
          <h3 className="text-2xl font-bold text-white">{country}</h3>
        </div>
        <p className="text-sm text-white/80 mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {universities}+ Universities
          </span>
          <Button variant="link" className="text-white hover:text-edu-accent-300 p-0">
            Explore Options
          </Button>
        </div>
      </div>
    </div>
  );
};

const Destinations: React.FC = () => {
  const destinations = [
    {
      country: "United States",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1000&q=80",
      universities: 150,
      description: "World-class education with flexibility in course choices and countless research opportunities."
    },
    {
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1000&q=80",
      universities: 90,
      description: "Traditional excellence with a modern approach to education and globally recognized qualifications."
    },
    {
      country: "Canada",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1000&q=80",
      universities: 80,
      description: "High-quality education, multicultural environment, and post-study work opportunities."
    },
    {
      country: "Australia",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1000&q=80",
      universities: 40,
      description: "Innovative education system with a strong focus on research and practical skills development."
    }
  ];

  return (
    <section id="destinations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-edu-blue-900">
            Popular Study Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Explore top academic destinations across the globe offering quality education and 
            transformative experiences for international students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={index}
              country={destination.country}
              image={destination.image}
              universities={destination.universities}
              description={destination.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-edu-blue-50 p-8 rounded-xl fade-in-section">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-edu-blue-800 mb-2">
                Not sure which destination is right for you?
              </h3>
              <p className="text-gray-600">
                Let our experts help you find the perfect fit based on your academic goals, budget, and preferences.
              </p>
            </div>
            <Button className="bg-edu-blue-700 hover:bg-edu-blue-800 text-white whitespace-nowrap">
              Get Free Counseling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
