import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Palette } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Palette className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Creativo</span>
            </div>
            <p className="text-slate-300 mb-4">
              We are a creative agency that specializes in building beautiful, functional, and user-friendly digital products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Mobile Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Brand Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-300">123 Design Street</li>
              <li className="text-slate-300">Creative City, CA 94103</li>
              <li className="text-slate-300">hello@creativo.com</li>
              <li className="text-slate-300">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Creativo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;