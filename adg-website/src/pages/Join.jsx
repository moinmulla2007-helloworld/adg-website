import { formAsks, googleFormUrl, pipeline } from "../data/join.js";
import { site } from "../data/site.js";

export default function Join() {
  return (
    <div className="section">
      <div className="wrap join-grid">
        <div>
          <header className="page-head">
            <h1>Member, contributor, core team.</h1>
            <p className="lede">
              Any year, any starting point. Sessions need no membership. Registering puts you on the list,
              and the people who show up and help run things become core members.
            </p>
          </header>

          <ol className="steps">
            {pipeline.map((p) => (
              <li key={p.n}>
                <strong>{p.title}.</strong> {p.body}
              </li>
            ))}
          </ol>
        </div>

        <div className="form-card">
          <h2>One Google Form. Two minutes. No fee.</h2>
          <p>
            Registration is handled through a single Google Form so the member database stays in one
            place. Sessions themselves stay open to every student. Registering just means we can tell you
            when they are.
          </p>
          <h3 className="modal-sub">What the form asks</h3>
          <ul className="asks" role="list">
            {formAsks.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <div className="actions">
            <a className="btn btn-primary" href={googleFormUrl} target="_blank" rel="noopener noreferrer">
              Open the registration form
            </a>
          </div>
          <p className="form-note">
            Opens in a new tab and takes about two minutes. Questions? Write to{" "}
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
