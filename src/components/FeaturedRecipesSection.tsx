import React from 'react';
import { landingData } from '../data/landingData';
import { Clock, Users } from 'lucide-react';

export const FeaturedRecipesSection: React.FC = () => {
  const { featuredRecipes } = landingData;

  return (
    <section id="receitas" className="py-20 md:py-28 bg-[#F3EFE4] border-y border-[#234D35]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#5F7547]">
            DESTAQUES DO CARDÁPIO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#234D35] tracking-tight">
            Algumas das delícias que esperam por você
          </h2>
          <p className="text-base sm:text-lg text-[#20251F]/70">
            Pratos apetitosos, sem complicação e que deixam a noite mais leve e saborosa.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#234D35]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Recipe Image Frame */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 text-[10px] font-sans uppercase tracking-wider font-bold bg-[#234D35] text-[#F8F5ED] px-3 py-1 rounded-full shadow-sm">
                  {recipe.category}
                </span>
              </div>

              {/* Recipe Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-[#234D35] group-hover:text-[#5F7547] transition-colors leading-snug">
                    {recipe.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20251F]/75 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                {/* Prep info & Tags */}
                <div className="space-y-3 pt-3 border-t border-[#234D35]/10">
                  <div className="flex items-center justify-between text-xs text-[#20251F]/70 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#E7B94A]" />
                      {recipe.prepTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#E7B94A]" />
                      {recipe.servings}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {recipe.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#F8F5ED] text-[#234D35] border border-[#234D35]/10 px-2.5 py-0.5 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
