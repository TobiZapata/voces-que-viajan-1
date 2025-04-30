import { gelasio } from "./fonts";
export default function Header() {
  return (
    <div className={`${gelasio.className} antialiased`}>
      <div className="bg-miriam w-screen h-16 flex items-center justify-center text-[#151515] text-6xl">
        VocesQueViajan Streaming
      </div>
    </div>
  );
}
