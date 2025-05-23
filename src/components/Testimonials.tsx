import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Working with Creativo was a game-changer for our business. Their team delivered a website that exceeded our expectations and has significantly improved our online presence.",
      author: "Jennifer Adams",
      position: "CEO",
      company: "TechStart Inc."
    },
    {
      content: "The team at Creativo brought our vision to life with their exceptional design and development skills. They were responsive, professional, and delivered on time.",
      author: "Michael Roberts",
      position: "Marketing Director",
      company: "Global Solutions"
    },
    {
      content: "I've worked with many agencies over the years, but Creativo stands out for their creativity, attention to detail, and commitment to client satisfaction.",
      author: "Lisa Chen",
      position: "Founder",
      company: "Innovate Labs"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 relative">
            <div className="absolute -top-6 left-10 bg-blue-600 rounded-full p-3">
              <Quote className="h-6 w-6 text-white" />
            </div>
            
            <div className="overflow-hidden">
              <div 
                className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                <p className="text-lg md:text-xl text-slate-700 mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <p className="font-semibold text-slate-800">{testimonials[currentIndex].author}</p>
                  <p className="text-slate-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={goToPrev}
              className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`block h-2 w-2 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={goToNext}
              className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;