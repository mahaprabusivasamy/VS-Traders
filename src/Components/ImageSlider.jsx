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
    }, 5000); // Change slide every 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentImageIndex]); // Ensure to include only currentImageIndex as dependency

  const images = [
    'https://img.freepik.com/free-photo/raw-meats-with-spices-utensils-rustic-cutting-board-dark-wood-top-view-ai-generative_123827-23528.jpg?w=1060&t=st=1712386871~exp=1712387471~hmac=af78deb997eba6db587539cbec13434995d819f1697783046a8101285a460919',
   'https://img.freepik.com/free-photo/close-up-japanese-street-food_23-2149287811.jpg?w=1060&t=st=1712386948~exp=1712387548~hmac=4fcf9efade6bb5358f07aa39fc1092e168683e4df87aa59e46cfb60d1b99b9a1',
'https://img.freepik.com/free-photo/top-view-meat-with-garlic-herbs_23-2148611056.jpg?w=1060&t=st=1712387004~exp=1712387604~hmac=b1ddc07ba3d5e1e4b8462026c9ce11e98f6f0e9a160af9335941d0577caa98cb'
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