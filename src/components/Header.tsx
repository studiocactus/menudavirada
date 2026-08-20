import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { handleCheckoutClick } from '../lib/tracking';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Livro', href: '#livro' },
    { label: 'Receitas', href: '#receitas' },
    { label: 'O que você recebe', href: '#conteudo' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5ED]/90 backdrop-blur-md shadow-sm border-b border-[#234D35]/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group focus:outline-none">
          <img 
            src="/logo.svg" 
            alt="Menu da Virada" 
            className="h-[57px] md:h-[68px] w-auto transition-transform group-hover:scale-105 drop-shadow-sm" 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#20251F]/80 hover:text-[#234D35] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E7B94A] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleCheckoutClick('Header Desktop Button')}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#234D35] text-[#F8F5ED] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#5F7547] transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
          >
            Quero meu Menu
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#234D35] hover:bg-[#234D35]/10 focus:outline-none"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5ED] border-b border-[#234D35]/10 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#20251F] py-2 border-b border-[#234D35]/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCheckoutClick('Header Mobile Drawer');
              }}
              className="w-full py-3 rounded-full bg-[#234D35] text-[#F8F5ED] font-semibold text-sm uppercase tracking-wider text-center shadow-md active:scale-98"
            >
              Quero meu Menu
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
