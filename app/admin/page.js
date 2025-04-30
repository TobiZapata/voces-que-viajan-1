"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [objects, setObjects] = useState([]); // Para almacenar los objetos de la colección
  const [editingObject, setEditingObject] = useState(null); // Objeto que estamos editando
  const [deletingObject, setDeletingObject] = useState(null); // Objeto que estamos eliminando
  const router = useRouter();

  // Estados del formulario
  const [titulo, setTitulo] = useState("");
  const [link, setLink] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [clase, setClase] = useState("");

  // Verificar si el usuario es admin
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists() && docSnap.data().role === "admin") {
        setAuthorized(true);
      } else {
        router.push("/");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  // Cargar objetos de la colección seleccionada
  useEffect(() => {
    if (clase) {
      const objetoCollection = collection(db, clase);
      const q = query(objetoCollection);

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const objectsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setObjects(objectsData);
      });

      return () => unsubscribe();
    }
  }, [clase]);

  // Manejar envío del formulario para agregar/editar objeto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingObject) {
        // Si estamos editando, actualizar el documento
        const objectRef = doc(db, clase, editingObject.id);
        await updateDoc(objectRef, {
          titulo,
          link,
          descripcion,
          updatedAt: new Date(),
        });
        setEditingObject(null); // Limpiar modo de edición
      } else {
        // Si no estamos editando, agregar un nuevo objeto
        await addDoc(collection(db, clase), {
          titulo,
          link,
          descripcion,
          createdAt: new Date(),
        });
      }

      // Limpiar el formulario
      setTitulo("");
      setLink("");
      setDescripcion("");
      setClase("");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Hubo un problema al guardar el objeto.");
    }
  };

  // Eliminar objeto
  const handleDelete = async () => {
    try {
      if (deletingObject) {
        const objectRef = doc(db, clase, deletingObject.id);
        await deleteDoc(objectRef);
        alert("Objeto eliminado con éxito");
        setDeletingObject(null); // Limpiar el objeto que estamos eliminando
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Hubo un problema al eliminar el objeto.");
    }
  };

  // Iniciar la edición de un objeto
  const handleEdit = (object) => {
    setEditingObject(object);
    setTitulo(object.titulo);
    setLink(object.link);
    setDescripcion(object.descripcion);
  };

  // Iniciar la confirmación de eliminación de un objeto
  const confirmDelete = (object) => {
    setDeletingObject(object);
  };

  // Cancelar la eliminación
  const cancelDelete = () => {
    setDeletingObject(null);
  };

  // Cancelar la edición y restablecer el formulario
  const cancelEdit = () => {
    setEditingObject(null);
    setTitulo("");
    setLink("");
    setDescripcion("");
  };

  if (loading) return <p className="p-4">Cargando...</p>;
  if (!authorized) return null;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-md bg-white text-black p-6 rounded shadow space-y-4"
      >
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
        <select
          value={clase}
          onChange={(e) => setClase(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">Seleccioná una clase</option>
          <option value="cuentos">Cuentos</option>
          <option value="programas">Programas</option>
          <option value="entrevistas">Entrevistas</option>
          <option value="historias">Historias</option>
          <option value="noticias">Noticias</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700"
        >
          {editingObject ? "Actualizar" : "Agregar"}
        </button>

        {/* Botón Cancelar en modo edición */}
        {editingObject && (
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 mt-2"
          >
            Cancelar
          </button>
        )}
      </form>

      <h2 className="text-xl font-bold mt-8">Objetos en {clase}</h2>
      <div className="mt-4">
        {objects.length === 0 ? (
          <p>No hay objetos en esta categoría.</p>
        ) : (
          <ul className="space-y-4">
            {objects.map((object) => (
              <li key={object.id} className="p-4 border rounded shadow">
                <h3 className="font-bold">{object.titulo}</h3>
                <p>{object.descripcion}</p>
                <p className="text-sm text-gray-500">{object.link}</p>
                <div className="mt-2 flex space-x-4">
                  <button
                    onClick={() => handleEdit(object)}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => confirmDelete(object)}
                    className="text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal de confirmación de eliminación */}
      {deletingObject && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h3 className="text-lg font-semibold mb-4">¿Estás seguro?</h3>
            <p className="mb-4">
              Estás a punto de eliminar el objeto{" "}
              <strong>{deletingObject.titulo}</strong>.
            </p>
            <div className="flex justify-between">
              <button
                onClick={cancelDelete}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
