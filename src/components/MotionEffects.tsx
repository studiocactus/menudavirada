import { useEffect } from 'react';

const CARD_SELECTOR = [
  '.grid > article',
  '.grid > div[class*="rounded-2xl"]',
  '.space-y-4 > div[class*="rounded-2xl"]',
].join(',');

export function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
    const cards = Array.from(document.querySelectorAll<HTMLElement>(CARD_SELECTOR));

    sections.forEach((section) => section.classList.add('reveal-section'));
    cards.forEach((card, index) => {
      card.classList.add('reveal-card', 'conversion-card');
      card.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    });

    document.querySelectorAll<HTMLButtonElement>('button').forEach((button) => {
      if (button.textContent?.toLowerCase().includes('quero meu menu')) {
        button.classList.add('conversion-cta');
      }
    });

    const book = document.querySelector<HTMLElement>('img[alt="Capa do Menu da Virada"]')
      ?.closest<HTMLElement>('.relative.h-44')?.parentElement;
    book?.classList.add('book-float');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );

    [...sections, ...cards].forEach((element) => observer.observe(element));

    const parallaxImage = document.querySelector<HTMLImageElement>(
      'img[alt="Prato delicioso e simples do Menu da Virada"]',
    );

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      if (!parallaxImage || window.innerWidth < 1024) return;
      const rect = parallaxImage.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      parallaxImage.style.setProperty('--parallax-y', `${Math.max(-14, Math.min(14, progress * -20))}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
