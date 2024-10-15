"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from "app/src/components/image-slideshow.css";

const images = [
  { image: "/assets/images/footboll.webp", alt: 'Football icon' },
  { image: "/assets/images/washingmotor.jpeg", alt: 'Washing motor icon' },
  { image: "/assets/images/kerrin.jpg", alt: 'Steamed dumplings' },
  { image: "/assets/images/detyra.webp", alt: 'Mac and cheese' },
  { image: "/assets/images/workout.jpg", alt: 'Workout icon' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`${index === currentImageIndex ? classes.active : ''}`}
          alt={image.alt}
        
        />
      ))}
    </div>
  );
}
