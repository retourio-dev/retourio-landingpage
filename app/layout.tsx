import type { Metadata } from "next";
import "./globals.css";

// Hier definierst du, was oben im Browser-Tab steht
export const metadata: Metadata = {
  // Der Titel nutzt deinen Slogan für maximalen Wiedererkennungswert
  title: "Retourio | Retouren sind Vergangenheit.",
  description: "Automatisiere deinen gesamten Rücksendeprozess in unter 5 Minuten. SaaS für E-Commerce Startups.",
  
  // Verweist auf die Datei in deinem /public Ordner
  icons: {
    icon: "/logo.svg", // Falls deine Datei anders heißt (z.B. icon.svg), hier anpassen
    shortcut: "/logo.svg",
    apple: "/logo.svg", // Für mobile Lesezeichen
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