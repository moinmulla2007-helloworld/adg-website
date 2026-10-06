import { Link } from "react-router-dom";
import { missions, objectives, vision } from "../data/mission.js";
import { sentence } from "../utils/text.js";

export default function Mission() {
  return (
    <div className="section">
      <div className="wrap">
        <header className="page-head">
          <h1>Vision, mission and objectives</h1>
        </header>

        <figure className="vision">
          <blockquote>{vision.quote}</blockquote>
          <figcaption>{sentence(vision.attribution)}</figcaption>
        </figure>

        <h2 className="subhead">Mission</h2>
        <ul className="mission-list" role="list">
          {missions.map((m) => (
            <li key={m.id}>
              <p>{m.body}</p>
            </li>
          ))}
        </ul>

        <h2 className="subhead">Four objectives</h2>
        <ul className="obj-grid" role="list">
          {objectives.map((o) => (
            <li key={o.id}>
              <h3>{o.title}</h3>
              <p>{o.body}</p>
            </li>
          ))}
        </ul>

        <div className="next-up">
          <h2>Meet the team driving our mission</h2>
          <p>From faculty advisors to core officers and domain executive leads.</p>
          <div className="actions">
            <Link className="btn btn-primary" to="/team">
              See the team
            </Link>
            <Link className="btn btn-ghost" to="/join">
              Join ADG
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
