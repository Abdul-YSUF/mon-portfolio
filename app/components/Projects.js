"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaJs,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaSass,
  FaBootstrap,
  FaPhp,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostman,
  SiExpress,
  SiReactrouter,
  SiPhpmyadmin,
  SiNormalizedotcss,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";

const NormalizeIcon = () => <span style={{ fontSize: "1em" }}>📄</span>;

const PROJECTS_DATA = [
  {
    id: 1,
    title: "BOOKI",
    altMsg: "Photo d'un projet BOOKI",
    image:
      "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742848370/Capture_d_e%CC%81cran_2024-05-17_a%CC%80_22.22.22_yibgmf.png",
    description:
      "Intégration de la page d'accueil et de l'interface responsive pour une plateforme de réservation.",
    logos: [FaHtml5, FaCss3Alt, SiNormalizedotcss],
    demoLink: "https://abdul-ysuf.github.io/Booki",
    codeLink: "https://github.com/Abdul-YSUF/Booki",
    category: "Frontend",
  },
  {
    id: 2,
    title: "OHMYFOOD",
    altMsg: "Photo d'un projet OHMYFOOD",
    image:
      "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742924580/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_18.38.23_elmjzw.png",
    description:
      "Site mobile-first répertoriant les menus de restaurants gastronomiques avec animations CSS.",
    logos: [FaHtml5, FaSass, FaGithub],
    demoLink: "https://abdul-ysuf.github.io/ohmyfood",
    codeLink: "https://github.com/Abdul-YSUF/ohmyfood",
    category: "Frontend",
  },
  {
    id: 3,
    title: "LA PANTHÈRE",
    altMsg: "Photo d'un projet LA PANTHÈRE",
    image:
      "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742924580/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_18.38.59_rrf8wc.png",
    description:
      "Amélioration du référencement (SEO) et accessibilité d'un site web existant",
    logos: [TbSeo, FaBootstrap, FaGithub],
    demoLink: "https://abdul-ysuf.github.io/LaPanthere",
    codeLink: "https://github.com/Abdul-YSUF/LaPanthere",
    category: "SEO",
  },
  {
    id: 4,
    title: "KANAP",
    altMsg: "Photo d'un projet KANAP",
    image:
      "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742925492/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_18.57.30_kjej9m.png",
    description: "Transformation d'un site e-commerce statique en dynamique",
    logos: [FaJs],
    demoLink: "https://kanap-abdulledev.netlify.app/",
    codeLink: "https://github.com/Abdul-YSUF/Kanap",
    category: "Frontend",
  },
  {
    id: 5,
    title: "HOT TAKES",
    altMsg: "Photo d'un projet HOT TAKES",
    image:
      "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742848497/Capture_d_e%CC%81cran_2023-05-10_a%CC%80_12.52.15_qkqz6l.png",
    description:
      "Construction d'une API sécurisée pour une application d'avis gastronomiques (NoSQL).",
    logos: [FaNodeJs, SiMongodb, SiExpress, SiPostman],
    demoLink: "https://hottakes-abdulledev.netlify.app/",
    codeLink: "https://github.com/Abdul-YSUF/Piiquante",
    category: "Backend",
  },
  {
    id: 6,
    title: "KASA",
    altMsg: "Photo d'un projet KASA",
    image:
      "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742924581/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_18.41.23_myecw7.png",
    description:
      "Application de location immobilière développée avec React et React Router.",
    logos: [FaReact, SiReactrouter, FaCss3Alt, FaGithub],
    demoLink: "https://abdul-ysuf.netlify.app/",
    codeLink: "https://github.com/Abdul-YSUF/Kasa",
    category: "Frontend",
  },
  {
    id: 7,
    title: "SMARTPOINT",
    altMsg: "Photo d'un projet SMARTPOINT",
    image:
      "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742925997/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_19.06.00_zdofyu.png",
    description: "Création d'un site web e-commerce pour le téléphone mobile",
    logos: [FaWordpress],
    demoLink: "https://smartphone.ct.ws/",
    codeLink: null,
    category: "CMS",
  },
  {
    id: 8,
    title: "BLOG TECHNOLOGIE",
    altMsg: "Photo d'un projet BLOG TECHNOLOGIE",
    image:
      "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742848468/Capture_d_e%CC%81cran_2023-05-25_a%CC%80_22.53.19_ddkhlr.png",
    description:
      "Transformation d'un site web existant en blog technologie et en dynamique",
    logos: [FaPhp, SiPhpmyadmin, DiPhotoshop],
    codeLink: "https://github.com/mobile-zone/mobile-zone.github.io",
    demoLink: "https://blogtechnologie.ct.ws/",
    category: "Backend",
  },
  {
    id: 9,
    title: "MON VIEUX GRIMOIRE",
    altMsg: "Photo d'un projet Mon Vieux Grimoire",
    image:
      "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1768780666/Capture_d_e%CC%81cran_2026-01-19_a%CC%80_00.53.22_si0uis.png",
    description:
      "Back-end complet pour une plateforme de notation de livres (optimisation d'images incluse).",
    logos: [FaNodeJs, SiMongodb, SiPostman, SiExpress],
    codeLink: "https://github.com/Abdul-YSUF/Mon-Vieux-Grimoire-Backend",
    demoLink: "https://mvg-abdulledev.vercel.app/",
    category: "Backend",
  },
];

// ✅ Catégories générées automatiquement depuis les données
const CATEGORIES = ["Tous", ...new Set(PROJECTS_DATA.map((p) => p.category))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projets" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Portfolio</span>
          <h2>
            Mes <span className="highlight">Réalisations</span>
          </h2>
          <p>
            Une sélection de projets mêlant intégration pixel-perfect et logique
            complexe.
          </p>
        </div>

        {/* ✅ Filtres */}
        <div className="projects-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={project.altMsg || project.title}
                    fill
                    className="img-cover"
                    unoptimized
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Github"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech-icons">
                    {project.logos.map((Icon, idx) => (
                      <span key={idx} className="tech-icon">
                        <Icon />
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
