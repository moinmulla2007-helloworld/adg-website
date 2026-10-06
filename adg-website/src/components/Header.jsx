import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemePicker from "./ThemePicker.jsx";
import { navLinks } from "../data/navigation.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link to="/" className="brand" aria-label="ADG, home">
          <img src="/assets/adg-badge.png" alt="" width="38" height="38" />
          <span className="brand-name">ADG</span>
          <span className="brand-sub">AI Developers Group</span>
        </Link>

        <nav id="primary-nav" className={`nav${open ? " open" : ""}`} aria-label="Primary">
          {navLinks
            .filter((l) => l.id !== "home")
            .map((l) => (
              <NavLink key={l.id} to={l.href}>
                {l.label}
              </NavLink>
            ))}
        </nav>

        <div className="bar-tools">
          <ThemePicker />
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
