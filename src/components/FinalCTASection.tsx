import React from 'react';
import { handleCheckoutClick } from '../lib/tracking';
import { ArrowRight, Utensils } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5ED] border-t border-[#234D35]/10 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="w-16 h-16 rounded-2xl bg-[#234D35] text-[#E7B94A] flex items-center justify-center mx-auto shadow-md">
          <Utensils className="w-8 h-8" />
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight leading-tight">
            Hoje você pode simplesmente escolher o que vai fazer para o jantar.
          </h2>
          <p className="text-base sm:text-lg text-[#20251F]/80">
            Abra o Menu da Virada, escolha uma receita e deixe a tranquilidade tomar conta da sua noite.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => handleCheckoutClick('Final CTA Section Button')}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-[#234D35] text-[#F8F5ED] font-sans font-bold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#5F7547] transition-all shadow-xl hover:shadow-2xl active:scale-98 cursor-pointer group"
          >
            <span>Quero meu Menu da Virada</span>
            <ArrowRight className="w-6 h-6 text-[#E7B94A] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-xs text-[#20251F]/60">
          Acesso digital imediato • Leitura em qualquer tela • Garantia de 7 dias
        </p>

      </div>
    </section>
  );
};
