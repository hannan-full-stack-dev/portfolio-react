import PageLayout from "../components/PageLayout.jsx";
import Stats from "../components/Stats.jsx";
import ExpertiseSection from "../components/ExpertiseSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import Cta from "../components/Cta.jsx";
import { site, education, approach } from "../data/site.js";
import styleCss from "../styles/style.css?inline";

const highlights = ["Education", "Professional Focus", "Design Approach"];

export default function About() {
  return (
    <PageLayout css={styleCss} title="About | Md. Moklasur Rahman Golap. | Architectural Engineer">
      {/* About hero */}
      <section className="hero">
        <div className="hero-image img-reveal">
          <img src="/Images/About_Hero.jpg" alt="Md. Moklasur Rahman Golap" />
          <div className="image-label reveal">ABOUT</div>
        </div>

        <div className="hero-content">
          <p className="eyebrow reveal">ABOUT ME · ARCHITECTURAL DESIGNER & ESTIMATOR</p>
          <h1 className="reveal">
            Get to Know <span>Me Better.</span>
          </h1>
          <p className="hero-role reveal">Architectural Designer &amp; 3D Visualizer</p>
          <p className="hero-description reveal">
            I am Md. Moklasur Rahman Golap, an Architectural Designer, Estimator, and Site Supervisor with over 20 years of hands-on experience in infrastructure and civic project execution across Panchagarh. I specialize in bridging the gap between creative 3D visualization and real-world construction precision—transforming architectural concepts into functional, durable realities
          </p>

          <div className="hero-expertise">
            {highlights.map((item, i) => (
              <div className="hero-expertise-item reveal" key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <a href={site.cv} download="Md-Moklasur-Rahman-Golap-CV.pdf" className="gold-btn reveal">
              Download CV <span>↗</span>
            </a>
            <a href="#cta" className="outline-btn reveal">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-bottom reveal">
          <span>MORE ABOUT ME</span>
          <div className="scroll-line reveal"></div>
          <span className="reveal">SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* My story */}
      <section className="about">
        <div className="about-image img-reveal">
          <div className="about-image-first">
            <img src="/Images/About-Blueprint-Image.jpg" alt="" loading="lazy" decoding="async" />
            <div className="image-overlay-text">
              Architect <br />
              Md. Moklasur Rahman Golap <br />
              Pirganj, Thakurgaon <br />
              Mob. 01737070679
            </div>
          </div>
          <img src="/Images/About-Blueprint-2-Image.jpg" alt="" />
        </div>
        <div className="about-content">
          <p className="small-title reveal">MY STORY</p>
          <h2 className="reveal">
            From Blueprint to <em>Built Reality.</em>
          </h2>
          <p className="reveal">
            My journey into architecture started with a simple fascination for how spaces are
            planned, structured and brought to life. That fascination grew into a career built on{" "}
            <strong>technical precision</strong> and creative problem-solving.
          </p>
          <p className="reveal">
            Working at LGED, Panchagarh, I've had the opportunity to be involved in a range of
            architectural planning, design and project estimation work, gaining practical,
            real-world experience along the way.
          </p>
          <p className="reveal">
            Alongside architectural design, I've developed strong skills in 3D visualization using
            AutoCAD and 3ds Max, allowing me to present ideas not just as drawings, but as
            realistic visual experiences.
          </p>
          <Stats />
        </div>
      </section>

      <ExperienceSection
        eyebrow="EDUCATION & CAREER"
        heading={<>Journey So <em>Far.</em></>}
        items={education}
      />

      <ExpertiseSection
        eyebrow="HOW I WORK"
        heading={<>My <em>Approach</em></>}
        cards={approach}
      />

      <Cta
        id="cta"
        heading={<>Want to know more, <em>or start a project?</em></>}
        text="Feel free to reach out — whether it's about an architectural project, a visualization requirement, or just to say hello."
      />
    </PageLayout>
  );
}
