export default function ProjectCard({ project, index, showNumber = false, eager = false, onView }) {
  const reverse = index % 2 === 1;
  const loading = eager ? "eager" : "lazy";

  return (
    <article className={`project reveal-card${reverse ? " project-reverse" : ""}`}>
      {/* Image box keeps one fixed size for every project. The full photo is shown
          (object-fit: contain) on top of a soft blurred copy of itself, so nothing is cropped. */}
      <div className="project-image reveal-image">
        <img className="project-image-bg" src={project.image} alt="" aria-hidden="true" loading={loading} decoding="async" />
        <img className="project-image-main" src={project.image} alt={project.title} loading={loading} decoding="async" />
        {showNumber && <div className="project-number">{String(index + 1).padStart(2, "0")}</div>}
      </div>

      {/* One reveal for the whole text block - children animate in a staggered sequence (see style.css) */}
      <div className="project-info reveal-group">
        <p className="project-category" style={{ "--i": 0 }}>{project.category}</p>
        <h3 style={{ "--i": 1 }}>
          <span>{project.title}</span>
        </h3>
        <div className="project-description-scroll" style={{ "--i": 2 }}>
          <p>{project.description}</p>
        </div>
        <div className="project-meta" style={{ "--i": 3 }}>
          <span>
            Location <strong>{project.location}</strong>
          </span>
          <span>
            Year <strong>{project.year}</strong>
          </span>
        </div>
        {/* Opens the details popup (see ProjectModal) */}
        <a
          href="#"
          className="view-project"
          style={{ "--i": 4 }}
          onClick={(e) => {
            e.preventDefault();
            onView?.(index);
          }}
        >
          View Project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
