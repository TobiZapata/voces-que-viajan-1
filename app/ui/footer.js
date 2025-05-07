import { SiInstagram, SiYoutube, SiTiktok, SiSpotify } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
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
    {
      name: "Tiktok",
      icon: SiTiktok,
      href: "https://www.tiktok.com/@dz_74_",
    },
  ];

  return (
    <footer className="bg-white/10 text-gray-500 py-4">
      <div className="container mx-auto text-center">
        <div className="flex space-x-4 text-3xl mb-2 justify-center">
          {navigationRedes.map((item) => (
            <Link href={item.href} key={item.name} target={"_blank"}>
              <div className="text-white hover:text-gray-300">
                <item.icon />
              </div>
            </Link>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} VocesQueViajan.</p>
      </div>
    </footer>
  );
}
