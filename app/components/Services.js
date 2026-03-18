"use client";
import { FaCode, FaMobileAlt, FaRocket, FaSearch } from "react-icons/fa";

const SERVICES = [
  {
    title: "Développement Web",
    description:
      "Création d'applications web modernes et scalables avec React, Next.js et Node.js.",
    Icon: FaCode,
  },
  {
    title: "Design Responsive",
    description:
      "Interfaces optimisées pour tous les écrans, du mobile au desktop, avec une expérience utilisateur fluide.",
    Icon: FaMobileAlt,
  },
  {
    title: "Optimisation SEO",
    description:
      "Amélioration de la visibilité de vos projets sur les moteurs de recherche pour attirer plus de clients.",
    Icon: FaSearch,
  },
  {
    title: "Performance & Vitesse",
    description:
      "Optimisation des temps de chargement pour un score Google Lighthouse maximal.",
    Icon: FaRocket,
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Ce que je propose</span>
          <h2>
            Mes <span className="highlight">Services</span>
          </h2>
        </div>

        <div className="services-grid">
          {SERVICES.map(({ title, description, Icon }, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
