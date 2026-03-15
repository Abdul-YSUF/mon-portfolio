"use client";
import { useEffect, useState } from "react";

const Calendly = () => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      document
        .querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]',
        )
        ?.remove();
      document
        .querySelector(
          'link[href="https://assets.calendly.com/assets/external/widget.css"]',
        )
        ?.remove();
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/abdulledev/entretien-appointment",
      });
    }
  };

  return (
    <div className="calendly-wrapper">
      <div className="calendly-content">
        <div className="calendly-text">
          <h3>Réservez un appel gratuit avec moi</h3>
          <p>
            Pour discuter d'une opportunité professionnelle ou d'un projet
            digital
          </p>
        </div>
        <button className="btn-primary calendly-btn" onClick={handleClick}>
          Réserver dès maintenant 📆
        </button>
      </div>
    </div>
  );
};

export default Calendly;
