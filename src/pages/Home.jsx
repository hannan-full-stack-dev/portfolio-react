import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout.jsx";
import Stats from "../components/Stats.jsx";
import ExpertiseSection from "../components/ExpertiseSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import Cta from "../components/Cta.jsx";
import projects from "../data/projects.js";
import { expertise, experience } from "../data/site.js";
import styleCss from "../styles/style.css?inline";

const featuredProjects = projects.slice(0, 3);
const heroExpertise = ["Architectural Design", "3D Visualization", "Project Estimation"];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null); // project shown in the popup

  return (
    <PageLayout css={styleCss} title="Md. Moklasur Rahman Golap. | Architectural Engineer">
      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-image img-reveal">
          <img src="/Images/Hero-Image.png" alt="Md. Moklasur Rahman Golap" />
          <div className="image-label reveal">ARCHITECT</div>
        </div>

        <div className="hero-content">
          <p className="eyebrow reveal">ARCHITECTURAL DESIGNER · </p>
          <h1 className="reveal">
            Md. Moklasur <span>Rahman Golap.</span>
          </h1>
          <p className="hero-role reveal">Architectural Designer &amp; 3D Visualizer</p>
          <p className="hero-description reveal">
            Designing meaningful spaces through architectural planning, technical precision and
            realistic 3D visualization. Experienced in AutoCAD-based architectural design, 3ds Max
            3D modeling and project estimation.
          </p>

          <div className="hero-expertise">
            {heroExpertise.map((item, i) => (
              <div className="hero-expertise-item reveal" key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="gold-btn reveal">
              Explore Projects <span>↗</span>
            </Link>
            <a href="#contact" className="outline-btn reveal">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-bottom reveal">
          <span>ARCHITECTURAL ENGINEER</span>
          <div className="scroll-line reveal"></div>
          <span className="reveal">SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-image img-reveal">
          <img src="/Images/Hero-Banner.jpg" alt="Architectural visualization" loading="lazy" decoding="async" />
          <img src="/Images/Hero-Banner-2.jpeg" alt="" />
        </div>
        <div className="about-content">
          <p className="small-title reveal">ABOUT ME</p>
          <h2 className="reveal">
            Designing with <em>Purpose.</em>
          </h2>
          <p className="reveal">
            Hello, I am <strong>Md. Moklesur Rahman Golap</strong>. For the past 20 years, I have been working as a Drafter, Surveyor, Estimator, and Site Supervisor across various government and private projects, including the Local Government Engineering Department (LGED).
          </p>
          <p className="reveal">
            Beyond formal institutional boundaries, I offer modern architectural 2D plans, 3D visualizations, and precise estimation services built on my own merit, dedication, and extensive hands-on field experience.
          </p>
          <p className="reveal">
            My goal is to make every construction aesthetic, durable, and budget-friendly
          </p>
          <Stats />
        </div>
      </section>

      {/* Skills */}
      <ExpertiseSection
        id="expertise"
        eyebrow="SKILLS & EXPERTISE"
        heading={<>What I <em>Do</em></>}
        cards={expertise}
      />

      {/* Featured projects */}
      <section className="work" id="work">
        <div className="section-header">
          <div>
            <p className="small-title reveal">SELECTED WORK</p>
            <h2 className="reveal">
              Featured <em>Projects</em>
            </h2>
          </div>
        </div>

        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} showNumber onView={setOpenIndex} />
        ))}

        <div style={{ textAlign: "center" }}>
          <Link to="/projects" className="gold-btn reveal">
            View All Projects <span>→</span>
          </Link>
        </div>
      </section>

      {/* Experience */}
      <ExperienceSection
        eyebrow="EXPERIENCE"
        heading={<>Experience That <em>Matters.</em></>}
        items={experience}
      />

      {/* Contact */}
      <Cta
        id="contact"
        heading={<>Have a project in mind? <em>Let's talk.</em></>}
        text="Whether you have an architectural project, visualization requirement or simply want to discuss an idea, feel free to get in touch."
      />

      {openIndex !== null && (
        <ProjectModal
          list={featuredProjects}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </PageLayout>
  );
}
