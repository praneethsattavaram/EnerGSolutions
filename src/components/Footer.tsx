import React from 'react';
import { Link } from './Link';
import { Droplet, Facebook, Twitter,  Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            {/* <div className="flex items-center mb-4">
              <Droplet className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">EnerG Solutions</span>
            </div> */}
            <div className="flex-shrink-0 flex items-center">
            <img 
            // src="src/images/EnerG SOlutions Logo.jpg" alt="EnerG Logo" 
            src="src/images/logo.png"
            alt="EnerG Logo"
            className="h-12 w-45" />
            {/* <span className="ml-2 text-xl font-bold text-white">EnerG Solutions</span> */}
          </div>
            <br></br>
            <p className="text-gray-400 mb-4">
              Your trusted partner for high-quality fuel and industrial products.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a> */}
              <a href="https://x.com/BusinessEnerg" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/energ-solutions/?viewAsMember=true" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-white transition-colors duration-300">Products</Link>
              </li>
              <li>
                <Link href="#clients" className="text-gray-400 hover:text-white transition-colors duration-300">Clients</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors duration-300">B20 Blended Fuel</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors duration-300">B100 Biofuel</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors duration-300">Fuel Oil</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors duration-300">Industrial Products</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">#4C, White Waters, Timber Lake Colony,</p>
              <p className="mb-2">Khajaguda, Hyderabad - 81, Telangana.</p>
              {/* <p className="mb-2">Country, Postal Code</p> */}
              <p className="mb-2">+91 97048 11818, +91 70136 82862</p>
              <p>Email: business@energsolutions.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} EnerG Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;