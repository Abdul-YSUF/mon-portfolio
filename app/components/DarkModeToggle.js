"use client";
import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isNight, setIsNight] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/assets/ald-black.webp");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (isDark) {
      setIsNight(true);
      document.documentElement.setAttribute("data-theme", "dark");
      setLogoSrc("/assets/ald-white.webp");
    }
  }, []);

  useEffect(() => {
    const theme = isNight ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setLogoSrc(isNight ? "/assets/ald-white.webp" : "/assets/ald-black.webp");
  }, [isNight]);

  const toggleTheme = () => setIsNight((prev) => !prev);

  return { isNight, logoSrc, toggleTheme };
}
