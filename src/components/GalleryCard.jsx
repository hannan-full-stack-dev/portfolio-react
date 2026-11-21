import { useRef } from "react";
import useToggleClass from "../hooks/useToggleClass.js";

export default function GalleryCard({ card, hidden, onOpen, index = 0 }) {
  const ref = useRef(null);
  // "filtered-out" is toggled through the DOM (see useToggleClass) so it can't wipe ".show"
  useToggleClass(ref, "filtered-out", hidden);

  const featured = card.kind === "featured-achievement";

  const classes = ["gallery-card"];
  if (card.kind !== "normal") classes.push(card.kind);
  // Image fades in and settles (see media-reveal.css); --i staggers neighbours in the same row
  classes.push("img-reveal");

  const open = () => onOpen(card.id);

  return (
    <div
      ref={ref}
      className={classes.join(" ")}
      role="button"
      tabIndex={0}
     style={{ "--i": index % 3, "--bg": `url("${card.image}")` }}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
    >
      <img src={card.image} alt={card.alt || card.title} loading="lazy" decoding="async" />

      {featured ? (
        <div className="featured-achievement-info">
          <span>{card.label}</span>
          <h3>Professional Achievement</h3>
          <p>A memorable milestone in a professional journey.</p>
          <button type="button" className="open-image">
            View Image ↗
          </button>
        </div>
      ) : (
        <div className="card-overlay">
          <span>{card.label}</span>
          <h3>{card.title}</h3>
          <button type="button" className="open-image">
            ↗
          </button>
        </div>
      )}
    </div>
  );
}
