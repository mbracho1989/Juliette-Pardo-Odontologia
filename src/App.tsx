/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServicesDetailed from './components/ServicesDetailed';
import Convenios from './components/Convenios';
import Strategy from './components/Strategy';
import Architecture from './components/Architecture';
import StyleGuide from './components/StyleGuide';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-warm">
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesDetailed />
        <Convenios />
        <Contact />
      </main>
      <ChatAssistant />
      <footer className="py-16 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold font-serif">JP</div>
                        <span className="text-xl font-serif font-bold">Juliette Pardo</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">Vibramos con tu sonrisa. Líderes en salud dental humanizada en Chigorodó, Antioquia.</p>
                </div>
                <div>
                    <h5 className="font-bold mb-4 uppercase tracking-widest text-xs text-slate-400">Navegación</h5>
                    <ul className="space-y-2 text-sm font-medium text-slate-600">
                        <li><a href="#" className="hover:text-brand-primary">Inicio</a></li>
                        <li><a href="#nosotros" className="hover:text-brand-primary">Nosotros</a></li>
                        <li><a href="#servicios" className="hover:text-brand-primary">Servicios</a></li>
                        <li><a href="#convenios" className="hover:text-brand-primary">Convenios</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-4 uppercase tracking-widest text-xs text-slate-400">Legal</h5>
                    <ul className="space-y-2 text-sm font-medium text-slate-600">
                        <li><a href="#" className="hover:text-brand-primary">Política de Privacidad</a></li>
                        <li><a href="#" className="hover:text-brand-primary">Tratamiento de Datos</a></li>
                        <li><a href="#" className="hover:text-brand-primary">Consentimiento Informado</a></li>
                    </ul>
                </div>
            </div>
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-300 text-center">© 2024 Juliette Pardo Odontología - Chigorodó, Antioquia. Todos los derechos reservados.</p>
                <div className="flex gap-4">
                    {/* Social links placeholder */}
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-primary cursor-pointer transition-colors">f</div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-primary cursor-pointer transition-colors">ig</div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-primary cursor-pointer transition-colors">in</div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
