import Image from "next/image";
import { db } from "../firebase/config";

export default function Home() {
  return (
    <>
      <div className="pt-4 container mx-auto flex justify-center items-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dUeGK11sz8U?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
