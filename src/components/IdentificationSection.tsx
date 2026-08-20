import React from 'react';
import { landingData } from '../data/landingData';
import { Clock, HelpCircle, UtensilsCrossed, AlertCircle } from 'lucide-react';

export const IdentificationSection: React.FC = () => {
  const { identification } = landingData;

  const icons = [
    <Clock className="w-5 h-5 text-[#234D35]" />,
    <HelpCircle className="w-5 h-5 text-[#234D35]" />,
    <UtensilsCrossed className="w-5 h-5 text-[#234D35]" />,
    <AlertCircle className="w-5 h-5 text-[#234D35]" />
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F5ED] border-y border-[#234D35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#5F7547] text-xs font-bold uppercase tracking-widest">
            <span>01 — O PROBLEMA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight">
            {identification.title}
          </h2>
          <p className="text-base sm:text-lg text-[#20251F]/85">
            {identification.subtitle}
          </p>
        </div>

        {/* Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {identification.situations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#234D35]/10 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
            >
              <div className="p-3 rounded-xl bg-[#F8F5ED] border border-[#234D35]/10 shrink-0">
                {icons[idx % icons.length]}
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#234D35]">
                  "{item.quote}"
                </h3>
                <p className="text-sm text-[#20251F]/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Statement */}
        <div className="pt-6">
          <div className="inline-block bg-[#234D35] text-[#F8F5ED] px-8 py-5 rounded-2xl shadow-lg border border-[#E7B94A]/30 max-w-2xl mx-auto">
            <p className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#E7B94A] leading-snug">
              "{identification.conclusion}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
