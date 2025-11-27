import React from "react";
import "./ProjectCarousel.css";

const projects = [
  {
    img: "/images/project13.jpg",
    title: "Dreams of the Old Ones",
    type: "Narrative Video Game – OST",
    link: "https://masteroflore.com/dreams-of-the-old-ones"
  },
   {
    img: "/images/project12.jpg",
    title: "Loom: Woven Worlds",
    type: "Narrative Video Game – OST",
    link: "https://masteroflore.com/loom-wovenworlds"
  },
  {
    img: "/images/project14.jpg",
    title: "Felted Memories",
    type: "Album – Piano & Textures",
    link: "https://www.lyessemusic.com/felted-memories"
  },
  {
    img: "/images/project1.jpg",
    title: "AracKhan Wars",
    type: "Board Game – OST & Trailers",
    link: "https://www.youtube.com/watch?v=Hm1rRqMGNQY&list=PLqFEGSY61LzhSvJzF6av27MmloRQMcbqC"
  },
  {
    img: "/images/project2.webp",
    title: "Dante Inferno",
    type: "Board Game – Trailers",
    link: "https://www.youtube.com/watch?v=x87weHkIx6A"
  },
  {
    img: "/images/project3.jpg",
    title: "Solomon Kane",
    type: "Narrative OST",
    link: "https://www.kickstarter.com/projects/1162110258/solomon-kane"
  },
  {
    img: "/images/project4.png",
    title: "HEL: The Last Saga",
    type: "Narrative OST",
    link: "https://www.kickstarter.com/projects/1162110258/hel-the-last-saga?lang=fr"
  },
  {
    img: "/images/project5.jpeg",
    title: "AracKhan Wars",
    type: "Trailer – Card Game",
    link: "https://youtu.be/Em6hIIVjpI0?si=C3hbEAr4DVVV3lxF"
  },
  {
    img: "/images/project6.webp",
    title: "Nyakuza",
    type: "Trailer — Board Game",
    link: "https://youtu.be/AKVnx-f3Ws8?si=blq47kHd0DRzGvmk"
  },
  {
    img: "/images/project7.webp",
    title: "Anastyr",
    type: "Board Game – Trailer",
    link: "https://www.youtube.com/watch?v=iwJ1WoIlHCs"
  },
  {
    img: "/images/project8.jpg",
    title: "Leslie Feat. Bobby Valentino",
    type: "Accorde-moi",
    link: "https://www.youtube.com/watch?v=ZMo6v_Vx3wI"
  },
  {
    img: "/images/project9.jpg",
    title: "Amel Bent",
    type: "J'ai changé d'avis",
    link: "https://www.youtube.com/watch?v=kkutyAWASzA"
  },
  {
    img: "/images/project10.png",
    title: "Twisted Realms",
    type: "Trailer — Board Game",
    link: "https://youtu.be/sx8DsRREcD4?si=Tq0iF4_-KNPXd50L"
  },
];

export default function ProjectCarousel() {
  return (
    <div className="projects-section">
      <h2 className="video-title">Demoreel</h2>

      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube-nocookie.com/embed/wa5s3tzyYA0"
          title="Demo Reel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="projects-header">
        <h3>Selected works</h3>
        <p>A selection of scores for games, trailers and albums.</p>
      </div>

      {/* ⭐ Nouvelle Grid Dynamique */}
      <div className="dynamic-grid">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item"
          >
            <img src={p.img} alt={p.title} loading="lazy" />
            <div className="hover-title">
              <strong>{p.title}</strong>
              <br />
              <span>{p.type}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
