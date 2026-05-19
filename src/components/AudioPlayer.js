import React from "react";
import FeltedAudioPlayer, { homeFeltedTracks } from "./FeltedAudioPlayer";

export default function AudioPlayer() {
  return <FeltedAudioPlayer tracks={homeFeltedTracks} />;
}
