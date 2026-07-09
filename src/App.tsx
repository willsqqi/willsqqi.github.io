import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { beliefs, education, profile, projects, skillGroups, type IconName } from "./content";

const iconClassByName: Record<IconName, string> = {
  angular: "devicon-angularjs-plain colored",
  aws: "devicon-amazonwebservices-plain-wordmark colored",
  bash: "devicon-bash-plain",
  code: "devicon-codepen-plain",
  cypress: "devicon-cypressio-plain",
  docker: "devicon-docker-plain colored",
  gcp: "devicon-googlecloud-plain colored",
  grafana: "devicon-grafana-plain colored",
  java: "devicon-java-plain colored",
  javascript: "devicon-javascript-plain colored",
  jest: "devicon-jest-plain colored",
  kubernetes: "devicon-kubernetes-plain colored",
  mongodb: "devicon-mongodb-plain colored",
  neo4j: "devicon-neo4j-plain colored",
  playwright: "devicon-playwright-plain colored",
  postgresql: "devicon-postgresql-plain colored",
  python: "devicon-python-plain colored",
  redis: "devicon-redis-plain colored",
  spark: "devicon-apachespark-plain colored",
  spring: "devicon-spring-plain colored",
  sql: "devicon-azuresqldatabase-plain colored",
  typescript: "devicon-typescript-plain colored",
  vuejs: "devicon-vuejs-plain colored"
};

function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a className={`button-link button-link--${variant}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="portrait-panel">
        <div className="headshot-frame">
          <img src="/headshot.png" alt="William Qi headshot" className="headshot-image" />
        </div>
        <div className="portrait-caption">
          <span>Full-stack systems</span>
          <span>Cloud data workflows</span>
          <span>Useful interfaces</span>
        </div>
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-intro">{profile.intro}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions" aria-label="Contact links">
          <ButtonLink href={profile.github}>
            <Github size={18} aria-hidden="true" />
            GitHub
          </ButtonLink>
          <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
            <Mail size={18} aria-hidden="true" />
            Email
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Beliefs() {
  return (
    <section className="section section--wash" aria-labelledby="beliefs-title">
      <div className="section-inner">
        <h2 id="beliefs-title">How I Build</h2>
        <div className="belief-grid">
          {beliefs.map((belief) => (
            <article className="belief" key={belief.title}>
              <h3>{belief.title}</h3>
              <p>{belief.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title" aria-label="Technology stack">
      <div className="section-inner">
        <div className="section-heading-row">
          <h2 id="skills-title">Technology Stack</h2>
          <p>Aligned to the tools I use across frontend, backend, cloud, testing, and data work.</p>
        </div>

        <div className="skill-group-grid">
          {skillGroups.map((group) => (
            <section className="skill-group" key={group.title} aria-labelledby={`skill-${group.title}`}>
              <h3 id={`skill-${group.title}`}>{group.title}</h3>
              <div className="skill-grid">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={`${group.title}-${skill.name}`}>
                    <i className={iconClassByName[skill.icon]} aria-hidden="true" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section section--projects" id="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <div className="section-heading-row section-heading-row--center">
          <h2 id="projects-title">Selected Projects</h2>
          <p>Public-facing examples of the product and systems problems I like working on.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual" aria-hidden="true">
                <span>{project.title.split(" ").slice(0, 2).map((word) => word[0]).join("")}</span>
              </div>
              <div className="project-body">
                <p className="project-pitch">{project.pitch}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} stack`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.links.length > 0 ? (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section" aria-labelledby="education-title" aria-label="Education">
      <div className="section-inner">
        <h2 id="education-title">Education</h2>
        <div className="education-list">
          {education.map((item) => (
            <article className="education-item" key={item.school}>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-inner">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s build useful software.</h2>
          <p>
            I am interested in full-stack engineering, cloud platform work, and data-heavy products with clear user value.
          </p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <span>
            <MapPin size={18} aria-hidden="true" />
            New York
          </span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#home">William Qi</a>
        <div>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Beliefs />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
