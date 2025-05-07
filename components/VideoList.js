"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

export default function VideoList({ collectionName }) {
  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const colRef = collection(db, collectionName);
        const snapshot = await getDocs(colRef);
        const videosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideos(videosData);
      } catch (error) {
        console.error("Error al cargar los videos:", error);
      }
    }

    fetchVideos();
  }, [collectionName]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {videos.slice(0, visibleCount).map((video) => {
          const match = video.link.match(/embed\/([a-zA-Z0-9_-]+)/);
          const videoId = match ? match[1] : null;
          const thumbnailUrl = videoId
            ? `https://img.youtube.com/vi/${videoId}/0.jpg`
            : "/default-thumbnail.jpg";

          return (
            <Link key={video.id} href={`/videos/${collectionName}/${video.id}`}>
              <div className="bg-fondo1 hover:animate-pulse-glow w-80 rounded-md border-2 border-dario hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer mx-auto">
                <img
                  src={thumbnailUrl}
                  alt={video.titulo || "Miniatura del video"}
                  className="w-full h-60 object-cover"
                />
                <h2 className="text-md text-black font-semibold text-center bg-gray-100 px-2 py-3">
                  {video.titulo}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>

      {visibleCount < videos.length && (
        <div className="flex justify-center mt-8 w-full">
          <button
            onClick={handleShowMore}
            className="bg-dario/80 text-black px-6 py-2 rounded hover:bg-dario transition-opacity"
          >
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
}
