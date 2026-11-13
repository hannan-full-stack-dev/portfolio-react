const pad = (n) => String(n).padStart(2, "0");

export default function ExperienceSection({ eyebrow, heading, items }) {
  return (
    <section className="experience">
      <div className="experience-header">
        <p className="small-title reveal">{eyebrow}</p>
        <h2 className="reveal">{heading}</h2>
      </div>
      <div className="experience-grid">
        {items.map((item, i) => (
          <div className="experience-item reveal" key={item.title}>
            <span>{pad(i + 1)}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
