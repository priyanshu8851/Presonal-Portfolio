import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Priyanshu Kashyap, home">
        PK<span>.</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>
      <nav
        className={menuOpen ? "nav-links open" : "nav-links"}
        aria-label="Main navigation"
      >
        <a onClick={close} href="/#about">
          About
        </a>
        <a onClick={close} href="/#skills">
          Skills
        </a>
        <a onClick={close} href="/#experience">
          Experience
        </a>
        <Link onClick={close} to="/projects">
          Projects
        </Link>
        <Link className="nav-contact" onClick={close} to="/contact">
          Let’s talk <span>↗</span>
        </Link>
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        aria-pressed={theme === "light"}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.6 8.6 0 1 0 20.2 15.1Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </svg>
        )}
      </button>
    </header>
  );
}
