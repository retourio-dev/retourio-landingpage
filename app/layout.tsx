import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Der Titel nutzt deinen Slogan für maximalen Wiedererkennungswert
  title: "Retourio | Retouren sind Vergangenheit.",
  description: "Automatisiere deinen gesamten Rücksendeprozess in unter 5 Minuten. SaaS für E-Commerce Startups.",
  
  icons: {
    icon: "/icon.svg", 
    shortcut: "/icon.svg",
    // Hier verlinken wir die 180x180 PNG-Datei aus deinem /public Ordner
    apple: "/apple-touch-icon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}