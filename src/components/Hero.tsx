import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
           backgroundImage: 
          //  "url('https://as2.ftcdn.net/v2/jpg/02/97/36/43/1000_F_297364398_IdEXPFNyTZaYNsT6JiYDpmPfvjXEbDgk.jpg')",

           "url('https://blog.fenstermaker.com/wp-content/uploads/2023/05/refinery-g6d928f125_1920.jpg')",
        
          
        }}
      
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Powering Industries with <span className="text-blue-500"> <br></br>Premium Fuels</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          EnerG Solutions specializes in sourcing and trading high-quality fuels and industrial products for businesses worldwide.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#products" 
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Explore Products
          </Link>
          <Link 
            href="#contact" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-slate-900 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-white">
          <ArrowDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
};

export default Hero