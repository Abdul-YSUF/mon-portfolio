"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ logoSrc }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link href="/">
            <Image
              src={logoSrc || "/assets/logo_light.svg"}
              alt="Logo"
              width={220}
              height={40}
              className="logo"
              priority
            />
          </Link>
          <p>
            Développeur Web passionné par la création d'expériences numériques
            uniques.
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/Abdul-YSUF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/..."
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
      </div>

      <div className="footer-bottom">
        © 2023-{currentYear} ABDUL LE DEV Portfolio. Tous droits réservés.
      </div>
    </footer>
  );
}
