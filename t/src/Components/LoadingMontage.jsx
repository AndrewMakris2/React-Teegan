import React, { useEffect, useState } from "react";

// Replace these with your real photos
import One from "../Images/aug.jpeg";
import Two from "../Images/ten.jpg";
import Three from "../Images/eleven.jpg";
import Four from "../Images/twelve.jpg";

const LoadingMontage = () => {
  const images = [One, Two, Three, Four];

  const [progress, setProgress] = useState(0); // goes 0 → 1 during 7s

  useEffect(() => {
    const duration = 6000;
    const start = Date.now();

    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const next = Math.min(elapsed / duration, 1);
      setProgress(next);
      if (next === 1) clearInterval(id);
    }, 100);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="loading-overlay">
      <div className="montage">
        {images.map((src, index) => {
          const delay = index / images.length; // stagger fade
          const fadeRange = 0.35;

          let opacity = (progress - delay) / fadeRange;
          opacity = Math.max(0, Math.min(opacity, 1));

          return (
            <img
              key={index}
              src={src}
              alt={`photo-${index}`}
              className="montage-image"
              style={{ opacity }}
            />
          );
        })}
      </div>
      <p className="loading-text">loading the best parts of us...</p>
    </div>
  );
};

export default LoadingMontage;
