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

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">{video.titulo}</h1>

      <div className="flex justify-center">
        <div className="relative w-full max-w-2xl pb-[56.25%] h-0 overflow-hidden rounded shadow-lg">
          <iframe
            src={video.link}
            title={video.titulo}
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
