import { siteConfig } from '../config/siteConfig';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq && siteConfig.META_PIXEL_ID) {
    window.fbq('track', eventName, params);
  } else {
    // Evento registrado para modo de desenvolvimento / analytics futuro
    console.log(`[Tracking Event - ${eventName}]:`, params || 'No params');
  }
};

export const handleCheckoutClick = (origin: string) => {
  trackEvent('InitiateCheckout', {
    content_name: '40+ Menu da Virada Ebook',
    content_category: 'Ebook Gastronomia',
    origin,
    value: 37.00,
    currency: 'BRL'
  });

  if (siteConfig.HOTMART_CHECKOUT_URL && siteConfig.HOTMART_CHECKOUT_URL !== '#') {
    window.open(siteConfig.HOTMART_CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  } else {
    // Alerta informativo elegante para o modo preview quando a URL da Hotmart ainda não foi configurada
    const el = document.getElementById('checkout-offer-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Link de checkout da Hotmart em configuração final. Em breve disponível!');
    }
  }
};
