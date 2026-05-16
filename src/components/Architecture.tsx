/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layers, ChevronRight } from 'lucide-react';

export default function Architecture() {
  const sitemap = [
    { name: "Inicio", items: ["Hero (Vibramos con tu sonrisa)", "Confianza (Convenios)", "CTA Rápido"] },
    { name: "Nosotros", items: ["Dra. Juliette Pardo", "Misión Empática", "Fotos Clínica"] },
    { name: "Servicios", items: ["Odontología General", "Ortodoncia", "Endodoncia", "Periodoncia"] },
    { name: "Convenios", items: ["Portal Comfama", "Portal Comfenalco", "Requisitos"] },
    { name: "Blog / Salud", items: ["Tips de cuidado", "Casos de éxito", "Prevención"] },
    { name: "Contacto", items: ["Mapa Chigorodó", "WhatsApp Directo", "Formulario Citas"] }
  ];

  return (
    <section id="arquitectura" className="py-24 px-6 bg-bg-warm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">2. Arquitectura de la Información</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              La jerarquía está diseñada para que el paciente encuentre la solución a su dolor en menos de 3 clics, con un enfoque local y de accesibilidad financiera.
            </p>
            <div className="flex items-center gap-3 text-brand-secondary font-semibold">
              <Layers className="w-6 h-6" />
              <span>Sitemap Estratégico</span>
            </div>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
            {sitemap.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-semibold text-brand-primary mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  {section.name}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-slate-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
