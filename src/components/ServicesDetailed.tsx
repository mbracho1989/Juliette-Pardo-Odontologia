/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Stethoscope, Sparkle, Shield, HeartPulse } from 'lucide-react';

const services = [
  {
    title: "Odontología General",
    desc: "Limpiezas, calzaduras y prevención básica para mantener tu boca sana.",
    icon: <Stethoscope className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Ortodoncia",
    desc: "Alineamos tu sonrisa con las técnicas más modernas y estéticas.",
    icon: <Sparkle className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Endodoncia",
    desc: "Salvando tus piezas dentales mediante tratamientos de conducto indoloros.",
    icon: <HeartPulse className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Periodoncia",
    desc: "Cuidado especializado de tus encías para prevenir la pérdida dental.",
    icon: <Shield className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1593059818632-d74829bc6225?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ServicesDetailed() {
  return (
    <section id="servicios" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">Servicios Especializados</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Experticia técnica combinada con un trato humano excepcional en Chigorodó.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
            >
              <div className="h-48 relative overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-slate-900 shadow-lg">
                  {s.icon}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button className="text-brand-secondary font-bold text-sm hover:underline flex items-center gap-2">
                  Ver detalle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
