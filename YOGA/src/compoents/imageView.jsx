import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ImageView.css';

const ImageView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { imageSrc, title } = location.state || {};

  return (
    <div className="image-view">
      {imageSrc ? (
        <>
          <img src={imageSrc} alt={title} className="large-image" />
          <button onClick={() => navigate(-1)} className="back-button">Back</button>
        </>
      ) : (
        <p>Image not found.</p>
      )}
    </div>
  );
};

export default ImageView;
