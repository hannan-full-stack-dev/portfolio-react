import { useEffect, useRef, useState } from "react";
import usePageStyle from "../hooks/usePageStyle.js";
import { site } from "../data/site.js";
import modalCss from "../styles/project-modal.css?inline";

/**
 * Popup with the full details of one project.
 * list = projects that Prev/Next walks through, index = which one is open.
 */
export default function ProjectModal({ list, index, onClose, onChange }) {
  usePageStyle(modalCss);

  const project = list[index];
  // all details live on the project itself (src/data/projects.js)
  const details = {
    ...project,
    images: project.images && project.images.length ? project.images : [project.image],
  };
  const [activeImg, setActiveImg] = useState(0);
  const bodyRef = useRef(null);
  const closeRef = useRef(null);

  const go = (dir) => onChange((index + dir + list.length) % list.length);

  // New project -> first photo, scrolled back to the top
  useEffect(() => {
    setActiveImg(0);
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [index]);

  // Lock page scroll, focus the close button, give focus back on close
  useEffect(() => {
    const previous = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = oldOverflow;
      previous?.focus?.();
    };
  }, []);

  // Esc closes, arrow keys switch project
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  const specs = [
    ["Location", project.location],
    ["Year", project.year],
    ["Status", details.status],
    ["Client", details.client],
    ["Built-up Area", details.area],
    ["Floors", details.floors],
    ["Architectural Style", details.style],
    ["Structure", details.structure],
    ["Duration", details.duration],
    ["My Role", details.role],
  ].filter(([, value]) => value);

  const wide = new Set(["Client", "My Role"]);
  const subject = encodeURIComponent(`Enquiry about: ${project.title}`);

  return (
    <div
      className="pm-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pm-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="pm-dialog">
        <button ref={closeRef} type="button" className="pm-close" aria-label="Close" onClick={onClose}>
          ×
        </button>

        <div className="pm-media">
          <div className="pm-main">
            {/* soft blurred copy fills the space around the full, uncropped photo */}
            <img className="pm-main-bg" src={details.images[activeImg]} alt="" aria-hidden="true" />
            <img className="pm-main-photo" src={details.images[activeImg]} alt={project.title} />
          </div>
          {details.images.length > 1 && (
            <div className="pm-thumbs">
              {details.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={i === activeImg ? "active" : ""}
                  aria-label={`Photo ${i + 1}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pm-body" ref={bodyRef}>
          <p className="pm-category">{project.category}</p>
          <h2 id="pm-title">{project.title}</h2>
          <p className="pm-lead">{project.description}</p>
          {details.overview && <p className="pm-overview">{details.overview}</p>}

          <h3 className="pm-section-title">PROJECT INFORMATION</h3>
          <dl className="pm-specs">
            {specs.map(([label, value]) => (
              <div key={label} className={wide.has(label) ? "pm-wide" : undefined}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          {details.materials?.length > 0 && (
            <>
              <h3 className="pm-section-title">MATERIALS</h3>
              <ul className="pm-chips">
                {details.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </>
          )}

          {details.features?.length > 0 && (
            <>
              <h3 className="pm-section-title">KEY FEATURES</h3>
              <ul className="pm-features">
                {details.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </>
          )}

          {details.tools?.length > 0 && (
            <>
              <h3 className="pm-section-title">SOFTWARE &amp; TOOLS</h3>
              <ul className="pm-chips">
                {details.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </>
          )}

          <div className="pm-actions">
            <a className="gold-btn" href={`mailto:${site.email}?subject=${subject}`}>
              Discuss a Similar Project <span>↗</span>
            </a>
          </div>

          {list.length > 1 && (
            <div className="pm-nav">
              <button type="button" onClick={() => go(-1)}>← Previous</button>
              <span>
                {index + 1} / {list.length}
              </span>
              <button type="button" onClick={() => go(1)}>Next →</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
