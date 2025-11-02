"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          MTV Condos
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/properties" className="text-gray-600 hover:text-primary transition-colors">
            Properties
          </Link>
          <Link to="/amenities" className="text-gray-600 hover:text-primary transition-colors">
            Amenities
          </Link>
          <Link to="/events" className="text-gray-600 hover:text-primary transition-colors">
            Events
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <Button variant="outline">Login</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/properties" className="text-gray-600 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Properties
            </Link>
            <Link to="/amenities" className="text-gray-600 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Amenities
            </Link>
            <Link to="/events" className="text-gray-600 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Contact
            </Link>
            <Button variant="outline" className="w-full mt-2">Login</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;