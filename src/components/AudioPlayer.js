import React, { useRef, useState } from "react";
import FeltedAudioPlayer, { homeFeltedTracks } from "./FeltedAudioPlayer";

const narrativeTracks = [
  {
    title: "Song of Dawn",
    file: "/audio/Song_of_Dawn.mp3",
    excerpt: "Narrative Scores",
    artwork: "/images/song-of-dawn.png",
  },
  {
    title: "Scavengers Main Theme",
    file: "/audio/Scavengers Main Theme.mp3",
    excerpt: "Narrative Scores",
    artwork: "/images/scavengers.png",
  },
  {
    title: "Streets of Kesi",
    file: "/audio/Streets of Kesi.mp3",
    excerpt: "Narrative Scores",
    artwork: "/images/project12.jpg",
  },
];

export default function AudioPlayer() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollTo({
      left: slider.clientWidth * index,
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setActiveSlide(Math.round(slider.scrollLeft / slider.clientWidth));
  };

  return (
    <div className="home-player-carousel">
      <div
        className="home-player-slider"
        ref={sliderRef}
        onScroll={handleScroll}
        aria-label="Featured music players"
      >
        <div className="home-player-slide">
          <FeltedAudioPlayer
            tracks={homeFeltedTracks}
            ctaHref="/the-living-forms"
            ctaLabel="Explore The Living Forms"
          />
        </div>
        <div className="home-player-slide">
          <FeltedAudioPlayer
            tracks={narrativeTracks}
            ctaHref=""
            ctaLabel=""
            introArtwork="/images/song-of-dawn.png"
            introTitle={
              <>
                A wider selection of <em>narrative scores</em> for games and
                visual storytelling.
              </>
            }
            introSubtitle="Themes, places and character-driven cues written to support story, movement and atmosphere."
          />
        </div>
      </div>

      <div className="home-player-dots" aria-label="Choose music player">
        {[0, 1].map((index) => (
          <button
            key={index}
            type="button"
            className={"home-player-dot" + (activeSlide === index ? " active" : "")}
            onClick={() => goToSlide(index)}
            aria-label={`Show player ${index + 1}`}
            aria-current={activeSlide === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
