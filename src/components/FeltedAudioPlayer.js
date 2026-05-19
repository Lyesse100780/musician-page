import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import "./AudioPlayer.css";

export const fullFeltedTracks = [
  { title: "Heart of Glass", file: "/audio/felted-heart-of-glass.mp3", excerpt: "Felted Memories" },
  { title: "Before it Fades", file: "/audio/felted-before-it-fades.mp3", excerpt: "Felted Memories" },
  { title: "Between Tides & Sleep", file: "/audio/felted-between-tides-and-sleep.mp3", excerpt: "Felted Memories" },
  { title: "The Shape of Quiet", file: "/audio/felted-the-shape-of-quiet.mp3", excerpt: "Felted Memories" },
  { title: "Falling Inwards", file: "/audio/felted-falling-inwards.mp3", excerpt: "Felted Memories" },
  { title: "Folded into Time", file: "/audio/felted-folded-into-time.mp3", excerpt: "Felted Memories" },
  { title: "The Secret Stairs", file: "/audio/felted-the-secret-stairs.mp3", excerpt: "Felted Memories" },
  { title: "Life Beneath Ashes", file: "/audio/felted-life-beneath-ashes.mp3", excerpt: "Felted Memories" },
];

export const homeFeltedTracks = fullFeltedTracks.slice(0, 3).map((track) => ({
  ...track,
  excerpt: "Excerpt of Felted Memories",
}));

const isAbortError = (error) =>
  error?.name === "AbortError" || error?.message === "Fetch is aborted";

export default function FeltedAudioPlayer({
  tracks = homeFeltedTracks,
  playlists = null,
  showIntro = true,
  ctaHref = "/felted-memories",
  ctaLabel = "More about Felted Memories",
  className = "",
}) {
  const [activePlaylistIndex, setActivePlaylistIndex] = useState(0);
  const activePlaylist = playlists?.[activePlaylistIndex] || null;
  const activeTracks = activePlaylist?.tracks || tracks;
  const hasTracks = activeTracks.length > 0;
  const [currentTrack, setCurrentTrack] = useState(activeTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    setCurrentTrack(activeTracks[0] || null);
    setIsPlaying(false);
  }, [activeTracks]);

  useEffect(() => {
    if (!waveformRef.current || !activeTracks[0]) return;

    const wave = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#B3B3B3",
      progressColor: "#b86f43",
      cursorColor: "transparent",
      height: 80,
      normalize: true,
      backend: "MediaElement",
    });

    wavesurfer.current = wave;
    wave.on("play", () => setIsPlaying(true));
    wave.on("pause", () => setIsPlaying(false));
    wave.on("finish", () => setIsPlaying(false));

    wave.load(activeTracks[0].file).catch((error) => {
      if (!isAbortError(error)) {
        console.error("Erreur waveform :", error);
      }
    });

    return () => {
      if (wavesurfer.current === wave) {
        wavesurfer.current = null;
      }
      wave.destroy();
    };
  }, [activeTracks]);

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
      if (!wavesurfer.current) return;

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
        setIsPlaying(false);
        await wavesurfer.current.load(track.file).catch((error) => {
          if (isAbortError(error)) {
            return;
          }
          throw error;
        });

        wavesurfer.current.once("ready", async () => {
          await new Promise((resolve) => setTimeout(resolve, 100));
          await wavesurfer.current.play().catch(console.error);
        });
      }
    } catch (err) {
      console.error("Erreur de lecture :", err);
    }
  };

  return (
    <div className={`audio-container felted-audio-player ${className}`.trim()}>
      <section className="audio-slide sync-slide" aria-label="Felted Memories player">
        {!!playlists?.length && (
          <div className="playlist-tabs" aria-label="The Living Forms playlists">
            {playlists.map((playlist, index) => (
              <button
                key={playlist.title}
                type="button"
                className={
                  "playlist-tab" +
                  (activePlaylistIndex === index ? " active" : "")
                }
                onClick={() => {
                  setActivePlaylistIndex(index);
                }}
              >
                {playlist.title}
              </button>
            ))}
          </div>
        )}

        {activePlaylist && (
          <div className="album-panel">
            <img
              className="album-cover"
              src={activePlaylist.artwork}
              alt={`${activePlaylist.title} artwork`}
            />
            <div className="album-copy">
              <h2>{activePlaylist.title}</h2>
              {activePlaylist.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {showIntro && (
          <div className="sync-header">
            <img
              className="sync-cover"
              src="/images/felted-memories-square.png"
              alt="Felted Memories artwork"
            />
            <div className="sync-intro">
              <p>
                After years composing for artists, games and trailers, I created
                <em> Felted Memories</em> — my first sync-focused album.
              </p>
              <p>
                Intimate piano, modular textures and organic imperfections, written for
                memory, loss, tenderness and quiet transformation.
              </p>
            </div>
          </div>
        )}

        {hasTracks ? (
          <>
            <div className="waveform-container" ref={waveformRef}></div>

            <ul className="track-list">
              {activeTracks.map((track) => (
                <li
                  key={track.title}
                  className={currentTrack?.title === track.title ? "active" : ""}
                >
                  <div className="track-row">
                    <button
                      className="play-button"
                      onClick={() => togglePlay(track)}
                      aria-label={`${currentTrack?.title === track.title && isPlaying ? "Pause" : "Play"} ${track.title}`}
                    >
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
          </>
        ) : (
          <p className="playlist-empty">Tracks coming soon.</p>
        )}

        {ctaHref && ctaLabel && (
          <a className="felted-link" href={ctaHref}>
            {ctaLabel}
          </a>
        )}
      </section>
    </div>
  );
}
