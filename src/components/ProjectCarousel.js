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
      <div className="video-container">
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube-nocookie.com/embed//wa5s3tzyYA0"
          title="Demo Reel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10} /* ✅ Réduction de l'espace entre les images */
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 5 /* ✅ Moins d'espace sur mobile */
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 8 /* ✅ Ajustement sur tablette */
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 10 /* ✅ Compact sur desktop */
          }
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
