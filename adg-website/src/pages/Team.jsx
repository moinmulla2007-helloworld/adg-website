import { useCallback, useState } from "react";
import Avatar from "../components/Avatar.jsx";
import Modal from "../components/Modal.jsx";
import { core, domainLevels, faculty, getMemberData, treeLevels } from "../data/team.js";
import { sentence } from "../utils/text.js";

const LEVEL_NAMES = [
  "HOD and coordinators",
  "Core committee",
  ...domainLevels.map((d) => d.name),
];

// Turns one level of the repo's tree into labelled groups of people.
function levelGroups(i) {
  if (i === 0) {
    return {
      domain: "Faculty",
      groups: [
        { label: "Head of department", people: [faculty.top], lead: true },
        { label: "Coordinators", people: faculty.children },
      ],
    };
  }
  if (i === 1) {
    return {
      domain: "Core committee",
      groups: [
        { label: "President", people: [core.top], lead: true },
        { label: "Officers", people: core.children },
      ],
    };
  }
  const d = domainLevels[i - 2];
  const groups = [
    { label: "Domain head", people: [{ name: d.head, role: "Domain head" }], lead: true },
  ];
  if (d.hasJoint) {
    groups.push({
      label: d.joint.length > 1 ? "Joint heads" : "Joint head",
      people: d.joint.map((j) => ({ name: j.name, role: "Joint head" })),
    });
  }
  groups.push({ label: "Executives", people: d.execs.map((x) => ({ name: x.name, role: "Executive" })) });
  return { domain: d.name, groups, note: d.note };
}

function Person({ person, lead, onOpen }) {
  return (
    <li>
      <button type="button" className={`person${lead ? " person--lead" : ""}`} onClick={() => onOpen(person)}>
        <Avatar name={person.name} size={lead ? "lg" : "md"} />
        <span>
          <span className="person-name">{person.name}</span>
          <span className="person-role">{sentence(person.role)}</span>
        </span>
      </button>
    </li>
  );
}

export default function Team() {
  const [level, setLevel] = useState(0);
  const [dir, setDir] = useState("next");
  const [member, setMember] = useState(null);
  const close = useCallback(() => setMember(null), []);

  const go = (i) => {
    if (i < 0 || i >= treeLevels.length || i === level) return;
    setDir(i > level ? "next" : "prev");
    setLevel(i);
  };

  const { groups, note, domain } = levelGroups(level);
  const total = groups.reduce((n, g) => n + g.people.length, 0);

  const open = (person, groupDomain) => setMember(getMemberData(person.name, person.role, groupDomain));

  return (
    <div className="section">
      <div className="wrap">
        <header className="page-head">
          <h1>Every face in the group.</h1>
          <p className="lede">
            A department committee needs two things: faculty who clear the path and students who run the
            work. Explore the ten levels below, and select anyone to see their profile.
          </p>
        </header>

        <div className="team-layout">
          <ol className="level-rail" aria-label="Levels">
            {LEVEL_NAMES.map((name, i) => (
              <li key={name}>
                <button type="button" className="level-btn" aria-current={i === level} onClick={() => go(i)}>
                  {name}
                </button>
              </li>
            ))}
          </ol>

          <section className="team-panel" aria-labelledby="level-title">
            <div className="panel-head">
              <div>
                <p className="panel-count">
                  Level {level + 1} of {treeLevels.length}. {total} {total === 1 ? "person" : "people"}.
                </p>
                <h2 id="level-title">{LEVEL_NAMES[level]}</h2>
              </div>
              <div className="chip-group">
                <button type="button" className="chip" disabled={level === 0} onClick={() => go(level - 1)}>
                  Previous level
                </button>
                <button
                  type="button"
                  className="chip"
                  disabled={level === treeLevels.length - 1}
                  onClick={() => go(level + 1)}
                >
                  Next level
                </button>
              </div>
            </div>

            <div className={`panel-body from-${dir}`} key={level}>
              {groups.map((g) => (
                <div className="tree-group" key={g.label}>
                  <h3 className="tree-label">{g.label}</h3>
                  <ul className="people" role="list">
                    {g.people.map((p) => (
                      <Person key={p.name + p.role} person={p} lead={g.lead} onOpen={(x) => open(x, domain)} />
                    ))}
                  </ul>
                </div>
              ))}
              {note && <p className="tree-note">{note}.</p>}
            </div>
          </section>
        </div>
      </div>

      <Modal open={!!member} onClose={close} labelledBy="member-name" size="xl">
        {member && (
          <div className="member-card">
            <div className="member-photo">
              <Avatar name={member.name} size="xl" />
            </div>
            <div className="member-info">
              <h2 id="member-name">{member.name}</h2>
              <p className="member-meta">
                {sentence(member.role)}. {member.domain}, AY 2026–27.
              </p>
              <h3 className="modal-sub">Role and responsibilities</h3>
              <p>{member.bio}</p>
              <div className="actions">
                <a className="btn btn-primary btn-sm" href={member.email}>
                  Email the committee
                </a>
                <a className="btn btn-ghost btn-sm" href={member.linkedin} target="_blank" rel="noreferrer">
                  {member.hasLinkedin ? "View LinkedIn profile" : "Search on LinkedIn"}
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
