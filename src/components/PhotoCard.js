import React from "react";
import "../styles/PhotoCard.css";

const PhotoCard = ({ photo }) => {
  return (
    <div
      className="photo-card"
      role="img"
      aria-label={`Photo by ${photo.user.name}`}
    >
      <img
        src={photo.urls.small}
        alt={photo.alt_description || `Photo by ${photo.user.name}`}
        loading="lazy"
      />
      <div className="photo-overlay">
        <p>{photo.alt_description || "No description available"}</p>
        <p>{photo.likes} ❤️</p>
      </div>
    </div>
  );
};

export default PhotoCard;
