import React, { useState, useEffect } from 'react';
import slide from '../assets/breeds/goat.jpg';

// Ensure the path is correct
import './Style.css'; // Import your CSS file

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the index of the next slide
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 10000); // Change slide every 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentImageIndex]); // Ensure to include only currentImageIndex as dependency

  const images = [
    slide,
    slide,
    slide
  ];

  return (
    <div className="imageslider">
      <div className="slide" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}