/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Code2, Server, Smartphone, Zap } from 'lucide-react';

export default function TechStack() {
  const features = [
    { title: "React + Vite", desc: "Velocidad de carga instantánea y experiencia Web App fluida.", icon: <Zap className="w-5 h-5" /> },
    { title: "Tailwind CSS", desc: "Diseño responsivo móvil-primero con alta fidelidad visual.", icon: <Smartphone className="w-5 h-5" /> },
    { title: "WhatsApp Business API", desc: "Integración directa para conversión inmediata.", icon: <Zap className="w-5 h-5" /> },
    { title: "SEO Local (JSON-LD)", desc: "Optimizado para aparecer en búsquedas de Chigorodó.", icon: <Server className="w-5 h-5" /> }
  ];

  return (
    <section id="tecnologia" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-6xl font-medium mb-4">5. Pila Tecnológica & Funcionalidades</h2>
            <p className="text-slate-400 font-serif italic text-xl max-w-xl">
              Seleccionamos herramientas que crezcan con la clínica, garantizando rendimiento y facilidad de gestión.
            </p>
          </div>
          <div className="px-6 py-3 border border-white/20 rounded-full flex items-center gap-2">
            <Code2 className="w-5 h-5 text-brand-primary" />
            <span className="text-sm font-semibold tracking-widest uppercase">Next-Gen Stack</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-brand-primary text-slate-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold mb-2">Recomendación para Chigorodó</h3>
            <p className="font-medium opacity-90">
              Dado el crecimiento local, recomendamos una integración con <strong>Calendly</strong> embebido para el agendamiento y una sección de <strong>"Paso a Paso Afiliados Comfama"</strong> para reducir la fricción en la recepción clínica.
            </p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
            Ver Prototipo de Formulario
          </button>
        </div>
      </div>
    </section>
  );
}
