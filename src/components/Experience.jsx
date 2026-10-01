import { ArrowUpRight } from "lucide-react";
import { experience } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="experience-section section">
      <div className="shell experience-layout">
        <Reveal className="experience-intro">
          <p className="eyebrow">
            <span className="section-number">02 /</span> THE JOURNEY
          </p>
          <h2>
            Good systems.
            <br />
            <span className="muted-heading">Real experience.</span>
          </h2>
          <p>
            Building things that work.
            <br />
            Learning from the people who use them.
          </p>
          <a className="text-link" href="#about">
            The person behind the work <ArrowUpRight size={16} />
          </a>
        </Reveal>
        <div className="experience-list">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.07}>
              <article className="experience-item">
                <div className="experience-marker">
                  <span />
                </div>
                <div className="experience-meta">
                  <span className="eyebrow">{job.date}</span>
                  {job.current && (
                    <span className="current-badge">
                      <span className="status-dot" />
                      CURRENT
                    </span>
                  )}
                </div>
                <h3>{job.company}</h3>
                <span className="experience-role">{job.role}</span>
                <p>{job.description}</p>
                <div className="tag-list">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
