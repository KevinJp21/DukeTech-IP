import type { Metadata } from "next";
import Hero from "./sections/Home/Hero";
import "./globals.css";

export const metadata: Metadata = {
  title: "DukeTech IP | Desarrollo de Software Personalizado y Escalable",
  description:
    "En DukeTech IP diseñamos soluciones tecnológicas a medida, optimizando procesos y potenciando negocios con software eficiente y escalable.",
  keywords: [
    "DukeTech IP",
    "desarrollo de software a medida",
    "soluciones tecnológicas",
    "optimización empresarial",
    "desarrollo web y móvil",
    "inteligencia artificial aplicada",
    "automatización de procesos",
    "suscripciones de software",
    "sistema de referidos",
  ],
  authors: [{ name: "DukeTech IP", url: "https://duketechip.com" }],
  creator: "DukeTech IP",
  publisher: "DukeTech IP",
  alternates: {
    canonical: "https://duketechip.com",
  },
  openGraph: {
    title: "DukeTech IP | Desarrollo de Software Personalizado y Escalable",
    description:
      "Desarrollamos software eficiente y adaptable para empresas que buscan optimizar sus procesos y mejorar su competitividad.",
    url: "https://duketechip.com",
    siteName: "DukeTech IP",
    images: [
      {
        url: "https://duketechip.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DukeTech IP - Desarrollo de Software Personalizado y Escalable",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DukeTech IP | Desarrollo de Software Personalizado y Escalable",
    description:
      "Software eficiente y adaptable para empresas que buscan optimizar sus procesos y mejorar su competitividad.",
    images: ["https://duketechip.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>
      <Hero />
    </main>
  );
}
