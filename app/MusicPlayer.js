"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reproductor flotante.
 * El archivo de audio debe estar en /public/music/fifteen.mp3
 * (los navegadores bloquean el autoplay con sonido hasta que el usuario
 *  interactúa, así que arranca solo en el primer toque/click/scroll).
 */
export default function MusicPlayer({ src = "/music/fifteen.mp3" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;

    const start = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    };

    // Intento de autoplay (los navegadores lo bloquean hasta que hay interacción)
    start();

    // Plan B: arranca en el primer gesto del usuario (toque, click, scroll, tecla)
    const events = ["pointerdown", "touchstart", "keydown", "scroll", "wheel"];
    const onFirstInteraction = () => {
      if (audio.paused) start();
      cleanup();
    };
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, onFirstInteraction));
    };
    events.forEach((e) =>
      window.addEventListener(e, onFirstInteraction, { passive: true })
    );

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      cleanup();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        className={`music-btn ${playing ? "is-playing" : ""}`}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        title={playing ? "Pausar música" : "Reproducir música"}
      >
        {playing ? (
          // Ecualizador animado
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <g fill="currentColor">
              <rect className="eq eq1" x="4" y="9" width="3" height="6" rx="1.5" />
              <rect className="eq eq2" x="10.5" y="6" width="3" height="12" rx="1.5" />
              <rect className="eq eq3" x="17" y="9" width="3" height="6" rx="1.5" />
            </g>
          </svg>
        ) : (
          // Nota musical
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              fill="currentColor"
              d="M9 17.5a2.5 2.5 0 1 1-2.5-2.5c.34 0 .68.07 1 .19V6.2a1 1 0 0 1 .76-.97l8-2A1 1 0 0 1 17.5 4.2v9.55a2.5 2.5 0 1 1-1.5-2.29V8.06l-7 1.75v7.69z"
            />
          </svg>
        )}
      </button>
    </>
  );
}
