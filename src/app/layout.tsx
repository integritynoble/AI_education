import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Empowered Education for All | edu.platformai.org",
  description:
    "Industrialize and personalize pedagogy to democratize access to world-class teaching. Powered by the Targeting System: Learning Gain per Hour, Retention Floors, and Guardrails.",
  openGraph: {
    title: "AI-Empowered Education for All",
    description:
      "The Targeting System for education: measure Learning Gain per Hour, not engagement minutes.",
    url: "https://edu.platformai.org",
    siteName: "PlatformAI Education",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
