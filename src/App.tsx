import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IdentificationSection } from './components/IdentificationSection';
import { SolutionSection } from './components/SolutionSection';
import { BenefitsSection } from './components/BenefitsSection';
import { InsideBookSection } from './components/InsideBookSection';
import { FeaturedRecipesSection } from './components/FeaturedRecipesSection';
import { ProductIncludesSection } from './components/ProductIncludesSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { AuthorSection } from './components/AuthorSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { StickyCTAMobile } from './components/StickyCTAMobile';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  return (
    <div className="min-h-screen bg-[#F8F5ED] text-[#20251F] font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <IdentificationSection />
        <BenefitsSection />
        <SolutionSection />
        <HowItWorksSection />
        <AuthorSection />
        <InsideBookSection />
        <FeaturedRecipesSection />
        <ProductIncludesSection />
        <TargetAudienceSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyCTAMobile />
      <ScrollToTop />
    </div>
  );
}

export default App;
