const pad = (n) => String(n).padStart(2, "0");

export default function ExpertiseSection({ id, eyebrow, heading, cards }) {
  return (
    <section className="expertise" id={id}>
      <div className="section-header">
        <div>
          <p className="small-title reveal">{eyebrow}</p>
          <h2 className="reveal">{heading}</h2>
        </div>
      </div>
      <div className="expertise-grid">
        {cards.map((card, i) => (
          <div className="expertise-card reveal" key={card.title}>
            <span>{pad(i + 1)}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <div className="skill-tool">{card.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
