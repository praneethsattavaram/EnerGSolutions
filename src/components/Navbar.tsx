import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="src/images/logo.png"
              alt="EnerG Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-white text-lg font-semibold hover:text-blue-400 transition">Home</Link>
            <Link href="#about" className="text-white text-lg font-semibold hover:text-blue-400 transition">About Us</Link>
            <Link href="#products" className="text-white text-lg font-semibold hover:text-blue-400 transition">Products</Link>
            <Link href="#clients" className="text-white text-lg font-semibold hover:text-blue-400 transition">Clients</Link>
            <Link href="#contact" className="text-white text-lg font-semibold hover:text-blue-400 transition">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#home" className="text-white block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#about" className="text-white block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="#products" className="text-white block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="#clients" className="text-white block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>Clients</Link>
            <Link href="#contact" className="text-white block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;