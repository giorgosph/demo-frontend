import React, { useState } from "react";

const Carousel = ({ crl }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = crl?.assetPath.split('*') || [];

  const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

  const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));


  return (
    <section id="carousel" style={styles.carouselStyle}>
      <button style={styles.buttonStyle} onClick={prevImage}>
        Previous
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`${currentImageIndex + 1}`}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <button style={styles.buttonStyle} onClick={nextImage}>
        Next
      </button>
    </section>
  );
};

export default Carousel;

const styles = {
  carouselStyle: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  buttonStyle: {
    backgroundColor: '#0077b6',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px',
  },
}