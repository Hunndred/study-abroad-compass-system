
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  university: string;
  destination: string;
  active: boolean;
  onClick: () => void;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, name, title, image, university, destination, active, onClick 
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-lg p-8 cursor-pointer transition-all duration-500 fade-in-section",
        active ? "border-4 border-edu-accent-500 scale-100 opacity-100" : "border border-gray-100 scale-95 opacity-60"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <img 
          src={image} 
          alt={name}
          className="w-20 h-20 object-cover rounded-full border-4 border-edu-accent-100" 
        />
        <div>
          <p className="text-gray-600 italic mb-4">"{quote}"</p>
          <h4 className="font-semibold text-edu-blue-800">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
          <div className="flex items-center mt-3 text-sm">
            <span className="bg-edu-blue-50 text-edu-blue-700 px-2 py-1 rounded-md mr-2">{university}</span>
            <span className="bg-edu-accent-50 text-edu-accent-700 px-2 py-1 rounded-md">{destination}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "The guidance I received made the entire application process so much easier. I'm now studying at my dream university thanks to Study Abroad Compass!",
      name: "Sarah Johnson",
      title: "Engineering Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80",
      university: "University of Toronto",
      destination: "Canada"
    },
    {
      quote: "From visa applications to scholarship advice, they supported me every step of the way. I couldn't have done it without their expertise.",
      name: "Michael Chang",
      title: "Business Administration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
      university: "University of Melbourne",
      destination: "Australia"
    },
    {
      quote: "Their personalized approach to counseling helped me find the perfect program that aligned with my career goals and budget constraints.",
      name: "Emma Rodriguez",
      title: "Psychology Graduate",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&h=300&q=80",
      university: "King's College London",
      destination: "United Kingdom"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-edu-blue-900">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from students who turned their international education dreams into reality 
            with our guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              university={testimonial.university}
              destination={testimonial.destination}
              active={index === activeTestimonial}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
