import { Great_Vibes, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { evento } from "./data";
import MusicPlayer from "./MusicPlayer";

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const serif = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: `${evento.nombre} · ${evento.titulo} — Reservá tu fecha`,
  description: `${evento.fechaTexto} · ${evento.salon.nombre}. Reservá la fecha de los 15 de ${evento.nombre}.`,
};

export const viewport = {
  themeColor: "#6b6f43",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${script.variable} ${serif.variable} ${sans.variable}`}>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
