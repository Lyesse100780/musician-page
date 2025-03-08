import React from 'react';
import bannerImage from '../assets/images/banner.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1 className="main-title">
          <span className="title-part">Lyesse</span>
          <span className="title-part">Music</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
