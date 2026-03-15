"use client";
import { useEffect, useImperativeHandle, forwardRef } from "react";

const GoogleReCaptchaProvider = forwardRef((props, ref) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    document.body.appendChild(script);

    return () => {
      document.querySelector(`script[src*="recaptcha/api.js"]`)?.remove();
    };
  }, []);

  // ✅ Expose execute() au parent via ref
  useImperativeHandle(ref, () => ({
    execute: () => {
      return new Promise((resolve, reject) => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(async () => {
            try {
              const token = await window.grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                { action: "submit" },
              );
              resolve(token);
            } catch (err) {
              reject(err);
            }
          });
        } else {
          reject(new Error("grecaptcha non chargé"));
        }
      });
    },
  }));

  return null;
});

GoogleReCaptchaProvider.displayName = "GoogleReCaptchaProvider";
export default GoogleReCaptchaProvider;
