import React from "react";
import "../styles/LoadingIndicator.css";

function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingIndicator;
