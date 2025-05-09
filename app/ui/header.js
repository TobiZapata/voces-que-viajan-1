import { gelasio } from "./fonts";
export default function Header() {
  return (
    <div className={`${gelasio.className} antialiased`}>
      <div className="bg-[#151515] w-screen md:h-16 flex items-center justify-center text-miriam md:text-6xl text-xl h-8">
        VocesQueViajan<a className="md:ml-4 ml-2 text-[#303131]">Streaming</a>
      </div>
    </div>
  );
}
