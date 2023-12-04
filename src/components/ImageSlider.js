import React, { useState } from 'react';
import ImageViewer from './ImageViewer';

const ImageSlider = () => {
  const images = [
    '/assets/slider/car-36.png', 
    '/assets/slider/MicrosoftTeams-image (21).png'
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + image}
            alt={`Image ${index}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImage !== null && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <ImageViewer imageIndex={selectedImage} />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
