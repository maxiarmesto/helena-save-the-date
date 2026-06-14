import Countdown from "./Countdown";
import { evento, whatsappLink } from "./data";

function Sprig() {
  // Ramita de olivo decorativa
  return (
    <svg
      className="sprig"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 20 H110"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {[22, 38, 54, 70, 86].map((x, i) => (
        <g key={x}>
          <ellipse
            cx={x}
            cy={i % 2 === 0 ? 12 : 28}
            rx="7"
            ry="3.2"
            transform={`rotate(${i % 2 === 0 ? -28 : 28} ${x} ${
              i % 2 === 0 ? 12 : 28
            })`}
            fill="currentColor"
            opacity="0.85"
          />
        </g>
      ))}
      <circle cx="60" cy="20" r="2.4" fill="currentColor" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Reservá la fecha</p>
        <Sprig />

        <h1 className="name">{evento.nombre}</h1>
        <p className="subtitle">Mis quince años</p>

        <div className="invite-line">
          ¡Quiero compartir esta noche tan especial con vos!
        </div>

        <div className="date-block">
          <span className="date-main">{evento.fechaTexto}</span>
          <span className="time">
            {evento.horaInicio} a {evento.horaFin} hs
          </span>
        </div>

        <Countdown fechaISO={evento.fechaISO} />

        <div className="venue">
          <span className="venue-label">Lugar</span>
          <strong className="venue-name">{evento.salon.nombre}</strong>
          <span className="venue-addr">{evento.salon.direccion}</span>
          <a
            className="ig-link"
            href={evento.salon.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver el salón en Instagram
          </a>
        </div>

        <div className="divider">
          <span />
        </div>

        {/* ─── Entrada / Reserva ─── */}
        <div className="tickets">
          <h2 className="tickets-title">Reservá tu lugar</h2>
          <p className="tickets-intro">
            Para asegurar tu lugar te pedimos abonar la tarjeta por
            transferencia.
          </p>

          <div className="price">
            <span className="price-amount">{evento.entrada.valor}</span>
            <span className="price-per">{evento.entrada.porPersona}</span>
          </div>
          <p className="kids-note">{evento.entrada.notaNinos}</p>

          <div className="alias-box">
            <span className="alias-label">Alias para transferir</span>
            <span className="alias-value">{evento.entrada.alias}</span>
          </div>

          <p className="deadline">
            Fecha límite para reservar:{" "}
            <strong>{evento.entrada.fechaLimite}</strong>
          </p>

          <a
            className="wa-btn"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.06c-.24.68-1.42 1.31-1.95 1.36-.5.05-1.13.26-3.74-.78-3.14-1.24-5.15-4.45-5.31-4.66-.15-.2-1.26-1.68-1.26-3.2s.8-2.27 1.08-2.58c.28-.31.61-.39.81-.39.2 0 .41 0 .58.01.19.01.43-.07.68.52.24.59.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.29.77 1.27 1.65 2.06 1.14 1.02 2.1 1.33 2.39 1.48.29.15.46.13.63-.08.17-.2.73-.85.92-1.14.19-.29.39-.24.65-.15.27.1 1.71.81 2 .96.29.15.49.22.56.34.07.12.07.68-.17 1.36z"
              />
            </svg>
            Confirmar y enviar comprobante
          </a>
          <p className="wa-note">
            WhatsApp: {evento.whatsapp.display}
          </p>
        </div>

        <Sprig />
        <p className="footer">
          La invitación completa con todos los detalles llegará pronto 💌
        </p>
      </section>
    </main>
  );
}
