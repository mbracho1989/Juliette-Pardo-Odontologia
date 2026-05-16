/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Landmark, Info } from 'lucide-react';

export default function Convenios() {
  return (
    <section id="convenios" className="py-24 px-6 bg-brand-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-brand-primary/10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-secondary mb-6">
              <Landmark className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-medium mb-6">Tus beneficios Comfama y Comfenalco, aquí.</h2>
            <p className="text-slate-600 text-lg mb-8">
              Sabemos que tu salud y la de tu familia es prioridad. Por eso, somos aliados oficiales de las cajas de compensación más importantes de la región.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-bg-warm border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center shrink-0 font-bold text-slate-900">1</div>
                <p className="text-sm font-medium text-slate-700">Presenta tu carné de afiliado o documento de identidad en recepción.</p>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-bg-warm border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center shrink-0 font-bold text-slate-900">2</div>
                <p className="text-sm font-medium text-slate-700">Accede a tarifas diferenciales y subsidios de ley según tu categoría (A, B o C).</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="p-8 rounded-[32px] bg-white border-2 border-slate-100 flex flex-col items-center text-center shadow-lg"
             >
                <div className="w-20 h-20 bg-blue-50 rounded-full mb-4 flex items-center justify-center text-blue-600 font-black text-2xl">C</div>
                <h4 className="text-xl font-bold mb-2">Comfama</h4>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Convenio Preferencial</p>
                <button className="mt-6 text-sm font-bold text-brand-primary flex items-center gap-1">
                  <Info className="w-4 h-4" /> Mas info
                </button>
             </motion.div>

             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="p-8 rounded-[32px] bg-white border-2 border-slate-100 flex flex-col items-center text-center shadow-lg"
             >
                <div className="w-20 h-20 bg-green-50 rounded-full mb-4 flex items-center justify-center text-green-600 font-black text-2xl">C</div>
                <h4 className="text-xl font-bold mb-2">Comfenalco</h4>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Convenio Activo</p>
                <button className="mt-6 text-sm font-bold text-brand-primary flex items-center gap-1">
                  <Info className="w-4 h-4" /> Mas info
                </button>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
