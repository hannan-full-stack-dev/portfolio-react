import { useState } from "react";
import PageLayout from "../components/PageLayout.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import projects from "../data/projects.js";
import styleCss from "../styles/style.css?inline";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null); // project shown in the popup

  return (
    <PageLayout css={styleCss} title="All Projects | Md. Moklasur Rahman Golap">
      <section className="work projects-page" style={{ paddingTop: "180px" }}>
        <div className="section-header reveal">
          <div>
            <p className="small-title reveal">ARCHIVE</p>
            <h2 className="reveal">
              All <em>Projects</em>
            </h2>
          </div>
        </div>

        {/* 32 big images: only the first two load immediately, the rest lazy-load */}
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} eager={i < 2} onView={setOpenIndex} />
        ))}
      </section>

      {openIndex !== null && (
        <ProjectModal
          list={projects}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </PageLayout>
  );
}
