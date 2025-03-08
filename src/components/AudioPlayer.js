import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./AudioPlayer.css";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const AudioPlayer = () => {
    const allTracks = [
        { title: "Song of Dawn", file: "/audio/Song_of_Dawn.mp3", tags: ["Song", "Scoring"] },
        { title: "One Day", file: "/audio/One Day.mp3", tags: ["Song"] },
        { title: "Red Alma Theme", file: "/audio/Red Alma Theme.mp3", tags: ["Theme", "Orchestral"] },
        { title: "March of the Grey Order", file: "/audio/March of the Grey Order.mp3", tags: ["Theme", "Orchestral"] },
        { title: "Scavengers Main Theme", file: "/audio/Scavengers Main Theme.mp3", tags: ["Theme"] },
        { title: "Adrielle The Unusual Fairy", file: "/audio/Adrielle The Unusual Fairy.mp3", tags: ["Theme", "Orchestral"] },
        { title: "Melody of the Deep", file: "/audio/Melody of the Deep.mp3", tags: ["Scoring"] },
        { title: "The Scarlet Mountains", file: "/audio/The Scarlet Mountains.mp3", tags: ["Orchestral", "Scoring"] },
        { title: "E-Motions", file: "/audio/E-Motions.mp3", tags: ["Song"] },
        { title: "The Seeds of Darkness", file: "/audio/The Seeds of Darkness.mp3", tags: ["Scoring"] } 
      ];
      

  const tags = ["All", "Orchestral", "Theme", "Song", "Scoring"];
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentTrack, setCurrentTrack] = useState(null);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🎯 Filtre les pistes selon le tag sélectionné
  const filteredTracks = selectedTag === "All"
    ? allTracks
    : allTracks.filter(track => track.tags.includes(selectedTag));

  useEffect(() => {
    if (!waveformRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#B3B3B3",
      progressColor: "#00F7FF",
      cursorColor: "transparent",
      height: 80,
      normalize: true,
      backend: "WebAudio",
    });

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const togglePlay = (track) => {
    if (!wavesurfer.current) return;

    if (currentTrack?.title === track.title) {
      if (isPlaying) {
        wavesurfer.current.pause();
      } else {
        wavesurfer.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (wavesurfer.current.isPlaying()) {
        wavesurfer.current.stop();
      }

      setCurrentTrack(track);
      wavesurfer.current.load(track.file);

      wavesurfer.current.on("ready", () => {
        wavesurfer.current.play();
        setIsPlaying(true);
      });
    }
  };

  return (
    <div className="audio-container">
      {/* ✅ Boutons de filtres */}
      <div className="filter-buttons">
        {tags.map(tag => (
          <button 
            key={tag} 
            className={`filter-button ${selectedTag === tag ? "active" : ""}`} 
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ✅ Waveform */}
      <div className="waveform-container" ref={waveformRef}></div>

      {/* ✅ Liste des titres */}
      <ul className="track-list">
        {filteredTracks.map((track, index) => (
          <li
            key={index}
            className={currentTrack?.title === track.title && isPlaying ? "active" : ""}
          >
            <button className="play-button" onClick={() => togglePlay(track)}>
              {currentTrack?.title === track.title && isPlaying ? (
                <BsFillPauseFill size={16} />
              ) : (
                <BsFillPlayFill size={16} />
              )}
            </button>
            <span onClick={() => togglePlay(track)}>{track.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioPlayer;
