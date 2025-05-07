"use client";

export default function Logo() {
  return (
    <div className="relative md:size-[25.2vw] size-[50vw] rounded-full md:translate-x-[37vw] translate-x-[25vw] translate-y-[0.2vw] flex items-center justify-center">
      {/* Borde con animación de pulso */}
      <div
        className="absolute inset-0 rounded-full z-0 
        bg-[conic-gradient(from_270deg,#d06c98_0_25%,#61d2ce_25%_50%,#9cb493_50%_100%)] 
        shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse-glow"
      ></div>

      {/* Imagen centrada */}
      <img
        src="/logo.webp"
        alt="Logo"
        className="relative z-10 md:size-[24.8vw] size-[49.5vw] rounded-full object-cover"
      />
    </div>
  );
}
