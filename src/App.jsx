import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [mode, setMode] = useState("software");
  const [theme, setTheme] = useState(() =>
    readPreference(
      "ak-theme",
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark",
    ),
  );
  const [motionEnabled, setMotionEnabled] = useState(
    () =>
      readPreference(
        "ak-motion",
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "off"
          : "on",
      ) === "on",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#111113" : "#f7f6f2");
    try {
      localStorage.setItem("ak-theme", theme);
    } catch {
      /* Storage is optional. */
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? "on" : "off";
    try {
      localStorage.setItem("ak-motion", motionEnabled ? "on" : "off");
    } catch {
      /* Storage is optional. */
    }
  }, [motionEnabled]);

  return (
    <MotionConfig reducedMotion={motionEnabled ? "user" : "always"}>
      <div className="portfolio" data-mode={mode}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation
          theme={theme}
          onToggleTheme={() =>
            setTheme((value) => (value === "dark" ? "light" : "dark"))
          }
        />
        <main id="main">
          <Hero mode={mode} onModeChange={setMode} />
          <Projects mode={mode} />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer
          motionEnabled={motionEnabled}
          onToggleMotion={() => setMotionEnabled((value) => !value)}
        />
      </div>
    </MotionConfig>
  );
}
