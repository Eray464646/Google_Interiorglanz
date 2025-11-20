import React from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-950 font-bold tracking-widest uppercase text-sm mb-3 bg-brand-gold inline-block px-3 py-1 rounded-sm">Häufige Fragen</h2>
          <h3 className="font-sans text-3xl md:text-4xl font-bold text-brand-950 mb-4">
            Wissenswertes zur Autoaufbereitung
          </h3>
          <p className="text-gray-500 text-lg">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unserem mobilen Service in Nürnberg.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <details key={index} className="group bg-white rounded-lg shadow-sm border border-gray-200 open:border-brand-gold/50 open:ring-1 open:ring-brand-gold/20 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                <h4 className="font-bold text-brand-950 text-lg pr-8 group-hover:text-brand-gold-dark transition-colors">
                  {item.question}
                </h4>
                <div className="text-brand-gold flex-shrink-0">
                  <Plus className="group-open:hidden transition-transform duration-300" size={24} />
                  <Minus className="hidden group-open:block transition-transform duration-300" size={24} />
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed animate-fade-in">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};