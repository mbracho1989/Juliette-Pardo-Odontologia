/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { WHATSAPP_URL, WHATSAPP_NUMBER } from '../constants';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';

export default function Contact() {
  const clinicCoords = { lat: 7.6710, lng: -76.6800 }; // Approx coords for Chigorodó center

  return (
    <section id="contacto" className="py-24 px-6 bg-bg-warm overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-8">Hablemos de tus Sueños y tu Sonrisa</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-primary shadow-sm border border-slate-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Dirección Chigorodó</h4>
                  <p className="text-slate-600">CL 89 # 57-81 y Cra. 98, Chigorodó, Antioquia.</p>
                </div>
              </div>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:bg-white/50 p-2 -m-2 rounded-2xl transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-primary shadow-sm border border-slate-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Citas WhatsApp</h4>
                  <p className="text-slate-600">{WHATSAPP_NUMBER}</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-primary shadow-sm border border-slate-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Correo Directo</h4>
                  <p className="text-slate-600">contacto@juliettepardo.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <h4 className="font-bold mb-4 text-xl">¿Eres afiliado a Comfama?</h4>
              <p className="text-slate-600 text-sm mb-6">Te ayudamos a tramitar tu cita aprovechando todos tus beneficios de ley. ¡No esperes más!</p>
              <button className="flex items-center gap-2 text-brand-secondary font-bold hover:underline">
                Saber más sobre convenios <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative">
            {API_KEY ? (
              <APIProvider apiKey={API_KEY} version="weekly">
                <Map
                  defaultCenter={clinicCoords}
                  defaultZoom={15}
                  mapId="DEMO_MAP_ID"
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                  style={{ width: '100%', height: '100%' }}
                >
                  <AdvancedMarker position={clinicCoords}>
                    <Pin background="#2DD4BF" glyphColor="#fff" />
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            ) : (
                <div className="w-full h-full bg-slate-200 flex items-center justify-center p-8 text-center text-slate-500">
                    <p>Mapa de Chigorodó (Google Maps) con ubicación de la clínica Juliette Pardo.<br/><span className="text-xs uppercase mt-2 block font-bold tracking-widest text-slate-400 italic">Pendiente API Key</span></p>
                </div>
            )}
            
            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl">
              <p className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Abierto ahora - Cierra a las 6:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
