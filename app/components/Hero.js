"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const SPECIALITIES = [
  "expert Next.js & React",
  "développeur Node.js & Express",
  "optimisateur SEO & Performance",
  "créateur d'expériences web modernes",
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.offsetTop - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SPECIALITIES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section container">
      <div className="hero-content">
        <div className="hero-text">
          <span className="badge">Disponible pour de nouveaux projets</span>
          <h1>
            Salut, je suis <span className="highlight">Abdul YSUF</span>
          </h1>
          <h2>
            Développeur Web <br />
            <span className="dynamic-text">
              {mounted ? SPECIALITIES[index] : SPECIALITIES[0]}
            </span>
          </h2>
          <p>
            Je construis des applications web modernes, scalables et centrées
            sur l'utilisateur. Basé en France, je transforme vos idées en code
            performant.
          </p>
          <div className="hero-cta">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("projets")}
            >
              Voir mes travaux
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection("formulaire")}
            >
              Me contacter
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="blob-bg"></div>
          <Image
            src="https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_svg/v1742851499/programation_um4l9a.svg"
            alt="Abdul au travail"
            width={450}
            height={450}
            priority
            className="hero-image"
            unoptimized
          />
        </div>
      </div>

      <div className="scroll-hint">
        <div className="mouse"></div>
        <span>Scrollez pour découvrir</span>
      </div>
    </section>
  );
}
