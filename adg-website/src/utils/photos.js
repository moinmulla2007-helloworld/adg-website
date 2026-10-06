// Finds a member photo in src/assets/team by name.
// "Jitesh Zope" -> jitesh-zope.jpg (also .jpeg / .png / .webp).
const files = import.meta.glob("../assets/team/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const bySlug = {};
for (const [path, url] of Object.entries(files)) {
  const slug = path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
  bySlug[slug] = url;
}

export const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .split(/\s+/)
    .join("-");

export const photoFor = (name) => bySlug[slugify(name || "")] ?? null;
