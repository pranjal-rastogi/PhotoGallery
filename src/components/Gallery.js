import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import "../styles/Gallery.css";
import LoadingIndicator from "./LoadingIndicator";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const photoCache = useRef([]);

  // Function to fetch photos from Unsplash API
  const fetchPhotos = async () => {
    if (photoCache.current[page]) {
      setPhotos((prevPhotos) => [...prevPhotos, ...photoCache.current[page]]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos?page=${page}&per_page=12`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
          },
        }
      );
      photoCache.current[page] = response.data; // Cache the new photos
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (err) {
      setError("Failed to fetch photos. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Trigger photo fetching when page number changes
  useEffect(() => {
    fetchPhotos();
  }, [page]);

  // Handle infinite scroll by listening to the scroll event
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="gallery-container" role="list" aria-live="polite">
      {error && <div className="error-message">{error}</div>}

      {/* Loop through photos and display each one */}
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}

      {/* Loading indicator when fetching data */}
      {loading && <LoadingIndicator />}
    </div>
  );
};

export default Gallery;
