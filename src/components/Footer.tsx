
import React from 'react';
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-edu-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Study Abroad Compass</h3>
            <p className="text-white/70 mb-6">
              Your trusted partner for international education opportunities and expert guidance
              on studying abroad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#destinations" className="text-white/70 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">United States</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">United Kingdom</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Canada</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Australia</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">New Zealand</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Germany</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for updates on university deadlines, scholarships, and visa news.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-edu-accent-400 text-white placeholder-white/50"
              />
              <button 
                type="submit" 
                className="bg-edu-accent-500 hover:bg-edu-accent-600 px-4 py-2 rounded-r-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Study Abroad Compass. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
