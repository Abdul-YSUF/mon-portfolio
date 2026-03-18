"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const NAV_LINKS = [
  { id: "qui_suis-je", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projets", label: "Projets" },
  { id: "services", label: "Services" },
  { id: "formulaire", label: "Contact" },
];

const HEADER_HEIGHT = 0;

export default function Header({ isNight, logoSrc, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isMenuOpenRef = useRef(false);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpenRef.current) {
        setIsMenuOpen(false);
        return;
      }

      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      const scrollY = window.scrollY + window.innerHeight * 0.3;
      let currentSection = "";
      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.offsetTop <= scrollY) currentSection = id;
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - HEADER_HEIGHT,
          behavior: "smooth",
        });
      }
    }, 400);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src={logoSrc ?? "/assets/logo_light.svg"}
              alt="Logo"
              width={220}
              height={40}
              className="logo"
              priority
            />
          </Link>
        </div>

        <ul className={`menu-items ${isMenuOpen ? "active" : ""}`}>
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className={activeSection === id ? "active-link" : ""}
                onClick={(e) => handleNavClick(e, id)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="nav-actions-mobile">
            <div className="social-icons">
              <a
                href="https://github.com/Abdul-YSUF"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:abdulledev@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Changer de thème"
            >
              <Image
                src={isNight ? "/assets/sun.webp" : "/assets/moon.webp"}
                alt={isNight ? "Mode clair" : "Mode sombre"}
                width={25}
                height={25}
              />
            </button>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="social-icons">
            <a
              href="https://github.com/Abdul-YSUF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/..."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:abdulledev@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Changer de thème"
          >
            <Image
              src={isNight ? "/assets/sun.webp" : "/assets/moon.webp"}
              alt={isNight ? "Mode clair" : "Mode sombre"}
              width={30}
              height={30}
              className="mode-image"
            />
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </nav>
    </header>
  );
}
