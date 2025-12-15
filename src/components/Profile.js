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
        <p>I’m a composer based in Paris, crafting narrative and thematic music driven by emotion, atmosphere and storytelling.</p>
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
            <span>All Inquiries: contact@lyessemusic.com</span>
            {copiedEmail === 'contact@lyessemusic.com' && <span className="copied">Copied!</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
