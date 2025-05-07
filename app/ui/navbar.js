"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Header from "./header";

const navigation = [
  { name: "PROGRAMAS", href: "/programas", hover: "miriam" },
  { name: "NOTICIAS", href: "/noticias", hover: "miriam" },
  { name: "HISTORIAS", href: "/historias", hover: "miriam" },
  { name: "ENTREVISTAS", href: "/entrevistas", hover: "miriam" },
  { name: "CUENTOS", href: "/cuentos", hover: "miriam" },
  { name: "NOSOTROS", href: "/", hover: "miriam" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && <Header />}
      <nav className="bg-gray-800 p-2 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="-my-2">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Logo"
                className="mr-4"
                width={50}
                height={50}
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 justify-center items-center w-64 -translate-x-8">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <div className="text-white hover:text-gray-400 transition-colors duration-300">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex space-x-4 text-xl"></div>
        </div>
      </nav>
    </>
  );
}
