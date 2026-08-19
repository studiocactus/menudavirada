import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar botão se rolar mais de 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-40 right-6 bottom-8 max-md:bottom-24 w-12 h-12 rounded-xl bg-[#234D35] text-[#F8F5ED] border border-[#E7B94A]/30 shadow-lg hover:bg-[#5F7547] active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5 text-[#E7B94A] group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};
