"use client"
import { Suspense, useEffect, useState } from 'react';
import CardImg from './CardImg';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://backendferia-a7ade212ed25.herokuapp.com/api/images');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (images.length === 0) {
  //   return <p>No images found.</p>; // Mensaje si no hay imágenes
  // }

  return (
    <div>
      <ul className="flex flex-wrap gap-4 justify-center p-4">
        <Suspense fallback={<div>cargando...</div>}>
        {images.map((image) => (
          <li key={image.id}>
            <CardImg image = {image}/>
          </li>
        ))}
        </Suspense>
      </ul>
    </div>
  );
};

export default ImageList;
