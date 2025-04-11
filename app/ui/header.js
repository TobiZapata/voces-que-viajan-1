import { gelasio } from "./fonts";
export default function Header() {
  return (
    <div className={`${gelasio.className} antialiased`}>
      <div className="bg-gray-500 w-screen h-16 flex items-center justify-center text-6xl">
        VOCES QUE VIAJAN
      </div>
    </div>
  );
}
