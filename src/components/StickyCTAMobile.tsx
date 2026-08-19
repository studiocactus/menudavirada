import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import React, { useState, useEffect } from 'react';
import { handleCheckoutClick } from '../lib/tracking';
export const StickyCTAMobile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar após scroll de 400px (saindo do Hero)
      const scrolledPastHero = window.scrollY > 450;

      // Ocultar se estiver muito próximo do rodapé ou da seção de oferta
      const offerSection = document.getElementById('oferta');
      const footer = document.querySelector('footer');
      
      let isNearOfferOrFooter = false;

      if (offerSection) {
        const rect = offerSection.getBoundingClientRect();
        // Se a seção de oferta estiver próxima do topo ou visível
        if (rect.top < window.innerHeight - 100) {
          isNearOfferOrFooter = true;
        }
      }

      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          isNearOfferOrFooter = true;
        }
      }

      setIsVisible(scrolledPastHero && !isNearOfferOrFooter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Executar uma vez no mount para garantir sincronismo
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#F8F5ED] border-t border-[#234D35]/15 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] transition-all duration-300 animate-in slide-in-from-bottom-5">
      <div className="flex items-center justify-between gap-4">
        {/* Descrição sutil à esquerda */}
        <div className="text-left">
          <span className="block text-[10px] uppercase font-bold tracking-wider text-[#5F7547]">
            40+ RECEITAS PRÁTICAS
          </span>
          <span className="block text-xs font-bold text-[#234D35] font-serif">
            Ebook Menu da Virada
          </span>
        </div>

        {/* Botão de Ação */}
        <button
          onClick={() => handleCheckoutClick('Sticky Mobile CTA')}
          className="flex-1 py-3 px-5 rounded-xl bg-[#234D35] text-[#F8F5ED] font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#5F7547] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          <span>Quero meu Menu</span>
          <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 text-[#E7B94A]" />
        </button>
      </div>
    </div>
  );
};
