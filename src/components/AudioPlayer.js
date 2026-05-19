import React from "react";
import FeltedAudioPlayer, { homeFeltedTracks } from "./FeltedAudioPlayer";

export default function AudioPlayer() {
  return (
    <FeltedAudioPlayer
      tracks={homeFeltedTracks}
      ctaHref="/the-living-forms"
      ctaLabel="Explore The Living Forms"
    />
  );
}
