import React, { useState } from 'react';
import { MdOutlineEmail, MdMusicNote, MdBusiness } from 'react-icons/md';
import './Profile.css';

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState('');

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail('');
      setShowPopup(false); // Ferme la popup après le délai
    }, 2000);
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
        <div className="social-icons">
          <button 
            className="email-button" 
            onClick={() => setShowPopup(!showPopup)}
          >
            <MdOutlineEmail className="icon" />
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="email-popup centered-popup">
          <div className="email-info" onClick={() => handleCopy('contact@lyessemusic.com')}>
            <MdMusicNote className="icon" />
            <span>Artistic Inquiries: contact@lyessemusic.com</span>
            {copiedEmail === 'contact@lyessemusic.com' && <span className="copied">Copied!</span>}
          </div>
          <div className="email-info" onClick={() => handleCopy('martialkool.louis@bozdaya.com')}>
            <MdBusiness className="icon" />
            <span>Mgmt & Business: martialkool.louis@bozdaya.com</span>
            {copiedEmail === 'martialkool.louis@bozdaya.com' && <span className="copied">Copied!</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
