import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projects, social } from "../data/portfolio";
import ProjectArt from "./ProjectArt";
import Reveal from "./Reveal";

function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    if (project) {
      element.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        element.close();
        document.body.style.overflow = previous;
      };
    }
  }, [project]);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dialog-inner">
          <button
            className="icon-button dialog-close"
            onClick={onClose}
            aria-label="Close project details"
            autoFocus
          >
            <X size={22} />
          </button>
          <ProjectArt type={project.artwork} />
          <div className="dialog-content">
            <span className="eyebrow">{project.type}</span>
            <h2 id="project-title">{project.subtitle}</h2>
            <div className="dialog-metric">
              <strong>{project.metric}</strong>
              <span>{project.metricLabel}</span>
            </div>
            {[
              ["The challenge", project.problem],
              ["The approach", project.approach],
              ["The result", project.outcome],
            ].map(([heading, body]) => (
              <div key={heading} className="case-section">
                <h3>{heading}</h3>
                <p>{body}</p>
              </div>
            ))}
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {project.url && (
              <a
                className="button button-primary"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Explore the code <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

function ProjectGrid({ initialFilter }) {
  const [filter, setFilter] = useState(initialFilter);
  const [selected, setSelected] = useState(null);
  const filtered = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );
  return (
    <>
      <div className="work-controls">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {[
            ["all", "All work"],
            ["software", "Software + AI"],
            ["autonomy", "Autonomy + AI"],
          ].map(([value, label]) => (
            <button
              key={value}
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
            >
              {label}
              {filter === value && <span className="filter-dot" />}
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {String(filtered.length).padStart(2, "0")} SELECTED PROJECTS
        </span>
      </div>
      <Motion.div className="project-grid" layout>
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project, index) => (
            <Motion.article
              className="project-card"
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, delay: index * 0.035 }}
            >
              <button
                className="project-open"
                onClick={() => setSelected(project)}
                aria-label={`Read about ${project.subtitle}`}
              >
                <ProjectArt type={project.artwork} />
                <div className="project-body">
                  <div className="project-category">
                    <span>{project.type}</span>
                    <ArrowUpRight size={19} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-bottom">
                    <span>Explore project</span>
                    <span>
                      0{projects.indexOf(project) + 1}{" "}
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </button>
            </Motion.article>
          ))}
        </AnimatePresence>
      </Motion.div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export default function Projects({ mode }) {
  return (
    <section id="work" className="section shell work-section">
      <Reveal>
        <div className="section-header">
          <div>
            <p className="eyebrow">
              <span className="section-number">01 /</span> SELECTED WORK
            </p>
            <h2>
              Built to solve.
              <br />
              <span className="muted-heading">Designed to matter.</span>
            </h2>
          </div>
          <p className="section-description">
            A few things I’ve built at the intersection
            <br className="desktop-break" /> of engineering, intelligence, and
            impact.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <ProjectGrid key={mode} initialFilter={mode} />
      </Reveal>
      <div className="work-footer">
        <span>Curiosity doesn’t stop at the featured projects.</span>
        <a href={social.github} target="_blank" rel="noreferrer">
          <Github size={16} /> More on GitHub <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
