import React from 'react';
import { ShieldCheck, Download, Star, ArrowRight, Sparkles } from 'lucide-react';
import { handleCheckoutClick } from '../lib/tracking';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8F5ED] via-[#F3EFE4] to-[#F8F5ED]">
      {/* Decorative Subtle Background Grids / Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E7B94A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#234D35]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#234D35]/10 border border-[#234D35]/20 text-[#234D35] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E7B94A]" />
              <span>GUIA PRÁTICO PARA A VIDA REAL</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#234D35] leading-[1.15] tracking-tight">
              Chega de chegar em casa cansado sem saber o que cozinhar.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#20251F]/80 leading-relaxed max-w-xl">
              40 receitas simples, rápidas e saborosas para facilitar sua rotina depois dos 40 — sem passar horas na cozinha.
            </p>

            {/* CTA Button Block */}
            <div className="pt-3 space-y-3">
              <button
                onClick={() => handleCheckoutClick('Hero CTA Button')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#234D35] text-[#F8F5ED] font-sans font-bold text-base md:text-lg hover:bg-[#5F7547] transition-all shadow-lg hover:shadow-xl active:scale-98 cursor-pointer group"
              >
                <span>Quero facilitar minhas refeições</span>
                <ArrowRight className="w-5 h-5 text-[#E7B94A] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Small Text */}
              <div className="flex items-center gap-3 text-xs text-[#20251F]/60 pt-1">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#234D35]" />
                  Pagamento seguro
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Download className="w-4 h-4 text-[#234D35]" />
                  Acesso digital imediato
                </span>
              </div>
            </div>

            {/* Editorial Social Proof Highlight */}
            <div className="pt-6 border-t border-[#234D35]/10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <img className="w-9 h-9 rounded-full border-2 border-[#F8F5ED] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Leitora" />
                <img className="w-9 h-9 rounded-full border-2 border-[#F8F5ED] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Leitor" />
                <img className="w-9 h-9 rounded-full border-2 border-[#F8F5ED] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" alt="Leitora" />
              </div>
              <div className="text-xs text-[#20251F]/70">
                <div className="flex items-center gap-1 text-[#E7B94A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E7B94A]" />
                  ))}
                </div>
                <span className="font-semibold text-[#234D35]">"Comida com cara de casa, sem complicação."</span>
              </div>
            </div>

          </div>

          {/* Right Column: Book Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Gold Glow Behind Book */}
              <div className="absolute inset-0 bg-[#E7B94A]/20 rounded-3xl blur-2xl transform rotate-3 scale-95" />

              {/* Editorial Book Cover Frame */}
              <div className="relative bg-[#234D35] text-[#F8F5ED] p-8 md:p-10 rounded-2xl shadow-2xl border-4 border-[#F8F5ED] transform transition-transform hover:-translate-y-1 duration-300">
                
                {/* Book Header Label */}
                <div className="flex justify-between items-center border-b border-[#F8F5ED]/20 pb-4 mb-6">
                  <span className="text-[10px] font-sans tracking-widest uppercase text-[#E7B94A] font-bold">
                    EBOOK DIGITAL EXCLUSIVO
                  </span>
                  <span className="text-xs text-[#F8F5ED]/60 font-serif italic">
                    Edição 2026
                  </span>
                </div>

                {/* Cover Main Title */}
                <div className="my-8 text-center space-y-2">
                  <div className="text-xs uppercase tracking-widest text-[#E7B94A] font-semibold">
                    40+ RECEITAS DA VIDA REAL
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F5ED] leading-tight">
                    MENU DA VIRADA
                  </h2>
                  <div className="w-12 h-0.5 bg-[#E7B94A] mx-auto my-3" />
                  <p className="text-xs text-[#F8F5ED]/80 font-sans italic max-w-xs mx-auto">
                    Receitas simples, rápidas e saborosas para o seu dia a dia
                  </p>
                </div>

                {/* Cover Image Feature */}
                <div className="relative h-44 rounded-xl overflow-hidden shadow-inner my-6 border border-[#F8F5ED]/20">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80"
                    alt="Capa do Menu da Virada"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#234D35]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-sans font-bold uppercase tracking-wider text-[#F8F5ED] bg-[#234D35]/90 backdrop-blur-sm px-2.5 py-1 rounded">
                    40 Receitas Inéditas
                  </span>
                </div>

                {/* Footer Badge */}
                <div className="flex items-center justify-between pt-4 border-t border-[#F8F5ED]/20 text-xs">
                  <span className="text-[#E7B94A] font-medium">Formato PDF Interativo</span>
                  <span className="text-[#F8F5ED]/70 font-mono">Leitura Celular & Tablet</span>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#F8F5ED] border-2 border-[#234D35] p-3.5 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E7B94A] flex items-center justify-center text-[#234D35] font-serif font-bold text-lg shadow-sm">
                  40+
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-[#234D35]">Receitas Práticas</span>
                  <span className="block text-[10px] text-[#20251F]/70">Sem frescura, 100% testadas</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
