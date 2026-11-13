import { site } from "../data/site.js";

export default function Cta({ id, heading, text }) {
  return (
    <section className="cta" id={id}>
      <p className="small-title reveal">LET'S CONNECT</p>
      <h2 className="reveal">{heading}</h2>
      <p className="cta-text reveal">{text}</p>
      <div className="contact-buttons reveal">
        {/* mailto: was missing on Home and Gallery before, so the button did nothing */}
        <a href={`mailto:${site.email}`} className="gold-btn">
          Send an Email <span>↗</span>
        </a>
        <a href={`tel:${site.phone}`} className="outline-btn">
          Call Me
        </a>
      </div>
    </section>
  );
}
