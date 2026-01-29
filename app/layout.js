import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { anton, geistMono } from "./lib/fonts";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "Grainly - Creame of rice",
  description: "grainly cream of rice ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} mt-20 antialiased`}>
        <CartProvider>
          <Navbar />
          <ScrollToTop />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
