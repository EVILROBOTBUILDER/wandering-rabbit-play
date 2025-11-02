"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MTV Condos</h3>
            <p className="text-gray-400 mb-4">
              Luxury living in the heart of the city. Experience comfort, convenience, and community.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-white transition-colors">Properties</Link></li>
              <li><Link to="/amenities" className="text-gray-400 hover:text-white transition-colors">Amenities</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1" size={16} />
                <span>123 Main Street, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={16} />
                <span>info@mtvcondos.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md text-gray-800"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MTV Condos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;