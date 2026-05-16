/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { User, Target, Heart, ShieldCheck } from 'lucide-react';

export default function Strategy() {
  const personas = [
    {
      name: "Carlos (42 años)",
      role: "Trabajador afiliado a Comfama",
      pain: "Molestia constante al masticar y presupuesto limitado.",
      needs: "Ortodoncia funcional y facilidades de pago mediante su convenio.",
      solution: "Visibilidad inmediata de convenios Comfama y agendamiento ágil por WhatsApp.",
      icon: <User className="w-10 h-10 text-brand-secondary" />
    },
    {
      name: "Elena (35 años)",
      role: "Madre de familia",
      pain: "Miedo de su hijo al dentista por experiencias previas.",
      needs: "Un ambiente cálido, humano y odontopediatría comprensiva.",
      solution: "Comunicación visual que resalte el trato empático ('Vibramos con tu sonrisa') y fotos reales del equipo.",
      icon: <Heart className="w-10 h-10 text-brand-primary" />
    }
  ];

  return (
    <section id="estratgia" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4">1. Estrategia y Definición del Usuario</h2>
          <p className="text-slate-600 max-w-2xl mx-auto italic font-serif text-lg">
            "Diseñamos para las personas, no solo para los pacientes."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {personas.map((persona, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-bg-warm border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{persona.icon}</div>
              <h3 className="text-2xl font-semibold mb-1">{persona.name}</h3>
              <p className="text-brand-secondary font-medium mb-4">{persona.role}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Dolor / Necesidad</h4>
                  <p className="text-slate-700">{persona.pain} {persona.needs}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Resolución Digital</h4>
                  <p className="text-slate-700">{persona.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 text-center">
            <Target className="w-8 h-8 mx-auto mb-4 text-brand-primary" />
            <h4 className="font-semibold mb-2">Conversión</h4>
            <p className="text-sm text-slate-600">Maximizar el agendamiento directo vía WhatsApp y formularios.</p>
          </div>
          <div className="p-6 text-center border-x border-slate-100">
            <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-brand-primary" />
            <h4 className="font-semibold mb-2">Confianza</h4>
            <p className="text-sm text-slate-600">Posicionar los convenios como el puente hacia la salud bucal accesible.</p>
          </div>
          <div className="p-6 text-center">
            <Heart className="w-8 h-8 mx-auto mb-4 text-brand-primary" />
            <h4 className="font-semibold mb-2">Educación</h4>
            <p className="text-sm text-slate-600">Crear una sección de Blog/Educación para desmitificar procesos dentales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
