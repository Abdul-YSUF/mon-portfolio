"use client";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaWordpress,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFigma,
  SiPostman,
  SiMongodb,
  SiPhpmyadmin,
} from "react-icons/si";
import { MdAccessibility } from "react-icons/md";
import { DiPhotoshop } from "react-icons/di";

const SKILLS_DATA = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "HTML5", Icon: FaHtml5 },
      { name: "CSS3", Icon: FaCss3Alt },
      { name: "JavaScript", Icon: FaJs },
      { name: "React", Icon: FaReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Bootstrap", Icon: FaBootstrap },
      { name: "Sass", Icon: FaSass },
    ],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Express", Icon: SiExpress },
      { name: "PHP", Icon: FaPhp },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "REST APIs", Icon: FaDatabase },
    ],
  },
  {
    title: "Outils & Design",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", Icon: FaGitAlt },
      { name: "Postman", Icon: SiPostman },
      { name: "phpMyAdmin", Icon: SiPhpmyadmin },
      { name: "WordPress", Icon: FaWordpress },
      { name: "Figma", Icon: SiFigma },
      { name: "Adobe Photoshop", Icon: DiPhotoshop },
      { name: "SEO & Accessibilité", Icon: MdAccessibility },
      { name: "Responsive Design", Icon: FaCss3Alt },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Mon Stack Technique</span>
          <h2>
            Mes <span className="highlight">Compétences</span>
          </h2>
          <p>
            Des outils modernes pour des solutions performantes et scalables.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS_DATA.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="card-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map(({ name, Icon }) => (
                  <div key={name} className="skill-item">
                    <span className="icon">
                      <Icon />
                    </span>
                    <span className="name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
