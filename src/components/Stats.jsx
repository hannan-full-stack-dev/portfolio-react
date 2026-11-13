import { stats } from "../data/site.js";

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="reveal" key={s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
