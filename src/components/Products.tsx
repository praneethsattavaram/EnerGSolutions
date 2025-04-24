import React, { useState } from 'react';
import { Fuel, Droplet, Factory, Flame } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'fuel' | 'industrial';
};

const productList: Product[] = [
  {
    id: 1,
    name: 'B20 Blended Fuel',
    description: 'A blend of 20% biodiesel and 80% petroleum diesel, offering reduced emissions without sacrificing performance.',
    icon: <Droplet className="h-10 w-10 text-blue-600" />,
    category: 'fuel'
  },
  {
    id: 2,
    name: 'B100 Biofuel',
    description: 'Pure biodiesel made from renewable resources, providing a sustainable alternative to conventional diesel.',
    icon: <Droplet className="h-10 w-10 text-green-600" />,
    category: 'fuel'
  },
  {
    id: 3,
    name: 'Fuel Oil',
    description: 'High-quality fuel oil suitable for various industrial applications and heating purposes.',
    icon: <Flame className="h-10 w-10 text-orange-600" />,
    category: 'fuel'
  },
  {
    id: 4,
    name: 'Rubber Pyrolysis Oil',
    description: 'Oil produced from the thermal decomposition of rubber waste, offering a sustainable energy source.',
    icon: <Fuel className="h-10 w-10 text-gray-600" />,
    category: 'fuel'
  },
  {
    id: 5,
    name: 'Industrial Oil',
    description: 'Specialized oils designed for industrial machinery and equipment, ensuring smooth operation.',
    icon: <Factory className="h-10 w-10 text-blue-800" />,
    category: 'fuel'
  },
  {
    id: 6,
    name: 'Gypsum',
    description: 'High-grade gypsum for construction, agriculture, and industrial applications.',
    icon: <Factory className="h-10 w-10 text-gray-500" />,
    category: 'industrial'
  },
  {
    id: 7,
    name: 'Coal',
    description: 'Quality coal for energy generation and industrial processes, sourced from reliable mines.',
    icon: <Flame className="h-10 w-10 text-gray-800" />,
    category: 'industrial'
  },
  {
    id: 8,
    name: 'Limestone',
    description: 'Premium limestone for construction, agriculture, and industrial applications.',
    icon: <Factory className="h-10 w-10 text-gray-400" />,
    category: 'industrial'
  },
  {
    id: 9,
    name: 'Calcite Powder',
    description: 'Fine calcite powder for various industrial applications including paper, plastics, and paints.',
    icon: <Factory className="h-10 w-10 text-gray-300" />,
    category: 'industrial'
  },
  {
    id: 10,
    name: 'Soap Stone Powder',
    description: 'High-quality soap stone powder for cosmetics, paper, and other industrial applications.',
    icon: <Factory className="h-10 w-10 text-blue-200" />,
    category: 'industrial'
  }
];

const Products: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fuel' | 'industrial'>('all');
  
  const filteredProducts = filter === 'all' 
    ? productList 
    : productList.filter(product => product.category === filter);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Products</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We offer a wide range of high-quality fuels and industrial products to meet the diverse needs of our clients.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-gray-100'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter('fuel')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'fuel' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-gray-100'
              }`}
            >
              Fuel Products
            </button>
            <button
              onClick={() => setFilter('industrial')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filter === 'industrial' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-gray-100'
              }`}
            >
              Industrial Products
            </button>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {product.icon}
                  <h3 className="text-xl font-bold text-slate-900 ml-3">{product.name}</h3>
                </div>
                <p className="text-slate-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;