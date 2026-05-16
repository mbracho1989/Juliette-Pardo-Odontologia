/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Palette, Type, Image as ImageIcon } from 'lucide-react';

export default function StyleGuide() {
  return (
    <section id="estilo" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4">4. Guía de Estilo Visual (UI)</h2>
          <p className="text-slate-600 italic font-serif text-lg">Transmitiendo tranquilidad, limpieza y energía positiva.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Colors */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-brand-primary" />
              <h3 className="text-2xl font-medium">Paleta de Colores</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="h-20 w-full rounded-2xl bg-brand-primary shadow-inner"></div>
                <p className="text-xs font-bold font-mono">#2DD4BF</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Primario (Energía)</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-2xl bg-brand-secondary shadow-inner border border-black/5"></div>
                <p className="text-xs font-bold font-mono">#0D9488</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Secundario (Confianza)</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-2xl bg-bg-warm border border-slate-100 shadow-inner"></div>
                <p className="text-xs font-bold font-mono">#FBFBF9</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Fondo (Calidez)</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 w-full rounded-2xl bg-brand-warm shadow-inner"></div>
                <p className="text-xs font-bold font-mono">#FDE68A</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Acento (Cercanía)</p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Type className="w-6 h-6 text-brand-primary" />
              <h3 className="text-2xl font-medium">Tipografía</h3>
            </div>
            
            <div className="p-6 bg-bg-warm rounded-3xl border border-slate-100 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Títulos (Elegant)</h4>
                <p className="font-serif text-3xl leading-none">Cormorant Garamond</p>
                <p className="text-sm text-slate-600">Representa la elegancia, el profesionalismo y el trato clásico de Juliette.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cuerpo (Modern)</h4>
                <p className="font-sans text-xl font-medium">Inter Interface</p>
                <p className="text-sm text-slate-600">Asegura legibilidad máxima en móviles y interfaces de usuario modernas.</p>
              </div>
            </div>
          </div>

          {/* Imagery */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="w-6 h-6 text-brand-primary" />
              <h3 className="text-2xl font-medium">Estilo de Imágenes</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></div>
                <p className="text-sm text-slate-600"><strong>Realismo Total:</strong> Nada de fotos de stock "falsas". La gente de Chigorodó debe reconocer su clínica.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></div>
                <p className="text-sm text-slate-600"><strong>Luz Natural:</strong> Fotos brillantes que transmitan higiene y bienestar.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></div>
                <p className="text-sm text-slate-600"><strong>Enfoque Humano:</strong> Primeros planos de sonrisas reales y el equipo en interacción empática.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
