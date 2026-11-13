export default function Lightbox({ open, card, onClose, onPrev, onNext }) {
  return (
    <div
      className={`lightbox${open ? " show" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      onClick={(e) => {
        // click on the dark backdrop closes it
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <button type="button" className="lightbox-prev" aria-label="Previous image" onClick={onPrev}>
        ‹
      </button>

      <div className="lightbox-inner">
        <img id="lightbox-img" src={card ? card.image : undefined} alt={card ? card.title : ""} />
        <div className="lightbox-caption">
          <span id="lightbox-category">
            {card ? card.category.replace("-", " ").toUpperCase() : "GALLERY"}
          </span>
          <h3 id="lightbox-title">{card ? card.title : "Image"}</h3>
          <p id="lightbox-year">{card ? card.year : ""}</p>
        </div>
      </div>

      <button type="button" className="lightbox-next" aria-label="Next image" onClick={onNext}>
        ›
      </button>
    </div>
  );
}
