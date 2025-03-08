import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./AudioPlayer.css";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const AudioPlayer = () => {
  const allTracks = [
    { title: "Song of Dawn", file: "/audio/Song_of_Dawn.mp3", duration: 0, tags: ["Song", "Scoring"] },
    { title: "One Day", file: "/audio/One Day.mp3", duration: 0, tags: ["Song"] },
    { title: "Melody of the Deep", file: "/audio/Melody of the Deep.mp3", duration: 0, tags: ["Scoring"] },
    { title: "The Scarlet Mountains", file: "/audio/The Scarlet Mountains.mp3", duration: 0, tags: ["Orchestral", "Scoring"] },
    { title: "The Seeds of Darkness", file: "/audio/The Seeds of Darkness.mp3", duration: 0, tags: ["Orchestral", "Scoring"] },
    { title: "Red Alma Theme", file: "/audio/Red Alma Theme.mp3", duration: 0, tags: ["Theme", "Orchestral"] },
    { title: "March of the Grey Order", file: "/audio/March of the Grey Order.mp3", duration: 0, tags: ["Theme", "Orchestral"] },
    { title: "Scavengers Main Theme", file: "/audio/Scavengers Main Theme.mp3", duration: 0, tags: ["Theme"] },
    { title: "Adrielle The Unusual Fairy", file: "/audio/Adrielle The Unusual Fairy.mp3", duration: 0, tags: ["Theme", "Orchestral"] },
    { title: "E-Motions", file: "/audio/E-Motions.mp3", duration: 0, tags: ["Song"] },
  ];

  const tags = ["All", "Orchestral", "Theme", "Song", "Scoring"];
  const [selectedTag, setSelectedTag] = useState("All");
  const [tracks, setTracks] = useState(allTracks);
  const [currentTrack, setCurrentTrack] = useState(allTracks[0]);

  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackDurations, setTrackDurations] = useState({});

  useEffect(() => {
    if (selectedTag === "All") {
      setTracks(allTracks);
    } else {
      setTracks(allTracks.filter(track => track.tags.includes(selectedTag)));
    }
    setCurrentTrack(allTracks[0]);
  }, [selectedTag]);

  useEffect(() => {
    if (wavesurfer.current) {
      wavesurfer.current.stop();
      wavesurfer.current.destroy();
    }

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      url: currentTrack.file,
      waveColor: "#B3B3B3",
      progressColor: "#00F7FF",
      cursorColor: "transparent",
      height: 120,
      responsive: true,
      normalize: true,
      backend: "WebAudio",
      hideScrollbar: true,
    });

    wavesurfer.current.on("ready", () => {
      const trackDuration = wavesurfer.current.getDuration();
      setTrackDurations(prev => ({ ...prev, [currentTrack.title]: trackDuration }));
      if (isPlaying) {
        wavesurfer.current.play();
      }
    });

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [currentTrack]);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(wavesurfer.current.isPlaying());
    }
  };

  const changeTrack = (track) => {
    if (wavesurfer.current) {
      wavesurfer.current.stop();
    }
    setIsPlaying(true);
    setCurrentTrack(track);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="app-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="tag-container" style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
        {tags.map(tag => (
          <button key={tag} onClick={() => setSelectedTag(tag)} style={{ background: selectedTag === tag ? "#00F7FF" : "#666", color: "black", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>{tag}</button>
        ))}
      </div>
      <div className="audio-player" style={{ display: "flex", alignItems: "center", gap: "1rem", background: "transparent", boxShadow: "none", marginBottom: "1rem", width: "100%" }}>
        <button 
          onClick={togglePlay} 
          className="control-button" 
          style={{
            backgroundColor: isPlaying ? "#00E5EE" : "#B3B3B3",
            color: "#fff",
            padding: "1rem",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translateY(15%)",
          }}
        >
          {isPlaying ? <BsFillPauseFill size={20} /> : <BsFillPlayFill size={20} />}
        </button>
        <div className="waveform-container" style={{ flexGrow: 1, position: "relative" }}>
          <div className="waveform" ref={waveformRef} style={{ background: "transparent", width: "100%" }}></div>
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: "0 30px", color: "white", textAlign: "left", marginTop: "1rem", width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        {tracks.map((track, index) => (
          <li 
            key={index} 
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              padding: "0.5rem 0", 
              borderBottom: "1px solid #00F7FF", 
              cursor: "pointer", 
              width: "100%", 
              transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
              color: currentTrack.title === track.title ? "#00F7FF" : "white",
              transform: currentTrack.title === track.title ? "scale(1.05)" : "scale(1)"
            }} 
            onClick={() => changeTrack(track)}
          >
            <span style={{ flex: 1, textAlign: "left" }}>{track.title}</span>
            <span style={{ textAlign: "right" }}>{formatTime(trackDurations[track.title] || 0)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioPlayer;