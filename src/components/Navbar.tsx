import React, { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Palette className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-slate-800">Creativo</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#team" className="text-slate-700 hover:text-blue-600 transition-colors">Team</a>
            <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a 
                href="#services" 
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a 
                href="#team" 
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Team
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;