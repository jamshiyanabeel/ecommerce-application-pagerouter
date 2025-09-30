import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import "../styles/CommonLayout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { CartProvider } from "../context/CartContext/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="main-container main-body-description p-3">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}


