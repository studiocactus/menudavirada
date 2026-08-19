import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, Coffee01Icon, SparklesIcon, HeartIcon } from "@hugeicons/core-free-icons";
import React from 'react';
import { landingData } from '../data/landingData';

export const BenefitsSection: React.FC = () => {
  const { benefits } = landingData;

  const icons = [
    <HugeiconsIcon icon={Clock01Icon} className="w-6 h-6 text-[#E7B94A]" />,
    <HugeiconsIcon icon={SparklesIcon} className="w-6 h-6 text-[#E7B94A]" />,
    <HugeiconsIcon icon={HeartIcon} className="w-6 h-6 text-[#E7B94A]" />,
    <HugeiconsIcon icon={Coffee01Icon} className="w-6 h-6 text-[#E7B94A]" />
  ];

  return (
    <section className="py-20 md:py-28 bg-[#234D35] text-[#F8F5ED] relative overflow-hidden">
      {/* Decorative Texture background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F8F5ED_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#E7B94A]">
            POR QUE O MENU DA VIRADA É DIFERENTE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5ED]">
            Tudo o que você precisa para transformar seu jantar
          </h2>
          <p className="text-base sm:text-lg text-[#F8F5ED]/80">
            Pensado estrategicamente para quem deseja comer bem sem ter dor de cabeça na cozinha.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-[#2B5B40] p-8 rounded-2xl border border-[#F8F5ED]/10 flex flex-col justify-between hover:border-[#E7B94A]/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#234D35] flex items-center justify-center border border-[#F8F5ED]/10 group-hover:scale-105 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="font-serif font-bold text-2xl text-[#E7B94A]/40">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#F8F5ED] pt-2">
                  {benefit.title}
                </h3>

                <p className="text-sm text-[#F8F5ED]/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F8F5ED]/10 text-xs text-[#E7B94A] font-medium">
                {benefit.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
