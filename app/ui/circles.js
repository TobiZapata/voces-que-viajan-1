"use client";

export default function Circles({
  videoSrc,
  posterSrc,
  onClick,
  className = "",
  descripcion = "",
}) {
  return (
    <div className="relative w-fit">
      <video
        className={`size-[18vw] rounded-full object-cover cursor-pointer shadow-lg border-4 ${className}`}
        src={videoSrc}
        onClick={onClick}
        onEnded={(e) => {
          const video = e.target;
          video.currentTime = 0;
          video.pause();
        }}
        playsInline
        preload="metadata"
        poster={posterSrc}
      />
      {descripcion && (
        <p className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-sm text-center text-white w-max">
          {descripcion}
        </p>
      )}
    </div>
  );
}
