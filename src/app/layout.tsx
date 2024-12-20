// src/app/layout.tsx
import { Metadata } from "next";
import ReduxProvider from "../../feature/provider/ReduxProvider";
import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";

import MainLayout from "./mainLayout";

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
        <body className="bg-gray-200 ">
          <MainLayout>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
            {/* <div className="z-50">
              <CookieBanner />
            </div> */}

          </MainLayout>
          <ToastContainer />
        </body>
      </html>
    </ReduxProvider>
  );
}
