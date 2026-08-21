import React, { useState } from 'react';
import { landingData } from '../data/landingData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { faq } = landingData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F3EFE4] border-t border-[#234D35]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-[#5F7547] text-xs font-bold uppercase tracking-widest">
            <span>08 — FAQ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight">
            Dúvidas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-[#20251F]/85">
            Respostas claras e diretas para tudo o que você precisa saber sobre o Menu da Virada.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#234D35]/10 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left font-serif font-bold text-lg sm:text-xl text-[#234D35] flex items-center justify-between gap-4 focus:outline-none hover:text-[#5F7547] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#234D35] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-[#5F7547]' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#20251F]/85 leading-relaxed border-t border-[#234D35]/5">
                      <p className="pt-4">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
