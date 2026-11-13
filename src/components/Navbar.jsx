import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <Link
        to="/"
        className="logo"
        onClick={() => {
          close();
          // already on Home: scroll back to the top like the old "#home" link did
          if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span>
          <img src="/Images/About_Hero.jpg" alt="Md. Moklasur Rahman Golap" width="46" height="46" />
        </span>
      </Link>

      <nav className={`nav-links${open ? " mobile-open" : ""}`}>
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/projects" onClick={close}>Projects</NavLink>
        <NavLink to="/gallery" onClick={close}>Gallery</NavLink>
      </nav>

      <Link className="ct" to={{ pathname: "/", hash: "#contact" }} onClick={close}>
        Let's Talk
      </Link>

      <button
        type="button"
        className={`menu-toggle${open ? " active" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        ☰
      </button>
    </header>
  );
}
