import React from 'react';
import { TruckIcon, FactoryIcon, GlobeIcon } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About EnerG Solutions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              // src='src/images/EnerG SOlutions Logo.jpg' 
              alt="Biofuel production" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-20 transform transition-all duration-300 group-hover:opacity-0"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Trusted Fuel Trading Partner</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Established with a vision to provide high-quality fuel products to industries worldwide, EnerG Solutions has grown to become a leading player in the fuel trading market. We source premium fuels from reputable companies and deliver them to industries that drive the global economy.
            </p>
            <p className="text-slate-700 mb-8 leading-relaxed">
              Our commitment to quality, reliability, and customer satisfaction has earned us the trust of numerous industrial clients. We leverage our extensive network and industry expertise to provide customized fuel solutions that meet the specific requirements of our clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <TruckIcon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900">Reliable Delivery</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <FactoryIcon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900">Quality Products</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <GlobeIcon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900">Global Reach</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;