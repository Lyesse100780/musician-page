import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Profile from './components/Profile';
import AudioPlayer from './components/AudioPlayer';
import ProjectCarousel from './components/ProjectCarousel';
import './App.css';

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


function Projects() {
  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      <ProjectCarousel />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
