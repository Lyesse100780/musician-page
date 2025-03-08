import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ProjectCarousel.css";

const images = [
  "/images/project1.jpg",
  "/images/project2.webp",
  "/images/project3.jpg",
  "/images/project4.png",
  "/images/project5.jpeg",
  "/images/project6.webp",
  "/images/project7.webp",
  "/images/project8.jpg",
  "/images/project9.jpg",
  "/images/project10.webp"
];

function ProjectCarousel() {
  return (
    <div className="carousel-container">
      <h2 className="video-title">Demoreel</h2>
      
      {/* ✅ Conteneur de la vidéo */}
      <div className="video-container">
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube-nocookie.com/embed/wa5s3tzyYA0"
          title="Demo Reel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* ✅ Swiper Carousel */}
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true} // ✅ Centre les slides pour éviter les glitchs
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1000} // ✅ Transition fluide entre les slides
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 5 },
          768: { slidesPerView: 5, spaceBetween: 8 },
          1024: { slidesPerView: 7, spaceBetween: 10 }
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img 
              src={src} 
              alt={`Project ${index + 1}`} 
              className="carousel-image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
