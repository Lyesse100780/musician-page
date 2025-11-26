// src/components/FeltedMemoriesPage.js
import React from "react";
import "./FeltedMemories.css";

export default function FeltedMemoriesPage() {
  return (
    <main className="felted-page">
      {/* HERO BANNER */}
      <section
        className="hero"
        style={{ backgroundImage: 'url("/images/felted-banner.jpg")' }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-kicker">Intimate Piano · Cinematic Textures</p>

            <h1 className="hero-title">Felted Memories</h1>

            <p className="hero-subtitle">
              Intimate piano & evolving textures in motion.
            </p>

            <p className="hero-credit">
              Written &amp; arranged by Lyesse Hamadou
            </p>
          </div>
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

      {/* LISTEN / SOUNDCLOUD SECTION */}
      <section className="felted-section listen-section">
  <div className="felted-inner">
    <div className="soundcloud-wrapper">
      <iframe
        title="Felted Memories – Playlist"
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="0"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2148295055%3Fsecret_token%3Ds-nX5RXekKGrl&color=%23291710&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
      />
    </div>
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
      </section>
    </main>
  );
}
