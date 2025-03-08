import React from 'react';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import './Profile.css';

const Profile = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:lyesse.hamadou@gmail.com';
  };

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img 
          src="/images/portrait.jpg" 
          alt="Lyesse Music" 
          onError={(e) => {
            e.target.style.display = 'none';
            console.error("Erreur de chargement de l'image");
          }}
        />
      </div>
      
      <div className="profile-info">
        <p>I'm a composer based in Paris, specializing in original scores for video games, films and television. I'm also a songwriter across different genres.</p>
      </div>

      <div className="social-icons">
        <button onClick={handleEmailClick} className="email-button" aria-label="Send email">
          <MdOutlineEmail className="icon" />
        </button> 
      </div>
    </div>
  );
};

export default Profile;
