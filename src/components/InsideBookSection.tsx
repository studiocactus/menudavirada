import React from 'react';
import { landingData } from '../data/landingData';
import { Sun, Utensils, Moon, Zap, Sparkles, Heart } from 'lucide-react';

export const InsideBookSection: React.FC = () => {
  const { categories } = landingData;

  const iconMap: Record<string, React.ReactNode> = {
    Sun: <Sun className="w-5 h-5 text-[#234D35]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#234D35]" />,
    Moon: <Moon className="w-5 h-5 text-[#234D35]" />,
    Zap: <Zap className="w-5 h-5 text-[#234D35]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#234D35]" />,
    Heart: <Heart className="w-5 h-5 text-[#234D35]" />
  };

  return (
    <section id="livro" className="py-20 md:py-28 bg-[#F8F5ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-[#5F7547] text-xs font-bold uppercase tracking-widest">
            <span>03 — O CONTEÚDO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight">
            40 receitas para você nunca mais ficar sem ideia.
          </h2>
          <p className="text-base sm:text-lg text-[#20251F]/85">
            Divididas de forma lógica e prática em 6 seções para qualquer momento da sua semana.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#234D35]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#F8F5ED] border border-[#234D35]/10">
                    {iconMap[cat.iconName]}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#234D35] text-[#F8F5ED] font-sans text-[10px] font-bold uppercase tracking-wider">
                    {cat.count}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#234D35] pt-1">
                  {cat.title}
                </h3>

                <p className="text-sm text-[#20251F]/85 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Summary Banner */}
        <div className="mt-12 bg-[#234D35] text-[#F8F5ED] p-6 sm:p-8 rounded-2xl border border-[#E7B94A]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left space-y-1">
            <span className="text-xs uppercase font-bold text-[#E7B94A] tracking-widest">
              CONTEÚDO COMPLETO
            </span>
            <h4 className="font-serif text-2xl font-bold text-[#F8F5ED]">
              40 Receitas Inéditas + 3 Bônus Exclusivos
            </h4>
            <p className="text-sm text-[#F8F5ED]/80">
              Acesse imediatamente em formato digital PDF compatível com qualquer dispositivo.
            </p>
          </div>

          <div className="shrink-0 bg-[#E7B94A] text-[#234D35] px-6 py-3 rounded-xl font-serif font-bold text-xl shadow-md">
            Total: 40 Receitas
          </div>
        </div>

      </div>
    </section>
  );
};
