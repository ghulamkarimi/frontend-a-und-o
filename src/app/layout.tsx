// src/app/layout.tsx
import { Metadata } from "next";
import ReduxProvider from "../../feature/provider/ReduxProvider"; // Überprüfe den Pfad
import Navbar from "@/components/menu/Navbar"; // Überprüfe den Pfad
import "./globals.css"; // Überprüfe den Pfad

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "A & O",
  description: "Generated by Ghulam & Khalil",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <ReduxProvider>
      <html lang="de">
        <body>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            {/* Footer-Inhalt */}
          </footer>
        </body>
      </html>
    </ReduxProvider>
  );
}
