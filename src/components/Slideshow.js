"use client";

import React, { useState, useEffect } from "react";
import styles from "./Slideshow.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

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
      const imagePaths = context.keys().map((key) => {
        const image = context(key);
        return image.default ? image.default : image;
      });
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
          <motion.div
            className={styles.slideshowImage}
            key={currentIndex}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={1000}
              height={1000}
              priority={true}
            />
          </motion.div>
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
