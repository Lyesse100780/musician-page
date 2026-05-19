// src/components/FeltedMemoriesPage.js
import React from "react";
import FeltedAudioPlayer, { fullFeltedTracks } from "./FeltedAudioPlayer";
import "./FeltedMemories.css";

export default function FeltedMemoriesPage() {
  return (
    <main className="felted-page">
      {/* HERO BANNER */}
      <section
        className="hero"
        style={{ backgroundImage: 'url("/images/hero-felted-memories.png")' }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title sr-only">Felted Memories</h1>
        </div>
      </section>

      {/* TEXT SECTION */}
      <section className="felted-section">
        <div className="felted-inner">
          <p className="felted-paragraph">
            <em>Felted Memories</em> is a cohesive suite of intimate rubato
            piano cues. Each track brings its own nuance, yet the collection
            forms a single emotional journey — a set of complementary movements
            that flow naturally from one to the next.
          </p>

          <p className="felted-paragraph">
            The music stays close to the emotion: an intimate, close-up piano
            built around gentle arpeggios and breathing phrases, supported by
            subtle modular textures and warm harmonies that unfold with
            restraint. The writing is understated and pattern-driven, leaving
            space for the image while giving weight to small gestures and
            letting the moment land without overpowering the picture.
          </p>
        </div>
      </section>

      {/* LISTEN SECTION */}
      <section className="felted-section listen-section">
        <div className="felted-inner">
          <FeltedAudioPlayer
            tracks={fullFeltedTracks}
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
            Although the project is deeply personal, it’s built to give
            publishers, libraries, and supervisors emotional cues that feel
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
