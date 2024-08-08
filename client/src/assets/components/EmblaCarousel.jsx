import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import banner1 from "/home-banner-1.jpg";
import banner2 from "/home-banner-2.png";
import banner3 from "/home-banner-3.png";

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const images = [banner1, banner2, banner3];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, i) => {
          return (
            <div className="embla__slide" key={i}>
              <img src={src} alt="" className="embla__image w-[100%] max-h-[30vw]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
