import { Link } from "react-router-dom";
import Avatar from "./Avatar.jsx";
import { domains, lvl1, lvl2 } from "../data/team.js";

// Everything here is computed from data/team.js, so it stays correct as the team changes.
const everyone = new Set([
  ...lvl1.map((p) => p.name),
  ...lvl2.map((p) => p.name),
  ...domains.flatMap((d) => [d.head, ...d.joint, ...d.execs]),
]);

const faces = [...lvl2.map((p) => p.name), ...domains.map((d) => d.head)].slice(0, 10);

export default function CommitteeCard() {
  return (
    <section className="committee-card" aria-labelledby="cc-title">
      <h2 id="cc-title">Meet the people behind ADG</h2>
      <p>Faculty who clear the path, and students who run the work.</p>

      <ul className="face-row" role="list" aria-label="Some of the committee">
        {faces.map((name) => (
          <li key={name} title={name}>
            <Avatar name={name} size="md" />
          </li>
        ))}
      </ul>

      <dl className="cc-stats">
        <div>
          <dt>People</dt>
          <dd>{everyone.size}</dd>
        </div>
        <div>
          <dt>Domains</dt>
          <dd>{domains.length}</dd>
        </div>
        <div>
          <dt>Levels</dt>
          <dd>{domains.length + 2}</dd>
        </div>
      </dl>

      <div className="actions">
        <Link className="btn btn-primary btn-sm" to="/team">
          Meet the team
        </Link>
        <Link className="btn btn-ghost btn-sm" to="/join">
          Join us
        </Link>
      </div>
    </section>
  );
}
