import React, { useEffect } from "react";
import "./NarrativeSuite.css";

const mailerLiteAccountId = "1914173";

export default function NarrativeSuitePage() {
  useEffect(() => {
    if (window.ml) {
      window.ml("account", mailerLiteAccountId);
      return;
    }

    window.ml =
      window.ml ||
      function () {
        (window.ml.q = window.ml.q || []).push(arguments);
      };

    const scriptId = "mailerlite-universal";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://assets.mailerlite.com/js/universal.js";
      document.head.appendChild(script);
    }

    window.ml("account", mailerLiteAccountId);
  }, []);

  return (
    <main className="narrative-page">
      <section className="narrative-hero">
        <div className="narrative-hero-overlay">
          <div className="narrative-hero-content">
            <h1>
              <span className="title-the">The</span>
              <span>Narrative</span>
              <span>Suite</span>
            </h1>
            <p>
              Living soundscapes for games that refuse to feel static.
            </p>
          </div>
        </div>
      </section>

      <section className="narrative-section">
        <div className="narrative-inner">
          <p>
            The Narrative Suite is an upcoming collection of premium adaptive
            audio packs for games.
          </p>
          <p>
            Each release combines full mix loops, separated layers and
            implementation-ready material, designed to help developers build
            living atmospheres without starting from zero.
          </p>
          <div className="narrative-mailerlite-box">
            <p className="download-main">
              Volume 0 — <strong>Free</strong> Old Worlds Starter Pack
            </p>
            <p className="download-sub">
              Three layered adaptive soundscapes for exploration, tension and
              ancient places. Includes full mix loops, separated layers and
              clean loop points for fast implementation in game audio
              workflows.
            </p>
            <div className="ml-embedded" data-form="FcLnum"></div>
          </div>
          <a className="narrative-home-link" href="/#demo-reel">
            More about my work
          </a>
        </div>
      </section>
    </main>
  );
}
