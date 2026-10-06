import { useCallback, useState } from "react";
import Modal from "../components/Modal.jsx";
import { eventFilters, events, operatingPrinciples } from "../data/events.js";
import { orTba, sentence } from "../utils/text.js";

const WHEN_KEYS = ["DATE", "TIME", "VENUE"];

function whenLine(e) {
  const known = e.meta.filter((m) => WHEN_KEYS.includes(m.k) && m.v.trim().toUpperCase() !== "NA");
  return known.length ? known.map((m) => m.v).join(", ") : "Date, time and venue to be announced";
}

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState(null);
  const close = useCallback(() => setOpenId(null), []);

  const list = filter === "All" ? events : events.filter((e) => e.kind === filter);
  const current = events.find((e) => e.id === openId);

  return (
    <div className="section">
      <div className="wrap">
        <header className="page-head">
          <h1>Six events. Zero filler.</h1>
          <p className="lede">
            We run three kinds of events: hands-on workshops with industry specialists, one flagship
            hackathon where the demo is the judging, and sit-down seminars with people who build AI for a
            living.
          </p>
        </header>

        <div className="tabs" role="group" aria-label="Filter events">
          {eventFilters.map((f) => (
            <button key={f.key} type="button" aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
              {f.key === "All" ? "Everything" : sentence(f.label)}
            </button>
          ))}
        </div>

        <ul className="event-grid" role="list" key={filter}>
          {list.map((e) => (
            <li key={e.id} className={e.kind === "HACKATHON" ? "event-card event-card--flagship" : "event-card"}>
              <p className="event-status">{sentence(e.status)}</p>
              <h2>{e.title}</h2>
              <p>{e.blurb}</p>
              <p className="event-when">{whenLine(e)}</p>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpenId(e.id)}>
                View details
              </button>
            </li>
          ))}
        </ul>

        <h2 className="subhead">How we run events</h2>
        <ul className="principles" role="list">
          {operatingPrinciples.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <Modal open={!!current} onClose={close} labelledBy="ev-title">
        {current && (
          <>
            <p className="event-status">
              {sentence(current.tag)}. {sentence(current.status)}
            </p>
            <h2 id="ev-title">{current.title}</h2>
            <p>{current.detail}</p>
            <dl className="facts">
              {current.meta.map((m) => (
                <div key={m.k} className="fact-row">
                  <dt>{sentence(m.k)}</dt>
                  <dd>{orTba(m.v)}</dd>
                </div>
              ))}
            </dl>
            <h3 className="modal-sub">What you walk away with</h3>
            <ul className="takeaways" role="list">
              {current.takeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </div>
  );
}
