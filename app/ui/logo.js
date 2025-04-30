"use client";

export default function Logo() {
  return (
    <div className="relative size-[25.2vw] rounded-full translate-x-[37vw] translate-y-[0.2vw] flex items-center justify-center">
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
        className="relative z-10 size-[24.8vw] rounded-full object-cover"
      />
    </div>
  );
}
