/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const WHATSAPP_NUMBER = "+573136992121";
export const WHATSAPP_MESSAGE = "Hola, quisiera agendar una cita con la Dra. Juliette Pardo.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
