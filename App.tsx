import React from 'react';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-brand-light min-h-screen flex flex-col">
      <SEO 
        title="Premium Autoreinigung & Autoaufbereitung"
        description="Ihr Experte für professionelle Autoreinigung und Autoaufbereitung in Nürnberg. Innenreinigung, Lackpolitur & Keramikversiegelung. Jetzt Termin vereinbaren!"
      />
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;