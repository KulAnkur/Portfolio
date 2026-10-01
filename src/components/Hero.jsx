import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Cpu,
  Github,
  Linkedin,
  MoveUpRight,
  RotateCw,
  ScanLine,
} from "lucide-react";
import { perspectives, social } from "../data/portfolio";

function Portrait({ mode, onFlip }) {
  return (
    <div className="portrait-stage">
      <span className="stage-coordinate coordinate-top">
        LOS ANGELES / USC CLASS OF ’26
      </span>
      <span className="stage-plus plus-one" aria-hidden="true">
        +
      </span>
      <span className="stage-plus plus-two" aria-hidden="true">
        +
      </span>
      <div className="orbit orbit-one" aria-hidden="true">
        <span />
      </div>
      <div className="orbit orbit-two" aria-hidden="true" />
      <div className="portrait-halo" aria-hidden="true" />
      <div
        className={`portrait-flipper ${mode === "autonomy" ? "is-flipped" : ""}`}
      >
        {["software", "autonomy"].map((side) => (
          <div
            key={side}
            className={`portrait-face portrait-${side}`}
            aria-hidden={mode !== side}
          >
            <img
              src="/images/ankur-graduation.webp"
              width="960"
              height="1710"
              alt={
                mode === side
                  ? "Ankur Kulkarni at his University of Southern California graduation"
                  : ""
              }
              fetchPriority={side === "software" ? "high" : "auto"}
            />
            <div className="portrait-shade" />
            {side === "autonomy" && (
              <div className="portrait-scanner" aria-hidden="true">
                <div className="scan-corner top-left" />
                <div className="scan-corner top-right" />
                <div className="scan-corner bottom-left" />
                <div className="scan-corner bottom-right" />
                <div className="scan-beam" />
              </div>
            )}
            <div className="portrait-caption">
              <span className="portrait-name">Ankur Kulkarni</span>
              <span>USC · M.S. COMPUTER SCIENCE ’26</span>
            </div>
          </div>
        ))}
      </div>
      <div className="floating-tag tag-top">
        {mode === "software" ? <Braces size={19} /> : <ScanLine size={19} />}
        <span>
          {mode === "software"
            ? "Built with intention."
            : "Designed for resilience."}
        </span>
        <span className="tag-dot" />
      </div>
      <div className="floating-tag tag-bottom">
        <span className="tag-icon">
          <Cpu size={20} />
        </span>
        <span>
          <small>
            {mode === "software"
              ? "SOFTWARE × INTELLIGENCE"
              : "INTELLIGENCE × MOTION"}
          </small>
          {mode === "software"
            ? "An engineer. A builder."
            : "An engineer. An explorer."}
        </span>
      </div>
      <button
        className="flip-button"
        onClick={onFlip}
        aria-label={`Rotate to ${mode === "software" ? "Autonomy and AI" : "Software and AI"} perspective`}
      >
        <RotateCw size={19} />
        <span>See the other side</span>
      </button>
      <div className="portrait-side-label" aria-hidden="true">
        ONE MIND. TWO PERSPECTIVES.
      </div>
    </div>
  );
}

export default function Hero({ mode, onModeChange }) {
  const content = perspectives[mode];
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-inner">
        <div className="hero-topline">
          <span className="micro-label">
            <span className="status-dot" /> A BUILDER AT THE INTERSECTION
          </span>
          <span className="hero-edition">PORTFOLIO / 2026</span>
        </div>
        <div className="perspective-bar">
          <div
            className="perspective-switch"
            role="group"
            aria-label="Choose an engineering perspective"
          >
            <button
              onClick={() => onModeChange("software")}
              aria-pressed={mode === "software"}
            >
              {mode === "software" && (
                <Motion.span
                  className="switch-indicator"
                  layoutId="perspective-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                />
              )}
              <Code2 size={16} />
              <span>Software + AI</span>
              <small>01</small>
            </button>
            <button
              onClick={() => onModeChange("autonomy")}
              aria-pressed={mode === "autonomy"}
            >
              {mode === "autonomy" && (
                <Motion.span
                  className="switch-indicator"
                  layoutId="perspective-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                />
              )}
              <ScanLine size={16} />
              <span>Autonomy + AI</span>
              <small>02</small>
            </button>
          </div>
          <span className="switch-hint">
            <RotateCw size={13} /> Two sides. One engineer.
          </span>
        </div>
        <div className="hero-columns">
          <div className="hero-copy">
            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={mode}
                initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.24 }}
              >
                <p className="eyebrow hero-eyebrow">
                  <span className="eyebrow-line" />
                  {content.eyebrow}
                </p>
                <h1>
                  <span>{content.headline[0]}</span>
                  <span className="accent-text">{content.headline[1]}</span>
                  <span className="accent-text">
                    {content.headline[2]}
                    <span className="heading-star" aria-hidden="true">
                      ✳
                    </span>
                  </span>
                </h1>
                <p className="hero-description">{content.description}</p>
              </Motion.div>
            </AnimatePresence>
            <div className="hero-ctas">
              <a href="#work" className="button button-primary">
                Explore my work <MoveUpRight size={18} />
              </a>
              <a href="#about" className="button button-text">
                A little about me <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-socials">
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Ankur on GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Ankur on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <span className="social-divider" />
              <span>USC alum. Always building.</span>
            </div>
          </div>
          <Portrait
            mode={mode}
            onFlip={() =>
              onModeChange(mode === "software" ? "autonomy" : "software")
            }
          />
        </div>
        <div className="hero-bottom">
          <a href="#work">
            <ArrowDown size={14} />
            <span>SCROLL TO EXPLORE</span>
          </a>
          <span>
            <span className="accent-dot" />
            {content.caption}
          </span>
          <span className="page-count">
            {content.number}
            <span> / 02</span>
          </span>
        </div>
      </div>
      <div className="stack-strip">
        <div className="shell stack-inner">
          <span className="micro-label">
            MY TOOLKIT <span aria-hidden="true">↗</span>
          </span>
          <div className="stack-items">
            {content.stack.map((tech, index) => (
              <span key={tech}>
                {index > 0 && <i aria-hidden="true">✳</i>}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="shell metrics-strip" aria-live="polite">
        {content.metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <div>
              <span>{metric.label}</span>
              <small>{metric.context}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
