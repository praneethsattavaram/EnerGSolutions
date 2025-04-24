import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'EnerG Solutions - Premium Fuel Trading';
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        <FadeIn>
          <About />
        </FadeIn>
        
        <FadeIn>
          <Products />
        </FadeIn>
        
        <FadeIn>
          <Clients />
        </FadeIn>
        
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;