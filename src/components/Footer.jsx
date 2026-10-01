import { ArrowUp, Pause, Play } from "lucide-react";

export default function Footer({ motionEnabled, onToggleMotion }) {
  return (
    <footer className="shell site-footer">
      <a
        className="footer-brand"
        href="#home"
        aria-label="Ankur Kulkarni — home"
      >
        a<span>/</span>k.
      </a>
      <span>
        © {new Date().getFullYear()} Ankur Kulkarni
        <span className="footer-separator"> / </span>
        <span className="footer-note">Made with intention.</span>
      </span>
      <div className="footer-controls">
        <button onClick={onToggleMotion} aria-pressed={!motionEnabled}>
          {motionEnabled ? <Pause size={13} /> : <Play size={13} />}
          <span>{motionEnabled ? "Pause motion" : "Enable motion"}</span>
        </button>
        <a href="#home" aria-label="Back to top">
          <ArrowUp size={17} />
        </a>
      </div>
    </footer>
  );
}
