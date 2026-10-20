import type { Metadata } from "next";
import { Montserrat, Lato, Oswald } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muebles & Espacio Puerto Montt Ltda. | Mobiliario a Medida en el Sur de Chile",
  description:
    "Taller de diseño y fabricación propia de cocinas integrales, clósets, vanitorios y muebles a medida en Puerto Montt, Puerto Varas, Llanquihue y Frutillar. Melaminas RH hidrófugas y maderas nobles.",
  keywords: [
    "muebles a medida Puerto Montt",
    "cocinas integrales Puerto Montt",
    "muebles Puerto Varas",
    "closets a medida Los Lagos",
    "Muebles y Espacio Puerto Montt Ltda",
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${lato.variable} ${oswald.variable}`}
    >
      <body className="font-sans bg-white text-[#777777] antialiased selection:bg-[#26a422] selection:text-white">
        {children}
      </body>
    </html>
  );
}
