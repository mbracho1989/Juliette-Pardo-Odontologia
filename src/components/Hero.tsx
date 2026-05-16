/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-warm/20 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary font-bold text-xs uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Odontología de alto nivel en Chigorodó</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium leading-[0.9] mb-6">
            Vibramos con <br />
            <span className="text-brand-primary italic">tu sonrisa.</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Salud integral, bienestar y un trato profundamente humano para que vuelvas a sonreír con total confianza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-primary text-slate-900 rounded-full font-bold text-lg shadow-xl shadow-brand-primary/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Agendar Cita Ahora <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#servicios"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              Ver Servicios
            </a>
          </div>


          <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Comfama</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Convenio Activo</span>
            </div>
            <div className="w-px h-8 bg-slate-100"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Comfenalco</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Convenio Activo</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[60px] overflow-hidden aspect-[4/5] border-[16px] border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
              alt="Higiene dental y sonrisas" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating info card */}
          <div className="absolute -bottom-6 -left-6 z-20 glass p-6 rounded-3xl shadow-xl max-w-[240px]">
            <p className="text-sm font-serif italic text-slate-800 mb-2">"El equipo de la Dra. Juliette me hizo sentir en casa desde el primer momento."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-warm flex items-center justify-center font-bold">M</div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Maria Gomez, Chigorodó</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sticky WhatsApp */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white">¡En línea!</span>
      </a>

    </section>
  );
}
