"use client";
import useDarkMode from "./DarkModeToggle";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

export default function ThemeProvider({ children }) {
  const { isNight, logoSrc, toggleTheme } = useDarkMode();

  return (
    <>
      <Header isNight={isNight} logoSrc={logoSrc} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer logoSrc={logoSrc} />
      <ScrollTop />
    </>
  );
}
