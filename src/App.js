import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Profile from './components/Profile';
import AudioPlayer from './components/AudioPlayer';
import ProjectCarousel from './components/ProjectCarousel';
import FeltedMemoriesPage from './components/FeltedMemoriesPage'; // 👈 AJOUT
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

// MAIN ROUTING
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 🔥 NOUVELLE LANDING PAGE */}
        <Route path="/felted-memories" element={<FeltedMemoriesPage />} />

        {/* SI TU VEUX GARDER LA PAGE PROJECTS */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
