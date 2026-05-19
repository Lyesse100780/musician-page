import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Banner from './components/Banner';
import Profile from './components/Profile';
import AudioPlayer from './components/AudioPlayer';
import ProjectCarousel from './components/ProjectCarousel';
import FeltedMemoriesPage from './components/FeltedMemoriesPage'; // 👈 AJOUT
import NarrativeSuitePage from './components/NarrativeSuitePage';
import './App.css';

// HOME PAGE
function Home() {
  return (
    <div className="app-container">
      <Banner />
      <Profile />
      <AudioPlayer />
      <ProjectCarousel /> {/* Le carousel doit être immédiatement sous l'audio player */}
    </div>
  );
}

// SIMPLE PROJECT PAGE (si tu veux la garder)
function Projects() {
  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      <ProjectCarousel />
    </div>
  );
}

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const scrollToTarget = () => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const timeout = window.setTimeout(scrollToTarget, 80);
    return () => window.clearTimeout(timeout);
  }, [hash, pathname]);

  return null;
}

// MAIN ROUTING
function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 🔥 NOUVELLE LANDING PAGE */}
        <Route path="/the-living-forms" element={<FeltedMemoriesPage />} />
        <Route path="/felted-memories" element={<FeltedMemoriesPage />} />
        <Route path="/the-narrative-suite" element={<NarrativeSuitePage />} />

        {/* SI TU VEUX GARDER LA PAGE PROJECTS */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
