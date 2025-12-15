import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./AudioPlayer.css";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const AudioPlayer = () => {
  const allTracks = [
    { title: "Streets of Kesi", file: "/audio/Streets of Kesi.mp3", tags: ["Scoring"], excerpt: "Excerpt of Loom the Interactive RPG" },
    { title: "Slow Rising", file: "/audio/Slow Rising.mp3", tags: ["Scoring"], excerpt: "Excerpt of The Call of Chtulhu the Interactive RPG" },

    { title: "Song of Dawn", file: "/audio/Song_of_Dawn.mp3", tags: ["Song"], excerpt: "Excerpt of The Children of Dawn Suite" },
    { title: "One Day", file: "/audio/One Day.mp3", tags: ["Song"], excerpt: "Excerpt of The Children of Dawn Suite" },

    {
      title: "Red Alma Theme",
      file: "/audio/Red Alma Theme.mp3",
      tags: ["Theme", "Orchestral"],
      excerpt: "Excerpt of The Children of Dawn Suite",
    },
    {
      title: "March of the Grey Order",
      file: "/audio/March of the Grey Order.mp3",
      tags: ["Theme", "Orchestral"],
      excerpt: "Excerpt of The Grey Order Suite", // <- remplis ici (ex: "Excerpt of Loom")
    },
    {
      title: "Scavengers Main Theme",
      file: "/audio/Scavengers Main Theme.mp3",
      tags: ["Theme"],
      excerpt: "Excerpt of Tales of the Scavengers",
    },

    { title: "Melody of the Deep", file: "/audio/Melody of the Deep.mp3", tags: ["Scoring"], excerpt: "Excerpt of Tales of the Scavengers" },
    { title: "The Scarlet Mountains", file: "/audio/The Scarlet Mountains.mp3", tags: ["Orchestral", "Scoring"], excerpt: "Excerpt of Tales of the Shagam Suite" },
    { title: "E-Motions", file: "/audio/E-Motions.mp3", tags: ["Song"], excerpt: "Excerpt of The Puppet Master" },
    { title: "The Seeds of Darkness", file: "/audio/The Seeds of Darkness.mp3", tags: ["Scoring"], excerpt: "Excerpt of The Grey Order Suite" },
  ];

  const tags = ["All", "Orchestral", "Theme", "Song", "Scoring"];
  const hiddenTags = new Set(["All", "Orchestral"]);
  const visibleTags = tags.filter((t) => !hiddenTags.has(t));

  const [selectedTag, setSelectedTag] = useState("Theme");
  const [currentTrack, setCurrentTrack] = useState(null);

  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const filteredTracks =
    selectedTag === "All"
      ? allTracks
      : allTracks.filter((track) => track.tags.includes(selectedTag));

  useEffect(() => {
    if (!waveformRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#B3B3B3",
      progressColor: "#00F7FF",
      cursorColor: "transparent",
      height: 80,
      normalize: true,
      backend: "MediaElement",
    });

    return () => {
      if (wavesurfer.current) wavesurfer.current.destroy();
    };
  }, []);

  useEffect(() => {
    const unlockAudio = () => {
      const silentAudio = new Audio(
        "data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"
      );
      silentAudio.volume = 0;

      silentAudio
        .play()
        .then(() => {
          silentAudio.pause();
          silentAudio.remove();
        })
        .catch(console.error);

      if (wavesurfer.current?.backend?.ac) {
        const audioCtx = wavesurfer.current.backend.ac;
        if (audioCtx.state === "suspended") audioCtx.resume();
      }

      setHasInteracted(true);
      document.removeEventListener("click", unlockAudio);
    };

    document.addEventListener("click", unlockAudio);
    return () => document.removeEventListener("click", unlockAudio);
  }, []);

  const togglePlay = async (track) => {
    try {
      if (!hasInteracted) {
        const silentAudio = new Audio(
          "data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"
        );
        silentAudio.volume = 0;

        await silentAudio.play().catch(console.error);
        silentAudio.pause();
        silentAudio.remove();
        setHasInteracted(true);
      }

      if (currentTrack?.title === track.title) {
        wavesurfer.current.playPause();
      } else {
        setCurrentTrack(track);
        await wavesurfer.current.load(track.file);

        wavesurfer.current.once("ready", async () => {
          await new Promise((resolve) => setTimeout(resolve, 100));
          await wavesurfer.current.play().catch(console.error);
        });
      }

      setIsPlaying(wavesurfer.current.isPlaying());
    } catch (err) {
      console.error("Erreur de lecture :", err);
    }
  };

  return (
    <div className="audio-container">
      <div className="filter-buttons">
        {visibleTags.map((tag) => (
          <button
            key={tag}
            className={`filter-button ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="waveform-container" ref={waveformRef}></div>

      <ul className="track-list">
        {filteredTracks.map((track, index) => (
          <li
            key={index}
            className={currentTrack?.title === track.title && isPlaying ? "active" : ""}
          >
            <div className="track-row">
              <button className="play-button" onClick={() => togglePlay(track)}>
                {currentTrack?.title === track.title && isPlaying ? (
                  <BsFillPauseFill size={16} />
                ) : (
                  <BsFillPlayFill size={16} />
                )}
              </button>

              <div className="track-meta">
                <span className="track-title" onClick={() => togglePlay(track)}>
                  {track.title}
                </span>

                {!!track.excerpt?.trim() && (
                  <>
                    <span className="track-bracket">[</span>
                    <span className="track-excerpt-text">{track.excerpt}</span>
                    <span className="track-bracket">]</span>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioPlayer;
