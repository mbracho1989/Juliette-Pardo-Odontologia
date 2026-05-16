/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { WHATSAPP_NUMBER } from '../constants';

const SYSTEM_PROMPT = `Eres el asistente virtual de la clínica dental 'Juliette Pardo Odontología', ubicada en Chigorodó, Antioquia. 
Tu tono es empático, profesional y cercano. 
Brindas información sobre servicios como odontología general, ortodoncia, endodoncia y periodoncia. 
Puntos clave a mencionar:
1. Revisa siempre que la clínica vibra con la sonrisa de sus pacientes (Lema: "Vibramos con tu sonrisa").
2. Tenemos convenios activos con Comfama y Comfenalco.
3. Ubicación: Chigorodó, Antioquia (CL 89 # 57-81 y Cra. 98).
4. Citas: Si el usuario quiere una cita, indícale que puede agendar directamente por WhatsApp al ${WHATSAPP_NUMBER}.
5. Responde siempre en español de forma amable y servicial. No diagnostiques nada complejo, siempre sugiere una valoración profesional.`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy tu asistente de Juliette Pardo Odontología. ¿En qué puedo ayudarte con tu sonrisa hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_PROMPT,
        },
      });

      // Prepare history
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const response = await chat.sendMessage({
        message: userMessage,
      });

      const responseText = response.text || "Lo siento, tuve un pequeño inconveniente. ¿Podrías repetirme tu duda?";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, no puedo procesar tu solicitud en este momento. Por favor, contáctanos por WhatsApp." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-50 w-14 h-14 bg-brand-primary text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <Bot className="w-8 h-8" />
        {!isOpen && (
          <span className="absolute -top-2 left-0 bg-white text-[10px] font-bold px-2 py-1 rounded-full border shadow-sm whitespace-nowrap">
            ¿Dudas? Pregúntame
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-[60] w-[90vw] max-w-[400px] h-[600px] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-brand-primary p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-none">Asistente Dental</h3>
                  <span className="text-[10px] text-white/80 font-medium uppercase tracking-widest">En línea</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`mt-1 shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-brand-secondary text-white' : 'bg-brand-primary/10 text-brand-secondary'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-brand-secondary text-white rounded-tr-none' : 'bg-slate-100 text-slate-800 rounded-tl-none'}`}>
                      <div className="prose prose-sm prose-invert max-w-none">
                        <ReactMarkdown>
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu duda aquí..."
                  className="flex-grow p-4 bg-slate-50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-12 h-12 bg-brand-primary text-slate-900 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
