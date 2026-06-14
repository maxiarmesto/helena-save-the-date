"use client";

import { useEffect, useState } from "react";

function diff(target) {
  const now = new Date().getTime();
  const distance = Math.max(0, target - now);
  return {
    dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
    horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seg: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export default function Countdown({ fechaISO }) {
  const target = new Date(fechaISO).getTime();
  const [t, setT] = useState(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  // Evita parpadeo de hidratación: no renderiza números hasta montar en el cliente
  const items = [
    { label: "Días", value: t?.dias },
    { label: "Horas", value: t?.horas },
    { label: "Minutos", value: t?.min },
    { label: "Segundos", value: t?.seg },
  ];

  return (
    <div className="countdown" aria-label="Cuenta regresiva">
      {items.map((it) => (
        <div className="count-box" key={it.label}>
          <span className="count-num">
            {t === null ? "--" : String(it.value).padStart(2, "0")}
          </span>
          <span className="count-label">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
