
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-edu-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-white/80">
            Have questions or ready to start your journey? 
            Connect with our expert education consultants today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg fade-in-section">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder-white/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email"
                    className="bg-white/5 border-white/10 text-white placeholder-white/50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm">Phone Number</label>
                <Input 
                  id="phone" 
                  placeholder="Your phone number"
                  className="bg-white/5 border-white/10 text-white placeholder-white/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your study abroad plans and how we can help"
                  className="bg-white/5 border-white/10 text-white placeholder-white/50 min-h-[120px]"
                />
              </div>
              <Button className="bg-edu-accent-500 hover:bg-edu-accent-600 text-white w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>

          <div className="space-y-8 lg:pl-8 fade-in-section">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-edu-accent-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Main Office:</p>
                    <address className="not-italic text-white/80">
                      123 Education Avenue, Suite 500<br />
                      New York, NY 10001, USA
                    </address>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-edu-accent-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-edu-accent-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-white/80">info@studyabroadcompass.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-edu-accent-400 mr-3" />
                <h4 className="text-xl font-semibold">Book a Free Consultation</h4>
              </div>
              <p className="text-white/80 mb-4">
                Schedule a personalized session with our education experts to discuss your 
                study abroad plans and get tailored guidance.
              </p>
              <Button className="bg-white text-edu-blue-800 hover:bg-white/90 w-full">
                Schedule Now
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <table className="w-full text-white/80">
                <tbody>
                  <tr>
                    <td className="py-2">Monday - Friday:</td>
                    <td className="py-2">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2">Saturday:</td>
                    <td className="py-2">10:00 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2">Sunday:</td>
                    <td className="py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
