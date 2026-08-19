import React from 'react';
import { landingData } from '../data/landingData';
import { CheckCircle } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const { audience } = landingData;

  return (
    <section className="py-20 md:py-28 bg-[#F3EFE4] border-y border-[#234D35]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-[#5F7547] text-xs font-bold uppercase tracking-widest">
            <span>07 — PARA QUEM É</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight">
            Feito para quem quer comer bem sem complicar.
          </h2>
          <p className="text-base sm:text-lg text-[#20251F]/85">
            Se você se identifica com uma ou mais das situações abaixo, o livro foi feito sob medida para a sua rotina.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {audience.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#234D35]/10 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#234D35] text-[#E7B94A] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-left">
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#234D35]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#20251F]/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
