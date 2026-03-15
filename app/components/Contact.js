"use client";
import { useState, useRef } from "react";
import { FaPaperPlane, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import ReCAPTCHA from "./GoogleReCaptchaProvider";
import Calendly from "./Calendly";

export default function Contact() {
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    validateForm(e.target.name);
  };

  const validateForm = (fieldToValidate = null) => {
    let valid = true;
    let formErrors = { ...errors };

    if (!fieldToValidate || fieldToValidate === "name") {
      if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(formData.name)) {
        formErrors.name = "Veuillez entrer un nom et prénom valide.";
        valid = false;
      } else {
        formErrors.name = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "email") {
      if (
        !/^(?!.*\.\.)([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9]+(\.[a-zA-Z0-9-]*)?\.[a-zA-Z]{2,}$/.test(
          formData.email,
        )
      ) {
        formErrors.email = "Veuillez entrer une adresse email valide.";
        valid = false;
      } else {
        formErrors.email = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "phone") {
      if (
        formData.phone.trim() !== "" &&
        !/^(?:\+33|0033|0)[1-9](\d{2}){4}$/.test(formData.phone)
      ) {
        formErrors.phone =
          "Veuillez entrer un numéro valide (ex: 0612345678, +33...).";
        valid = false;
      } else {
        formErrors.phone = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "message") {
      if (formData.message.trim().length < 10) {
        formErrors.message = "Veuillez entrer au moins 10 caractères.";
        valid = false;
      } else {
        formErrors.message = "";
      }
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);
    setStatus("sending");

    try {
      // ✅ Token généré au moment du submit
      const token = await recaptchaRef.current.execute();

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
        console.error("Erreur serveur :", result.message);
      }
    } catch (error) {
      setStatus("error");
      console.error("Erreur de soumission :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulaire" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Contact & RDV</span>
          <h2>
            Me <span className="highlight">Contacter</span>
          </h2>
        </div>

        <Calendly />

        <div className="div_titre">
          <p className="titre_form">
            Une question ou une proposition ? Utilisez le formulaire ci-dessous.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>abdulledev@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-wrapper">
            {status === "success" ? (
              <div className="success-message">
                <FaCheckCircle />
                <h3>Message envoyé !</h3>
                <p>
                  Merci pour votre message, je vous répondrai dans les plus
                  brefs délais.
                </p>
                <button onClick={() => setStatus("")} className="btn-secondary">
                  Renvoyer un message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Nom et Prénom</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Votre nom et prénom"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && (
                    <p className="error-hint" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Adresse email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && (
                    <p className="error-hint" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone (optionnel)</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="ex: 0612345678"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.phone ? "input-error" : ""}
                  />
                  {errors.phone && (
                    <p className="error-hint" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Parlez-moi de votre projet..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.message ? "input-error" : ""}
                    minLength="10"
                  ></textarea>
                  {errors.message && (
                    <p className="error-hint" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* ✅ ref au lieu de onVerify */}
                <ReCAPTCHA ref={recaptchaRef} />

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  <FaPaperPlane style={{ marginLeft: "10px" }} />
                </button>

                {status === "error" && (
                  <p className="error-text">
                    Une erreur est survenue, réessayez.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <p className="recaptcha-message">
          Ce site est protégé par reCAPTCHA et les{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            règles de confidentialité
          </a>{" "}
          et les{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            conditions d'utilisation
          </a>{" "}
          de Google s'appliquent.
        </p>
      </div>
    </section>
  );
}
