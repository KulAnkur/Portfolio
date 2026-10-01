import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { social } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <Reveal className="contact-inner">
          <div className="contact-orbit" aria-hidden="true" />
          <p className="eyebrow">
            <span className="section-number">04 /</span> WHAT’S NEXT?
          </p>
          <h2>
            Have something
            <br />
            in <span>mind?</span>
            <ArrowUpRight className="contact-arrow" />
          </h2>
          <div className="contact-bottom">
            <p>
              An interesting problem. A bold idea. A new possibility.
              <br />
              Let’s build something worth putting into the world.
            </p>
            <div className="contact-links">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                <Linkedin size={17} /> Let’s connect <ArrowUpRight size={18} />
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                <Github size={17} /> GitHub <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
