import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { landingData } from '../data/landingData';
import { UserCheck } from 'lucide-react';

export const AuthorSection: React.FC = () => {
  if (!siteConfig.SHOW_AUTHOR_SECTION) return null;

  const { author } = landingData;

  return (
    <section className="py-20 md:py-28 bg-[#F8F5ED] border-t border-[#234D35]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Author Image placeholder or image */}
          <div className="lg:col-span-5 flex justify-center">
            {author.image ? (
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-sm">
                <img src={author.image} alt={author.name} className="w-full h-80 object-cover" />
              </div>
            ) : (
              // Placeholder elegante e minimalista
              <div className="w-full max-w-xs aspect-[4/5] rounded-3xl bg-[#F3EFE4] border-2 border-dashed border-[#234D35]/20 flex flex-col items-center justify-center p-6 text-center shadow-inner">
                <div className="w-16 h-16 rounded-full bg-[#234D35]/5 flex items-center justify-center text-[#234D35]/40 mb-4">
                  <UserCheck className="w-8 h-8" />
                </div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#5F7547]">
                  [FOTO DO AUTOR A DEFINIR]
                </span>
                <p className="text-[11px] text-[#20251F]/50 mt-2 max-w-[180px] mx-auto">
                  Espaço reservado para o retrato do criador do e-book.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#5F7547]">
              {author.subtitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight leading-tight">
              {author.title}
            </h2>
            <h3 className="font-sans font-bold text-lg text-[#20251F]">
              {author.name}
            </h3>
            <p className="text-base text-[#20251F]/85 leading-relaxed">
              {author.bio}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
