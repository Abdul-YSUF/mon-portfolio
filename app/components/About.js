"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="qui_suis-je" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="image-wrapper">
              <Image
                src="https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742927417/3d-rendering-cartoon-like-man-working-computer_gbwr08.webp"
                alt="Abdul travaille sur son ordinateur"
                width={400}
                height={400}
                className="profile-pic"
                unoptimized
              />
              <div className="experience-badge">
                <span>2+</span>
                <p>Ans d'expérience</p>
              </div>
            </div>
          </div>

          <div className="about-text">
            <span className="subtitle">Découvrez mon parcours</span>
            <h2>
              Passionné par le <span className="highlight">Digital</span>,
              expert en solutions
            </h2>
            <p>
              Je m'appelle <strong>Abdul</strong>. Mon aventure dans le
              développement a commencé par une curiosité insatiable pour la
              manière dont les applications que nous utilisons au quotidien sont
              construites.
            </p>
            <p>
              Aujourd'hui, je me spécialise dans la création d'écosystèmes web
              complets. Mon approche ?{" "}
              <strong>Résoudre des problèmes complexes</strong> avec un code
              propre et une interface intuitive. Quand je ne code pas, je reste
              à l'affût des dernières innovations pour ne jamais cesser
              d'apprendre.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h4>10+</h4>
                <p>Projets terminés</p>
              </div>
              <div className="stat-item">
                <h4>100%</h4>
                <p>Engagement</p>
              </div>
              <div className="stat-item">
                <h4>H24</h4>
                <p>Veille Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
