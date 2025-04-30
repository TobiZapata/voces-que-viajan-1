"use client";
import Circles from "./ui/circles.js";
import Logo from "./ui/logo.js";

export default function Home() {
  const handleVideoClick = (e) => {
    const video = e.target;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <main className="relative min-h-screen bg-fondo1">
      <Logo />

      <div className="absolute bottom-8 left-0 right-0 flex justify-between px-10">
        <Circles
          videoSrc="/videos/graciela.mp4"
          posterSrc="/miniaturas/graciela.webp"
          onClick={handleVideoClick}
          className="self-end translate-x-[12vw] translate-y-[-12.5vw] border-graciela shadow-neonGraciela"
        />
        <Circles
          videoSrc="/videos/dario.mp4"
          posterSrc="/miniaturas/dario.webp"
          onClick={handleVideoClick}
          className="self-end translate-y-[-1vw] shadow-neonDario border-dario"
        />
        <Circles
          videoSrc="/videos/miriam.mp4"
          posterSrc="/miniaturas/miriam.webp"
          onClick={handleVideoClick}
          className="self-end translate-x-[-12vw] translate-y-[-12.5vw] border-miriam shadow-neonMiriam"
        />
      </div>
    </main>
  );
}
