/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { WHATSAPP_URL } from '../constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl font-serif">JP</div>
            <div>
              <span className="text-lg font-serif font-bold leading-none block">Juliette Pardo</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Odontología Integral</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold uppercase tracking-widest text-slate-600 hover:text-brand-primary transition-colors">Inicio</a>
            <a href="#nosotros" className="text-sm font-semibold uppercase tracking-widest text-slate-600 hover:text-brand-primary transition-colors">Nosotros</a>
            <a href="#servicios" className="text-sm font-semibold uppercase tracking-widest text-slate-600 hover:text-brand-primary transition-colors">Servicios</a>
            <a href="#convenios" className="text-sm font-semibold uppercase tracking-widest text-slate-600 hover:text-brand-primary transition-colors">Convenios</a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-secondary transition-colors"
            >
              Agendar Cita
            </a>
          </nav>

          <button className="md:hidden text-slate-900">
            <Menu className="w-8 h-8" />
          </button>
        </div>
        <motion.div className="h-0.5 bg-brand-primary origin-left w-full" style={{ scaleX }} />
      </header>
    </>
  );
}
