import React, { useState, useEffect } from 'react';
import { storage } from '../firebase'; // Ensure correct import for your Firebase configuration
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const Images = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const listRef = ref(storage, 'images/');
        const res = await listAll(listRef);
        const urls = await Promise.all(
          res.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return { name: itemRef.name, url };
          })
        );
        setImages(urls);
      } catch (error) {
        setError('Failed to load images. Please try again later.');
        console.error('Error fetching images: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading images...</p>;
  }

  return (
    <div>
      <h1>Stored Images</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((image) => (
          <li key={image.name} style={{ listStyle: 'none' }}>
            <img src={image.url} alt={`Image: ${image.name}`} width="200" style={{ borderRadius: '8px' }} />
            <p>{image.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Images;
