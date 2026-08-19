import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen01Icon, KitchenUtensilsIcon, ShoppingBag01Icon } from "@hugeicons/core-free-icons";
import React from 'react';
import { landingData } from '../data/landingData';
export const HowItWorksSection: React.FC = () => {
  const { howItWorks } = landingData;

  const icons = [
    <HugeiconsIcon icon={BookOpen01Icon} className="w-6 h-6 text-[#234D35]" />,
    <HugeiconsIcon icon={ShoppingBag01Icon} className="w-6 h-6 text-[#234D35]" />,
    <HugeiconsIcon icon={KitchenUtensilsIcon} className="w-6 h-6 text-[#234D35]" />
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F5ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#5F7547] text-xs font-bold uppercase tracking-widest">
            <span>03 — COMO FUNCIONA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight">
            Como funciona na sua rotina
          </h2>
          <p className="text-base sm:text-lg text-[#20251F]/85">
            Apenas 3 passos simples para transformar qualquer jantar cansativo em um momento gostoso.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {howItWorks.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-[#234D35]/10 shadow-sm relative flex flex-col justify-between text-left space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#F8F5ED] border border-[#234D35]/10 flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <span className="font-serif font-bold text-3xl text-[#C99A2C]">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#234D35]">
                  {step.title}
                </h3>

                <p className="text-sm text-[#20251F]/85 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
