import "./globals.css";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { montserrat } from "./ui/fonts";

export const metadata = {
  title: "VocesQueViajan",
  description: "VocesQueViajan streaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${montserrat.className} antialiased overflow-x-hidden bg-fondo1`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
