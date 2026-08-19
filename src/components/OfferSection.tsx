import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Award01Icon, LockIcon, SmartPhone01Icon, Tick01Icon, BadgeCheckIcon } from "@hugeicons/core-free-icons";
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { handleCheckoutClick } from '../lib/tracking';

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-[#234D35] text-[#F8F5ED] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E7B94A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5F7547]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#E7B94A]">
            OFERTA DE LANÇAMENTO EXCLUSIVA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F5ED]">
            Sua rotina na cozinha mais leve a partir de hoje
          </h2>
          <p className="text-base sm:text-lg text-[#F8F5ED]/80">
            Garanta seu acesso imediato ao 40+ Menu da Virada com todos os bônus inclusos.
          </p>
        </div>

        {/* Pricing Card */}
        <div id="checkout-offer-section" className="bg-[#F8F5ED] text-[#20251F] p-8 sm:p-12 rounded-3xl border-4 border-[#E7B94A] shadow-2xl space-y-8 text-left relative">
          
          {/* Top Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#E7B94A] text-[#234D35] px-6 py-1.5 rounded-full font-sans font-bold text-xs uppercase tracking-widest shadow-md">
            ACESSO VITALÍCIO DIGITAL
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left Included Summary */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif font-bold text-2xl text-[#234D35]">
                O que está incluso no seu pedido:
              </h3>

              <ul className="space-y-3 text-sm text-[#20251F]/80">
                <li className="flex items-center gap-2.5 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#234D35] text-[#E7B94A] flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Ebook Completo:</strong> 40+ Menu da Virada (PDF)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#234D35] text-[#E7B94A] flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Bônus 1:</strong> Cardápio Sugerido de 7 Dias</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#234D35] text-[#E7B94A] flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Bônus 2:</strong> Lista de Compras Inteligente</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#234D35] text-[#E7B94A] flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Bônus 3:</strong> Guia 10 Receitas Express em 15min</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-[#5F7547] font-semibold pt-1">
                  <HugeiconsIcon icon={SmartPhone01Icon} className="w-4 h-4 text-[#234D35]" />
                  <span>Leitura perfeita em Celular, Tablet e Computador</span>
                </li>
              </ul>
            </div>

            {/* Right Price Block */}
            <div className="lg:col-span-5 bg-[#F3EFE4] p-6 rounded-2xl border border-[#234D35]/10 text-center space-y-4">
              <span className="text-xs uppercase font-bold text-[#5F7547] tracking-wider block">
                VALOR PROMOCIONAL
              </span>

              <div className="space-y-1">
                <span className="text-xs text-[#20251F]/50 line-through block">
                  De {siteConfig.ORIGINAL_PRICE}
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xs text-[#20251F]/70">Por apenas</span>
                  <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#234D35]">
                    {siteConfig.PRICE}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#234D35] bg-[#E7B94A]/30 px-3 py-1 rounded-full inline-block mt-1">
                  {siteConfig.SAVINGS}
                </span>
              </div>

              <p className="text-[11px] text-[#20251F]/60">
                {siteConfig.PAYMENT_INFO}
              </p>
            </div>

          </div>

          {/* CTA Button */}
          <div className="pt-4 space-y-4">
            <button
              onClick={() => handleCheckoutClick('Main Offer Section Button')}
              className="w-full py-4 sm:py-5 px-8 rounded-xl bg-[#234D35] text-[#F8F5ED] font-sans font-bold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#5F7547] transition-all shadow-xl hover:shadow-2xl active:scale-98 cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>Quero meu Menu da Virada</span>
              <HugeiconsIcon icon={ArrowRight01Icon} className="w-6 h-6 text-[#E7B94A] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Security Footer */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#20251F]/70 pt-2 border-t border-[#234D35]/10">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <HugeiconsIcon icon={LockIcon} className="w-4 h-4 text-[#234D35]" />
                Checkout Seguro Hotmart
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <HugeiconsIcon icon={BadgeCheckIcon} className="w-4 h-4 text-[#234D35]" />
                Garantia de 7 Dias
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <HugeiconsIcon icon={Award01Icon} className="w-4 h-4 text-[#234D35]" />
                Download Imediato
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
