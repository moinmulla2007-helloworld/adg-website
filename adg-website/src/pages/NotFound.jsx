import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section">
      <div className="wrap page-head">
        <h1>This page does not exist.</h1>
        <p className="lede">The link may be old or mistyped. Try one of these instead.</p>
        <div className="actions">
          <Link className="btn btn-primary" to="/">
            Go to the home page
          </Link>
          <Link className="btn btn-ghost" to="/events">
            See events
          </Link>
        </div>
      </div>
    </div>
  );
}
