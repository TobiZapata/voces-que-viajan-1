"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./header";
import { useState } from "react";

const navigation = [
  { name: "PROGRAMAS", href: "/programas" },
  { name: "NOTICIAS", href: "/noticias" },
  { name: "HISTORIAS", href: "/historias" },
  { name: "ENTREVISTAS", href: "/entrevistas" },
  { name: "CUENTOS", href: "/cuentos" },
  { name: "NOSOTROS", href: "/" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {pathname === "/" && <Header />}
      <nav className="bg-gray-800 p-4 sticky top-0 z-50">
        {/* Desktop nav */}
        <div className="hidden md:flex justify-center space-x-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center justify-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none px-2"
          >
            ☰
          </button>
          <span className="text-white font-bold justify-center">MENÚ</span>
        </div>

        {/* Mobile menu options */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className="block text-white px-4 py-2 hover:bg-gray-700 transition rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
