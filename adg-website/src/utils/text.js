// The repo's data files store labels in capitals ("TOPIC · TBA", "NA").
// These helpers turn them into readable sentence case for display.
export function sentence(s = "") {
  const t = String(s)
    .replace(/\s*·\s*TBA\b/i, " to be announced")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  // Capitalise the first letter, skipping any leading punctuation such as a dash.
  return t.replace(/^([^a-z0-9]*)([a-z])/, (_, lead, c) => lead + c.toUpperCase());
}

export const orTba = (v) => (String(v).trim().toUpperCase() === "NA" ? "To be announced" : v);