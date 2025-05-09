import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config";

export default async function VideoDetailPage({ params }) {
  const { collection, id } = params;

  if (!collection || !id) {
    return <p className="text-red-500">Ruta inválida: faltan parámetros.</p>;
  }

  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <p className="text-red-500">Video no encontrado.</p>;
  }

  const video = docSnap.data();
  const match = video.link.match(/(?:\/embed\/|watch\?v=)([a-zA-Z0-9_-]+)/);
  const videoId = match ? match[1] : null;

  return (
    <div className="p-4 max-w-4xl mx-auto ">
      <h1 className="text-3xl font-bold mb-4 text-center">{video.titulo}</h1>
      <div className="flex justify-center ">
        <div className="relative w-full max-w-2xl pb-[56.25%] h-0 overflow-hidden bg-fondo1 rounded shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.titulo}
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
      <h2 className="w-[35vw] translate-x-24 text-xl font-bold my-4 text-center bg-black/70">
        {video.descripcion}
      </h2>
    </div>
  );
}
