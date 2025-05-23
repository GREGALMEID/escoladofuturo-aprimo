import React from 'react';
import { Code, PenTool, Smartphone, Megaphone } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="bg-blue-100 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We build responsive, fast, and user-friendly websites and web applications using the latest technologies.',
      icon: <Code className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'UI/UX Design',
      description: 'Our design team creates beautiful, intuitive interfaces that engage users and elevate your brand.',
      icon: <PenTool className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Mobile Development',
      description: 'We develop native and cross-platform mobile applications that provide seamless experiences.',
      icon: <Smartphone className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Digital Marketing',
      description: 'From SEO to social media, we help you reach your audience and grow your online presence.',
      icon: <Megaphone className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a wide range of digital services to help your business grow and succeed in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;