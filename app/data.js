// ─────────────────────────────────────────────────────────────
//  DATOS DEL EVENTO — editá acá todo lo que necesites cambiar
// ─────────────────────────────────────────────────────────────
export const evento = {
  nombre: "Helena",
  titulo: "Mis 15",

  // Fecha
  fechaTexto: "Sábado 20 de Febrero de 2027",
  fechaISO: "2027-02-20T21:30:00-03:00", // usado por la cuenta regresiva (hora Argentina)
  horaInicio: "21:30",
  horaFin: "05:00",

  // Salón
  salon: {
    nombre: "Dos Rosas — Fiestas y Eventos",
    direccion: "Av. Rafael Núñez 3938, Cerro de las Rosas, Córdoba",
    instagram: "https://www.instagram.com/salondosrosas/reels/",
  },

  // Entrada / Tarjeta
  entrada: {
    valor: "$60.000",
    porPersona: "por persona",
    notaNinos:
      "Menores de 8 años no abonan. De 8 a 10 años abonan media tarjeta.",
    alias: "Gabi.1976.mp",
    fechaLimite: "30 de noviembre de 2026",
  },

  // WhatsApp para confirmar y enviar comprobante
  whatsapp: {
    numero: "5493516829729",
    display: "+54 9 351 682-9729",
  },
};

// Link de WhatsApp con mensaje prearmado
export const whatsappLink = `https://wa.me/${
  evento.whatsapp.numero
}?text=${encodeURIComponent(
  `¡Hola! Quiero confirmar mi asistencia a los 15 de ${evento.nombre} y reservar mi tarjeta. Adjunto el comprobante de pago.`
)}`;
