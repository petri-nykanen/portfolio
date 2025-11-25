import React, { useState } from "react";
import "./ImageGallery.css"; // Make sure to create this CSS file

interface Props {
  images: string[];
}

const ImageGallery = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleChangeImage = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 500); // Match the CSS transition duration
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    handleChangeImage(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    handleChangeImage(prevIndex);
  };

  return (
    <div className="image-gallery">
      <i onClick={prevImage} className="fas fa-arrow-left"></i>
      <div className={`image-container ${isFading ? "fade" : ""}`}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <i onClick={nextImage} className="fas fa-arrow-right"></i>
    </div>
  );
};

export default ImageGallery;
