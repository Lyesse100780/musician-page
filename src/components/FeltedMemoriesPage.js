// src/components/FeltedMemoriesPage.js
import React from "react";
import FeltedAudioPlayer, { fullFeltedTracks } from "./FeltedAudioPlayer";
import "./FeltedMemories.css";

const livingFormsPlaylists = [
  {
    title: "Felted Memories",
    artwork: "/images/felted-memories-square.png",
    description: [
      "Felted Memories is a suite of intimate pieces.",
      "Blending soft piano performances with subtle bass lines, modular atmospheres, drifting pads and living sound design, the album explores memory, silence and emotional space through a warm and restrained sonic palette.",
    ],
    tracks: fullFeltedTracks,
  },
  {
    title: "Shifting Cells",
    artwork: "/images/shifting-cells-square.png",
    description: [
      "Shifting Cells is a suite of evolving minimal forms.",
      "Built around repeating motifs, harmonic cells and organic movement, the album blends intimate piano performances with modular textures, subtle rhythmic patterns and shifting atmospheric layers. Through repetition, transformation and suspended harmonic motion, each piece slowly unfolds like a living structure in constant evolution.",
    ],
    tracks: [],
  },
  {
    title: "Noire",
    artwork: "/images/noire-square.png",
    description: [
      "Noire is a suite of dark harmonies and atmospheres.",
      "Blending minimal piano performances with deep textures, suspended tension, organic movement and cinematic space, the album explores darkness with restraint and elegance. Warm low-end, evolving atmospheres and subtle friction create immersive pieces moving between intimacy, melancholy and quiet psychological tension.",
    ],
    tracks: [],
  },
  {
    title: "Rising Forms",
    artwork: "/images/rising-forms-square.png",
    description: [
      "Rising Forms is a suite of expanding forms and evolving motion.",
      "Built around luminous harmonic movement, delicate piano gestures and airy organic textures, the album explores emotional lift, transformation and quiet momentum through a bright, cinematic palette.",
    ],
    tracks: [],
  },
  {
    title: "Cold World",
    artwork: "/images/cold-world-square.png",
    description: [
      "Cold World is a suite of static soundscapes and cinematic tension.",
      "Blending restrained piano, suspended harmonies, frozen textures and subtle organic movement, the album creates spacious cues for stillness, distance, mystery and emotional isolation.",
    ],
    tracks: [],
  },
  {
    title: "Unfolded Horizons",
    artwork: "/images/unfolded-horizons-square.png",
    description: [
      "Unfolded Horizons is a suite of floating harmonies and suspended motion.",
      "Designed around slow emotional expansion, soft piano colors and wide atmospheric textures, the album moves between openness, wonder and restrained cinematic uplift.",
    ],
    tracks: [],
  },
];

const collectionPreview = livingFormsPlaylists.map(({ title, artwork, description }) => ({
  title,
  artwork,
  subtitle: description[0].replace(`${title} is a suite of `, ""),
}));

export default function FeltedMemoriesPage() {
  return (
    <main className="felted-page">
      {/* HERO BANNER */}
      <section
        className="hero"
        style={{ backgroundImage: 'url("/images/hero-living-forms.png")' }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title sr-only">The Living Forms</h1>
        </div>
      </section>

      {/* TEXT SECTION */}
      <section className="felted-section living-forms-intro-section">
        <div className="felted-inner">
          <p className="felted-paragraph">
            <em>The Living Forms</em> is a collection of organic cinematic
            worlds for sync, games and visual storytelling. Each release is
            shaped around a distinct emotional landscape, with cues designed to
            feel personal, tactile and ready to place against picture.
          </p>

          <div className="collection-strip" aria-label="The Living Forms albums">
            {collectionPreview.map((album) => (
              <a
                className="collection-card"
                href="#living-forms-player"
                aria-label={`Listen to ${album.title}`}
                key={album.title}
              >
                <img src={album.artwork} alt="" loading="lazy" />
              </a>
            ))}
          </div>

          <p className="felted-paragraph">
            The first album, <em>Felted Memories</em>, stays close to the
            emotion: intimate rubato piano, subtle modular textures and warm
            harmonies that unfold with restraint. The writing leaves space for
            the image while giving weight to small gestures and quiet
            transformation.
          </p>
        </div>
      </section>

      {/* LISTEN SECTION */}
      <section className="felted-section listen-section" id="living-forms-player">
        <div className="felted-inner">
          <FeltedAudioPlayer
            playlists={livingFormsPlaylists}
            showIntro={false}
            ctaHref=""
            ctaLabel=""
            className="felted-page-player"
          />
        </div>
      </section>

      {/* FINAL INFO SECTION */}
      <section className="felted-section">
        <div className="felted-inner">
          <p className="felted-paragraph">
            Although each album has its own world, the collection is built to
            give publishers, libraries, and supervisors emotional cues that feel
            personal yet remain flexible, editable, and production-ready for
            film, series, documentaries, and narrative-driven games.
          </p>

          <p className="felted-paragraph">
            Each piece comes with a complete set of variations and loop-friendly
            excerpts, giving editors a flexible toolkit to adapt the music to
            different scene lengths and emotional intensities while keeping the
            overall narrative flow intact.
          </p>
        </div>
        <div className="more-work">
          <a
            href="https://www.lyessemusic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            More about my work →
          </a>
        </div>
      </section>
    </main>
  );
}
