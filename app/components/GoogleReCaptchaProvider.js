"use client";
import { useEffect, useState, useCallback } from "react";

const GoogleReCaptchaProvider = ({ onVerify }) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.onload = () => setRecaptchaLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.querySelector(`script[src*="recaptcha/api.js"]`)?.remove();
    };
  }, []);

  const handleVerify = useCallback(async () => {
    if (recaptchaLoaded && window.grecaptcha) {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            { action: "submit" },
          );
          onVerify(token);
        } catch (error) {
          console.error("Erreur reCAPTCHA :", error);
        }
      });
    }
  }, [recaptchaLoaded, onVerify]);

  useEffect(() => {
    if (recaptchaLoaded) {
      handleVerify();
    }
  }, [recaptchaLoaded, handleVerify]);

  return null;
};

export default GoogleReCaptchaProvider;
