import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        {site.name}
        <span>.</span>
      </div>
      <p>© 2026 {site.name}. All Rights Reserved.</p>
      <div className="socials">
        {/* TODO: put your real profile links here */}
        <a href="#" onClick={(e) => e.preventDefault()}>Facebook</a>
        <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
      </div>
    </footer>
  );
}
