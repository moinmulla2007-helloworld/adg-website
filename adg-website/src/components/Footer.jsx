import { Link } from "react-router-dom";
import { navLinks, programmeLinks } from "../data/navigation.js";
import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div>
          <p className="foot-name">{site.longName}</p>
          <p className="foot-sub">
            The student-run AI and machine learning committee of the {site.department}, {site.college}.
          </p>
          <p>
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="foot-sub">Faculty coordinator: {site.facultyCoordinator}</p>
        </div>

        <nav aria-label="Pages" className="foot-col">
          <h2>Pages</h2>
          {navLinks.map((l) => (
            <Link key={l.id} to={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Programme" className="foot-col">
          <h2>Programme</h2>
          {programmeLinks.map((l) => (
            <Link key={l.label} to={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <address className="foot-col foot-address">
          <h2>Find us</h2>
          {site.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
      </div>
      <p className="wrap foot-copy">
        © {new Date().getFullYear()} {site.longName}, SFIT. Built by the ADG web team.
      </p>
    </footer>
  );
}
