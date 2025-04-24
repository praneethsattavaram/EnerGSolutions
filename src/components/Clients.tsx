import React from 'react';
import { Building2, Hammer, Factory, Fuel, Building, Pickaxe, Truck, Server, CheckCircle } from 'lucide-react';

const clients = [
  {
    id: 1,
    name: 'My Home',
    industry: 'Construction',
    logo: <Building className="h-12 w-12 text-blue-600" />,
  },
  {
    id: 2,
    name: 'Sree Cement',
    industry: 'Manufacturing',
    logo: <Factory className="h-12 w-12 text-green-600" />,
  },
  {
    id: 3,
    name: 'Vizag Steel Plant',
    industry: 'Energy',
    logo: <Fuel className="h-12 w-12 text-purple-600" />,
  },
  {
    id: 4,
    name: 'SRRC Infra',
    industry: 'Infrastructure',
    logo: <Hammer className="h-12 w-12 text-gray-600" />,
  },
  {
    id: 5,
    name: 'PML Mining',
    industry: 'Mining',
    logo: <Pickaxe className="h-12 w-12 text-red-600" />,
  },
  {
    id: 6,
    name: 'Raghava Infra',
    industry: 'Construction',
    logo: <Building2 className="h-12 w-12 text-yellow-600" />,
  },
  {
    id: 7,
    name: 'Tirumala Transports',
    industry: 'Transportation',
    logo: <Truck className="h-12 w-12 text-indigo-600" />,
  },
  {
    id: 8,
    name: 'Adani Data Centers',
    industry: 'Technology',
    logo: <Server className="h-12 w-12 text-orange-600" />,
  }
];

const benefits = [
  'Industry-leading quality standards',
  'Reliable and timely delivery',
  'Competitive pricing structure',
  'Customized solutions for specific needs',
  'Excellent customer service'
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Valued Clients</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We're proud to serve leading companies across various industries, providing them with high-quality fuel products.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        {/* Clients grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {client.logo}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{client.name}</h3>
              <p className="text-sm text-slate-500">{client.industry}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Our Clients Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;