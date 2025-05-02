
import React from 'react';
import { cn } from "@/lib/utils";
import { Book, Calendar, FileText, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1", 
      className
    )}>
      <div className="bg-edu-blue-50 p-3 rounded-lg inline-flex mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Book className="h-6 w-6 text-edu-blue-700" />,
      title: "Educational Counseling",
      description: "Personalized guidance to help you choose the right course and university based on your academic profile and career aspirations."
    },
    {
      icon: <FileText className="h-6 w-6 text-edu-blue-700" />,
      title: "University Applications",
      description: "End-to-end assistance with university applications, including essay writing, document preparation, and submission."
    },
    {
      icon: <Calendar className="h-6 w-6 text-edu-blue-700" />,
      title: "Visa Processing",
      description: "Expert support with student visa applications, interview preparation, and documentation to ensure a smooth approval process."
    },
    {
      icon: <Award className="h-6 w-6 text-edu-blue-700" />,
      title: "Scholarship Guidance",
      description: "Information and application assistance for scholarships, grants, and financial aid opportunities at universities worldwide."
    },
    {
      icon: <User className="h-6 w-6 text-edu-blue-700" />,
      title: "Pre-departure Briefings",
      description: "Comprehensive sessions covering accommodation, travel, local culture, and essential information before you leave for your studies abroad."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-edu-blue-900">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600">
            We provide end-to-end support for your international education journey, 
            from selecting the right university to settling into your new country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="fade-in-section"
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-edu-blue-700 hover:bg-edu-blue-800 text-white">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
