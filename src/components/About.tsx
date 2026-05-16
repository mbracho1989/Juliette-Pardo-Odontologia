/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden aspect-square border-8 border-bg-warm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" 
                alt="Dra. Juliette Pardo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-primary p-8 rounded-3xl text-slate-900 shadow-xl max-w-[280px]">
              <p className="text-3xl font-serif font-bold italic mb-1">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Años devolviendo sonrisas en el Urabá Antioqueño</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Nuestro Corazón</span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Un trato dental profundamente humano</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              En la clínica de la <strong>Dra. Juliette Pardo</strong>, entendemos que detrás de cada consulta hay una historia, una necesidad y, a veces, un temor. Nuestra misión en Chigorodó es transformar la experiencia dental en un momento de bienestar y calma.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Tecnología de vanguardia para diagnósticos precisos.",
                "Enfoque empático y sin dolor.",
                "Instalaciones modernas y acogedoras.",
                "Compromiso con la salud integral de la comunidad."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-bg-warm rounded-2xl border-l-4 border-brand-primary">
              <p className="italic text-slate-600 font-serif">
                "No solo arreglamos dientes, vibramos con la energía y la confianza que recuperas al sonreír."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
