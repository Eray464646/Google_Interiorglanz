import React from 'react';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BeforeAfter } from './components/BeforeAfter';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <SEO 
        title="Mobile Autoreinigung & Autoaufbereitung Nürnberg"
        description="Mobile Autoreinigung und Autoaufbereitung in Nürnberg. Wir kommen zu Ihnen – zuhause oder ins Büro. Premium Innen- & Außenreinigung, Pakete & Einzelleistungen. Jetzt Termin anfragen."
      />
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        {/* Pricing Section with Light Background */}
        <Pricing />
        {/* Services Section with Yellow Banner at the top */}
        <Services />
        {/* Interactive Before/After Comparison */}
        <BeforeAfter />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;