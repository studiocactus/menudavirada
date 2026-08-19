import { HugeiconsIcon } from "@hugeicons/react";
import { RotateLeft01Icon, BadgeCheckIcon } from "@hugeicons/core-free-icons";
import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F5ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#234D35]/15 shadow-md flex flex-col md:flex-row items-center gap-8 text-left">
          
          {/* Shield Icon Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#F8F5ED] border-2 border-[#234D35]/20 flex items-center justify-center text-[#234D35] shrink-0 shadow-inner">
            <HugeiconsIcon icon={BadgeCheckIcon} className="w-10 h-10 sm:w-12 sm:h-12 text-[#234D35]" />
          </div>

          {/* Guarantee Content */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#234D35]/10 text-[#234D35] text-xs font-bold uppercase tracking-wider">
              <HugeiconsIcon icon={RotateLeft01Icon} className="w-3.5 h-3.5 text-[#E7B94A]" />
              <span>COMPRA 100% SEGURA</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#234D35]">
              {siteConfig.GUARANTEE_TITLE}
            </h3>

            <p className="text-sm sm:text-base text-[#20251F]/80 leading-relaxed">
              {siteConfig.GUARANTEE_TEXT}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
