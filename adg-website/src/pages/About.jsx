import { Link } from "react-router-dom";
import { targets, usps } from "../data/about.js";
import { useCountUp, useInView } from "../utils/hooks.js";
import { sentence } from "../utils/text.js";

function Stat({ item }) {
  const [ref, seen] = useInView(0.4);
  const value = useCountUp(item.count, seen);
  return (
    <div ref={ref} className={`stat${item.highlight ? " stat-hi" : ""}`}>
      <span className="stat-num">
        {value}
        {item.suffix}
      </span>
      <span className="stat-label">{sentence(item.label)}</span>
    </div>
  );
}

export default function About() {
  return (
    <div className="section">
      <div className="wrap">
        <header className="page-head">
          <h1>A committee is a habit, not a calendar.</h1>
          <p className="lede">
            Most college clubs are an annual festival wrapped in eleven months of hibernation. ADG is
            designed as a weekly drumbeat: small, frequent, project-led sessions where showing up with a
            laptop is the only requirement that matters.
          </p>
        </header>

        <ul className="usp-list" role="list">
          {usps.map((u) => (
            <li key={u.title}>
              <h2>{u.title}</h2>
              <div>
                <p>{u.body}</p>
                <p className="usp-aside">{sentence(u.aside)}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="subhead">Year 1 targets, measured at close and not claimed up front</h2>
        <div className="stats">
          {targets.map((t) => (
            <Stat key={t.label} item={t} />
          ))}
        </div>

        <div className="next-up">
          <h2>Check our mission or get involved</h2>
          <p>See our vision statement or explore the upcoming workshop calendar.</p>
          <div className="actions">
            <Link className="btn btn-primary" to="/mission">
              Read the mission
            </Link>
            <Link className="btn btn-ghost" to="/events">
              See events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
