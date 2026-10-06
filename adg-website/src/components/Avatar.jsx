import { photoFor } from "../utils/photos.js";

// Photo if one exists for this name, otherwise initials in one consistent style.
export default function Avatar({ name, photo, size = "md" }) {
  const src = photo ?? photoFor(name);
  if (src) {
    return <img className={`avatar avatar-${size}`} src={src} alt="" loading="lazy" />;
  }
  const initials = name
    .replace(/^(dr|mr|ms|mrs|prof)\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  return (
    <span className={`avatar avatar-${size} av-initials`} aria-hidden="true">
      {initials}
    </span>
  );
}
