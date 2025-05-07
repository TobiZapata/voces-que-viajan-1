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

      <div className="flex flex-col items-center justify-center gap-6 min-h-[70vh] md:absolute md:bottom-8 md:left-0 md:right-0 md:flex-row md:justify-between md:px-10">
        <Circles
          videoSrc="/videos/graciela.mp4"
          posterSrc="/miniaturas/graciela.webp"
          onClick={handleVideoClick}
          className="border-graciela shadow-neonGraciela md:self-end md:translate-x-[12vw] md:translate-y-[-5.5vw]"
        />
        <Circles
          videoSrc="/videos/dario.mp4"
          posterSrc="/miniaturas/dario.webp"
          onClick={handleVideoClick}
          className="shadow-neonDario border-dario md:self-end md:translate-y-[7vw]"
        />
        <Circles
          videoSrc="/videos/miriam.mp4"
          posterSrc="/miniaturas/miriam.webp"
          onClick={handleVideoClick}
          className="border-miriam shadow-neonMiriam md:self-end md:translate-x-[-12vw] md:translate-y-[-5.5vw]"
        />
      </div>
    </main>
  );
}
