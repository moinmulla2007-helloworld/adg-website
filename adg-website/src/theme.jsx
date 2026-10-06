import { createContext, useContext, useLayoutEffect, useState } from "react";

// Colours themselves live in styles.css ([data-theme="..."] blocks).
// The swatch pair here is only for the picker preview.
export const THEMES = [
  { id: "midnight", name: "Midnight", swatch: ["#0c1426", "#ffb547"] },
  { id: "paper", name: "Daylight", swatch: ["#eef1f7", "#2748d8"] },
];

const KEY = "adg-theme";
const ThemeContext = createContext({ theme: "midnight", setTheme: () => {} });

function initialTheme() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && THEMES.some((t) => t.id === saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "paper" : "midnight";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);

  // Layout effect so child effects (the canvas) read the new CSS variables.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* ignore */
    }
    const bg = getComputedStyle(root).getPropertyValue("--bg").trim();
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", bg);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
