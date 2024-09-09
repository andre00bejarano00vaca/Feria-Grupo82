"use client";
import { useState } from "react";

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [precio, setPrecio] = useState("");
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile || precio === "" || nombre === "" || tipo === "") {
      alert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("imagen", selectedFile);
    formData.append("precio", precio);
    formData.append("nombre", nombre);
    formData.append("tipo", tipo);

    try {
      const response = await fetch("http://ccpa7stkruda3o.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com/api/images/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully");
        setSelectedFile(null);
        setPrecio("");
        setTipo("");
      } else {
        const error = await response.json();
        alert(`Image upload failed: ${error.message}`);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image");
    }
  };

  return (
    <form
      id="formulari"
      name="formulario"
      className="flex flex-col space-y-4 p-4 border rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <label htmlFor="imagin" className="text-lg font-semibold">
        Select Image:
      </label>
      <input
        name="fileChange"
        id="imagin"
        type="file"
        onChange={handleFileChange}
        className="border rounded p-2"
      />

      <label htmlFor="precio" className="text-lg font-semibold">
        Price:
      </label>
      <input
        name="precio"
        id="precio"
        type="text"
        value={precio}
        onChange={handlePrecioChange}
        className="border rounded p-2"
      />

      <label htmlFor="nombre" className="text-lg font-semibold">
        Name:
      </label>
      <input
        name="nombre"
        id="nombre"
        type="text"
        value={nombre}
        onChange={handleNombreChange}
        className="border rounded p-2"
      />

      <label htmlFor="tipo" className="text-lg font-semibold">
        Type:
      </label>
      <input
        name="tipo"
        id="tipo"
        type="text"
        value={tipo}
        onChange={handleTipoChange}
        className="border rounded p-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Upload Image
      </button>
    </form>
  );
}
