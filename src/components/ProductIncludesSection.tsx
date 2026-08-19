import React from 'react';
import { landingData } from '../data/landingData';
import { BookOpen, Check, Sparkles } from 'lucide-react';

export const ProductIncludesSection: React.FC = () => {
  const { productIncludes } = landingData;

  return (
    <section id="conteudo" className="py-20 md:py-28 bg-[#F8F5ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-[#5F7547] text-xs font-bold uppercase tracking-widest">
            <span>06 — O QUE VOCÊ RECEBE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight">
            O que você recebe ao adquirir o Menu da Virada
          </h2>
          <p className="text-base sm:text-lg text-[#20251F]/85">
            Tudo o que você precisa para simplificar o seu jantar em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Product Card */}
          <div className="lg:col-span-6 bg-[#234D35] text-[#F8F5ED] p-8 md:p-10 rounded-3xl border-2 border-[#E7B94A]/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E7B94A]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7B94A] text-[#234D35] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>PRODUTO PRINCIPAL</span>
              </div>

              <div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#F8F5ED]">
                  {productIncludes.mainProduct.title}
                </h3>
                <p className="text-sm text-[#F8F5ED]/80 mt-2 italic">
                  {productIncludes.mainProduct.subtitle}
                </p>
              </div>

              <ul className="space-y-3.5 pt-2">
                {productIncludes.mainProduct.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#F8F5ED]/90">
                    <div className="w-5 h-5 rounded-full bg-[#E7B94A]/20 flex items-center justify-center text-[#E7B94A] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F8F5ED]/10 flex items-center justify-between text-xs text-[#E7B94A]">
              <span>Formato PDF de Alta Resolução</span>
              <span>Acesso Vitalício</span>
            </div>
          </div>

          {/* Bonuses List */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="text-left pb-2">
              <h4 className="font-serif font-bold text-xl text-[#234D35] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#5F7547]" />
                Bônus Exclusivos Inclusos
              </h4>
              <p className="text-xs text-[#20251F]/85">
                Você recebe esses 3 materiais complementares sem nenhum custo adicional.
              </p>
            </div>

            {productIncludes.bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#234D35]/10 shadow-sm hover:border-[#234D35]/30 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#234D35] bg-[#234D35]/10 px-2.5 py-0.5 rounded-full">
                    {bonus.badge}
                  </span>
                  <span className="text-xs font-bold text-[#5F7547]">
                    {bonus.valueTag}
                  </span>
                </div>

                <h5 className="font-serif font-bold text-lg text-[#234D35]">
                  {bonus.title}
                </h5>

                <p className="text-xs sm:text-sm text-[#20251F]/85 leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
