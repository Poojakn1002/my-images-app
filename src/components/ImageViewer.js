import React, { useState, useEffect } from 'react';
import { Typography, ListSubheader } from '@mui/material';

const ImageViewer = ({ imageIndex }) => {
  const [currentAngle, setCurrentAngle] = useState(0);

  const handleMouseMove = (e) => {
    const boundingBox = e.target.getBoundingClientRect();
    const mouseX = e.clientX - boundingBox.left;
    const percentage = (mouseX / boundingBox.width) * 100;
    const newAngle = Math.round((percentage / 100) * 36);
    setCurrentAngle(newAngle);
  };

  useEffect(() => {
    const image = document.getElementById('carImage');
    image.addEventListener('mousemove', handleMouseMove);
    return () => {
      image.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array to ensure the effect runs once on mount

  const imageSource = `../assets/car1/car-${currentAngle + 1}.png`;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '50px',
        marginTop: '50px',
        padding: '50px',
      }}
    >
      <div className="car-360-viewer">
        <div className="controls">
          {/* Add your controls (buttons) here if needed */}
        </div>
        <div className="car-image-container">
          <img
            id="carImage"
            src={imageSource}
            alt={`Car at ${currentAngle} degrees`}
            style={{ maxWidth: '100%', maxHeight: '300px' }} // Adjust the values as needed
          />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
