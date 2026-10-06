import { THEMES, useTheme } from "../theme.jsx";

function Swatch({ colors }) {
  return (
    <span
      className="swatch"
      aria-hidden="true"
      style={{ background: `linear-gradient(135deg, ${colors[0]} 50%, ${colors[1]} 50%)` }}
    />
  );
}

// Two themes only, so a single button that flips between them.
export default function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const next = THEMES.find((t) => t.id !== theme) ?? THEMES[0];

  return (
    <div className="theme-picker">
      <button
        type="button"
        className="theme-btn"
        onClick={() => setTheme(next.id)}
        aria-label={`Switch to ${next.name} theme`}
      >
        <Swatch colors={next.swatch} />
        <span>{next.name}</span>
      </button>
    </div>
  );
}
