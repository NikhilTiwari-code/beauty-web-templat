"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full z-50 sticky top-0 bg-white shadow-sm">
      {/* TOP INFORMATION STRIP */}
      <div className="w-full bg-brand-pink text-white text-xs py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-white/10">
        <div className="flex items-center gap-2 text-center md:text-left">
          <span>📍</span>
          <span>J-26, P.C. Colony Road, Kankarbagh, Patna</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+919576203418" className="hover:text-brand-pink-light transition-colors flex items-center gap-1 font-semibold">
            <span>📞</span>
            <span>+91 95762 03418</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/monicasbeautylounge/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Page"
              className="hover:opacity-80 transition-opacity"
            >
              📷
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Page"
              className="hover:opacity-80 transition-opacity"
            >
              👥
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex flex-col select-none" onClick={closeMenu}>
          <span className="font-serif text-2xl font-bold text-brand-charcoal tracking-wide flex items-center gap-1.5">
            Monica's <span className="text-brand-pink">Lounge</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold -mt-1">
            Bridal Studio &amp; Academy
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-sm font-semibold tracking-wider text-brand-charcoal hover:text-brand-pink transition-colors">
            WELCOME
          </a>
          <a href="#services" className="text-sm font-semibold tracking-wider text-brand-charcoal hover:text-brand-pink transition-colors">
            SERVICES
          </a>
          <a href="#before-after" className="text-sm font-semibold tracking-wider text-brand-charcoal hover:text-brand-pink transition-colors">
            TRANSFORMATIONS
          </a>
          <a href="#booking" className="text-sm font-semibold tracking-wider text-brand-charcoal hover:text-brand-pink transition-colors">
            APPOINTMENTS
          </a>
          <a href="#contact" className="text-sm font-semibold tracking-wider text-brand-charcoal hover:text-brand-pink transition-colors">
            CONTACT
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-brand-pink text-xs font-bold tracking-widest text-brand-pink hover:bg-brand-pink hover:text-white rounded-md transition-all duration-300"
          >
            BOOK NOW
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-brand-charcoal transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-brand-charcoal transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-brand-charcoal transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Drawer Links */}
      <div
        className={`lg:hidden w-full bg-white border-t border-brand-pink-light flex flex-col px-6 py-4 gap-4 transition-all duration-300 shadow-md ${
          isOpen ? "max-h-80 opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <a href="#about" onClick={closeMenu} className="text-sm font-bold tracking-wider py-2 border-b border-brand-pink-light text-brand-charcoal hover:text-brand-pink">
          WELCOME
        </a>
        <a href="#services" onClick={closeMenu} className="text-sm font-bold tracking-wider py-2 border-b border-brand-pink-light text-brand-charcoal hover:text-brand-pink">
          SERVICES
        </a>
        <a href="#before-after" onClick={closeMenu} className="text-sm font-bold tracking-wider py-2 border-b border-brand-pink-light text-brand-charcoal hover:text-brand-pink">
          TRANSFORMATIONS
        </a>
        <a href="#booking" onClick={closeMenu} className="text-sm font-bold tracking-wider py-2 border-b border-brand-pink-light text-brand-charcoal hover:text-brand-pink">
          APPOINTMENTS
        </a>
        <a href="#contact" onClick={closeMenu} className="text-sm font-bold tracking-wider py-2 text-brand-charcoal hover:text-brand-pink">
          CONTACT
        </a>
      </div>
    </header>
  );
}
