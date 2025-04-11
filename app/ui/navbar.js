"use client";
import Link from "next/link";
import Image from "next/image";
import { SiInstagram, SiYoutube, SiTiktok, SiSpotify } from "react-icons/si";
import { usePathname } from "next/navigation";
import Header from "./header";
import { assistant } from "./fonts";

const navigation = [
  { name: "PROGRAMAS", href: "/programas" },
  { name: "ENTREVISTAS", href: "/entrevistas" },
  { name: "CUENTOS", href: "/cuentos" },
  { name: "OTROS", href: "/otros" },
  { name: "NOSOTROS", href: "/nosotros" },
];

const navigationRedes = [
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/vocesqueviajan",
  },
  {
    name: "Youtube",
    icon: SiYoutube,
    href: "https://www.youtube.com/@vocesqueviajan1051",
  },
  {
    name: "Spotify",
    icon: SiSpotify,
    href: "https://open.spotify.com/show/5yidYBDNPajgIFmaU9fChg?si=4afd8c68987047b6",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && <Header />}
      <nav className="bg-gray-800 p-2 sticky top-0 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="-my-2">
            <Link href="/">
              <Image
                src="/logo2.jpeg"
                alt="Logo"
                className="mr-4"
                width={50}
                height={50}
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 justify-center items-center w-64 translate-x-3">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <div className="text-white hover:text-gray-300">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex space-x-4 text-xl">
            {navigationRedes.map((item) => (
              <Link href={item.href} key={item.name} target={"_blank"}>
                <div className="text-white hover:text-gray-300">
                  <item.icon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
