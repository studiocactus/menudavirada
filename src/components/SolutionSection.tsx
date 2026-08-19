import React from 'react';
import { landingData } from '../data/landingData';
import { CheckCircle2, Utensils } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const { solution } = landingData;

  return (
    <section className="py-20 md:py-28 bg-[#F3EFE4] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Editorial Photo Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={solution.image}
                alt="Prato delicioso e simples do Menu da Virada"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#234D35]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-[#234D35]/80 backdrop-blur-md border border-white/20">
                <p className="font-serif italic text-sm text-[#E7B94A]">
                  "Comida gostosa de verdade para a vida real."
                </p>
              </div>
            </div>

            {/* Small Floating Card */}
            <div className="absolute -top-6 -left-4 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#234D35]/10 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E7B94A]/20 flex items-center justify-center text-[#234D35]">
                <Utensils className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#234D35]">Receitas Práticas</span>
                <span className="block text-[11px] text-[#20251F]/85">Sem frescura & Sem complicação</span>
              </div>
            </div>
          </div>

          {/* Text & Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-3 text-[#5F7547] text-xs font-bold uppercase tracking-widest">
              <span className="w-8 h-[1px] bg-[#5F7547]"></span>
              <span>02 — A SOLUÇÃO</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight leading-tight">
              {solution.title}
            </h2>

            <blockquote className="font-serif text-xl md:text-2xl italic text-[#5F7547] border-l-4 border-[#E7B94A] pl-4 py-1 font-medium">
              "{solution.quote}"
            </blockquote>

            <p className="text-base sm:text-lg text-[#20251F]/85 leading-relaxed">
              {solution.description}
            </p>

            <div className="bg-white p-5 rounded-xl border border-[#234D35]/10 shadow-sm flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-[#234D35] shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-[#234D35] leading-snug">
                {solution.highlight}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
