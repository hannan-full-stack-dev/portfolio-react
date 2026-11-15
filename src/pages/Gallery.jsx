import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PageLayout from "../components/PageLayout.jsx";
import Cta from "../components/Cta.jsx";
import GalleryCard from "../components/GalleryCard.jsx";
import Lightbox from "../components/Lightbox.jsx";
import useToggleClass from "../hooks/useToggleClass.js";
import galleryCards from "../data/gallery.js";
import galleryCss from "../styles/gallery.css?inline";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "achievement", label: "Achievements" },
  { key: "visit", label: "Project Visits" },
  { key: "family", label: "Family" },
];

const careerStats = [
  { number: "12+", title: "Years of Experience", text: "Years of professional experience in architectural engineering." },
  { number: "50+", title: "Projects Completed", text: "Residential, institutional and architectural projects." },
  { number: "20+", title: "3D Visualizations", text: "Architectural concepts brought to life through visualization." },
];

function FilterButton({ active, onClick, children }) {
  const ref = useRef(null);
  useToggleClass(ref, "active", active);
  return (
    <button ref={ref} type="button" className="filter-btn reveal" onClick={onClick}>
      {children}
    </button>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null); // card shown in the lightbox
  const [open, setOpen] = useState(false);

  const isHidden = (category) => filter !== "all" && filter !== category;

  // Cards that match the current filter (prev/next only walks through these)
  const visible = useMemo(
    () => galleryCards.filter((c) => filter === "all" || c.category === filter),
    [filter]
  );

  const featured = galleryCards.find((c) => c.kind === "featured-achievement");
  const achievements = galleryCards.filter((c) => c.category === "achievement" && c !== featured);
  const visits = galleryCards.filter((c) => c.category === "visit");
  const family = galleryCards.filter((c) => c.category === "family");
  const activeCard = galleryCards.find((c) => c.id === activeId) || null;

  const openCard = useCallback((id) => {
    setActiveId(id);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const step = useCallback(
    (dir) => {
      if (visible.length === 0) return;
      const i = visible.findIndex((c) => c.id === activeId);
      const next = i === -1 ? (dir > 0 ? 0 : visible.length - 1) : (i + dir + visible.length) % visible.length;
      setActiveId(visible[next].id);
    },
    [visible, activeId]
  );

  // Lock page scroll while the lightbox is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  // Keyboard: Esc / ← / →
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  const card = (c, i = 0) => (
    <GalleryCard
      key={c.id}
      card={c}
      index={i}
      hidden={filter !== "all" && c.category !== filter}
      onOpen={openCard}
    />
  );

  return (
    <PageLayout css={galleryCss} title="Gallery | Md. Moklasur Rahman Golap">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <p className="small-title reveal">PERSONAL GALLERY</p>
          <h1 className="reveal">
            Moments Behind <em>The Work.</em>
          </h1>
          <p className="hero-text reveal">
            A collection of achievements, project visits, completed works and memorable moments
            from professional and personal life.
          </p>
        </div>
        <div className="gallery-hero-visual">
          <div className="hero-image-frame img-reveal">
            <img src="/Images/Gallery-Hero.jpg" alt="Project Site Visit" />
            <div className="hero-image-overlay reveal delay-3">
              <span>FEATURED MOMENT</span>
              <p>PROJECT VISIT · 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="filter-wrapper">
        {FILTERS.map((f) => (
          <FilterButton key={f.key} active={filter === f.key} onClick={() => setFilter(f.key)}>
            {f.label}
          </FilterButton>
        ))}
      </div>

      {/* Achievements */}
      <section className={`gallery-category achievement-section${isHidden("achievement") ? " section-hidden" : ""}`}>
        <div className="category-heading">
          <div>
            <p className="small-title reveal">01 · PROFESSIONAL</p>
            <h2 className="reveal">
              Achieve<span>ments.</span>
            </h2>
          </div>
          <p className="reveal">
            A visual record of awards, recognition, certificates and professional milestones.
          </p>
        </div>

        {featured && card(featured)}

        <div className="achievement-grid">{achievements.map(card)}</div>
      </section>

      {/* Project visits */}
      <section className={`gallery-category visit-section${isHidden("visit") ? " section-hidden" : ""}`}>
        <div className="category-heading">
          <div>
            <p className="small-title reveal">02 · ON SITE</p>
            <h2 className="reveal">
              Project <span>Visits.</span>
            </h2>
          </div>
          <p className="reveal">Moments from project inspections, site visits and field work.</p>
        </div>

        <div className="visit-grid">{visits.map(card)}</div>
      </section>

      {/* Career highlights */}
      <section className="career-highlights">
        <div className="career-heading">
          <div>
            <p className="small-title reveal">03 · CAREER</p>
            <h2 className="reveal">
              Career <span>Highlights.</span>
            </h2>
          </div>
          <p className="reveal">
            A glimpse into years of professional experience, completed projects and creative work.
          </p>
        </div>

        <div className="career-stats">
          {careerStats.map((s, i) => (
            <div className={`career-stat reveal${i > 0 ? ` delay-${i}` : ""}`} key={s.title}>
              <span className="stat-number">{s.number}</span>
              <div className="stat-line"></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="career-bottom reveal">
          <div className="career-bottom-number">01</div>
          <div className="career-bottom-content">
            <span>PROFESSIONAL JOURNEY</span>
            <h3>
              Experience built through <em>dedication &amp; practice.</em>
            </h3>
          </div>
        </div>
      </section>

      {/* Family */}
      <section className={`gallery-category family-section${isHidden("family") ? " section-hidden" : ""}`}>
        <div className="category-heading">
          <div>
            <p className="small-title reveal">04 · PERSONAL</p>
            <h2 className="reveal">
              Family &amp; <span>Memories.</span>
            </h2>
          </div>
          <p className="reveal">
            Beyond professional life, the people and moments that make life meaningful.
          </p>
        </div>

        <div className="family-grid">{family.map(card)}</div>
      </section>

      {/* Featured memory */}
      <section className="featured-memory">
        <div className="featured-image img-reveal">
          <img src="/Images/Bottom-Hero.jpeg" alt="Featured Memory" loading="lazy" decoding="async" />
        </div>
        <div className="featured-content">
          <p className="small-title reveal">BEYOND THE WORK</p>
          <h2 className="reveal">
            A Journey <em>Worth Remembering.</em>
          </h2>
          <p className="reveal">
            Every project, achievement and personal moment becomes a part of a journey shaped by
            dedication, experience and the people around us.
          </p>
        </div>
      </section>

      <Cta
        heading={<>Have a project in mind? <em>Let's talk.</em></>}
        text="Whether you have an architectural project, visualization requirement or simply want to discuss an idea, feel free to get in touch."
      />

      <Lightbox
        open={open}
        card={activeCard}
        onClose={close}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </PageLayout>
  );
}
