import {
  ArrowUpRight,
  Braces,
  GraduationCap,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section shell about-section">
      <Reveal>
        <div className="section-header">
          <div>
            <p className="eyebrow">
              <span className="section-number">03 /</span> A LITTLE ABOUT ME
            </p>
            <h2>
              Two perspectives.
              <br />
              <span className="muted-heading">One curious mind.</span>
            </h2>
          </div>
          <span className="about-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-story">
          <p className="about-lead">
            I like the space between
            <br />
            “what if?” and “it works.”
          </p>
          <p>
            My path has taken me from computer engineering in Mumbai to a
            master’s in Computer Science at the University of Southern
            California. Along the way, I’ve built data platforms, explored
            language models, and taught simulated drones to respond when things
            go wrong.
          </p>
          <p>
            Software and autonomy are two expressions of the same curiosity: how
            do we build intelligent systems people can rely on?
          </p>
          <div className="principle-row">
            <span>
              <Braces size={18} /> Build thoughtfully
            </span>
            <span>
              <ScanLine size={18} /> Stay curious
            </span>
            <span>
              <ShieldCheck size={18} /> Design for trust
            </span>
          </div>
          <div className="privacy-project">
            <ShieldCheck size={24} />
            <div>
              <span className="eyebrow">ALSO EXPLORING</span>
              <h3>Digital footprint protection</h3>
              <p>
                For USC Hacking for Defense’s SOCOM-158 challenge, I helped
                build a mobile privacy prototype with GPS metadata sanitization,
                tracking-domain filtering, and secure storage. Validated with
                85/85 simulated tests and informed by 41 team interviews.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="education-column" delay={0.1}>
          <div className="education-card">
            <GraduationCap size={25} />
            <span className="eyebrow">EDUCATION</span>
            <div className="education-item">
              <span className="education-date">2024 — 2026</span>
              <h3>
                University of
                <br />
                Southern California
              </h3>
              <p>M.S. Computer Science</p>
              <span className="gpa">GPA 3.77</span>
            </div>
            <div className="education-item">
              <span className="education-date">2020 — 2024</span>
              <h3>University of Mumbai</h3>
              <p>Bachelor’s in Computer Engineering</p>
              <span className="gpa">GPA 3.88</span>
            </div>
            <a href="#experience" className="text-link">
              See where I’ve been building <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
