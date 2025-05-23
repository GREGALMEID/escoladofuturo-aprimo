import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 md:pt-0 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 z-0"></div>
      <div 
        className="min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}
      >
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas Into <span className="text-blue-400">Digital Experiences</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              We are a creative agency that specializes in building beautiful, functional, and user-friendly digital products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;