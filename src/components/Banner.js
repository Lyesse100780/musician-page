import React from 'react';
import bannerImage from '../assets/images/hero-lyesse-music.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1 className="main-title">Lyesse Music</h1>
        <p className="hero-lede">
          Narrative scores shaped by touch, texture and emotion.
        </p>
        <p className="hero-detail">
          Piano. Guitar. Modular synthesis. Organic imperfections.
        </p>
      </div>
    </div>
  );
};

export default Banner;
