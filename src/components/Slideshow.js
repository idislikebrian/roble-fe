"use client";

import React, { useState, useEffect } from "react";
import styles from "./Slideshow.module.css";
import Image from "next/image";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = () => {
      const context = require.context(
        "../../public/work",
        false,
        /\.(png|jpe?g|svg|gif)$/
      );
      const imagePaths = context.keys().map((key) => context(key).default);
      setImages(imagePaths);
    };

    importImages();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.slideshowContainer}>
      {images.length > 0 && (
        <>
          <div className={styles.slideshowImage}>
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={1000}
              height={1000}
            />
          </div>
          <button className={styles.prev} onClick={prevSlide}>
            &#10094;
          </button>
          <button className={styles.next} onClick={nextSlide}>
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default Slideshow;
