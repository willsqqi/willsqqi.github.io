import { education, now, profile, techStack } from "./content";

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#about">skip to content</a>
      <header>
        <a className="identity" href="#home">~/SQ</a>
        <nav aria-label="Primary navigation">
          <a href="#about">about</a>
          <a href="#now">now</a>
          <a href="#contact">contact</a>
        </nav>
      </header>
      <main id="home">
        <section id="about" aria-labelledby="name">
          <p className="prompt" aria-hidden="true">$ whoami</p>
          <h1 id="name">{profile.name}<span className="cursor" aria-hidden="true">_</span></h1>
          <p className="role">{profile.title}</p>
          <p>{profile.intro}</p>
          <p>{profile.background}</p>
          <p>{profile.finance}</p>
          <p className="location">{profile.location}</p>
        </section>
        <section id="now" aria-labelledby="now-title">
          <h2 id="now-title"><span aria-hidden="true"># </span>now</h2>
          <dl className="now-list">{now.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.text}</dd></div>)}</dl>
        </section>
        <section aria-labelledby="education-title" aria-label="Education">
          <h2 id="education-title"><span aria-hidden="true"># </span>education</h2>
          <dl>{education.map(item => <div className="education-row" key={item.school}><dt>{item.school}</dt><dd>{item.degree}</dd></div>)}</dl>
        </section>
        <section aria-labelledby="stack-title">
          <h2 id="stack-title"><span aria-hidden="true"># </span>tech stack</h2>
          <dl className="now-list stack-list">{techStack.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.text}</dd></div>)}</dl>
        </section>
        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title"><span aria-hidden="true"># </span>contact</h2>
          <div className="links">
            <a href={profile.github}>GitHub ↗</a>
            <a href={`mailto:${profile.email}`}>email ↗</a>
          </div>
        </section>
      </main>
      <footer>SQ <span aria-hidden="true">/</span> New York</footer>
    </div>
  );
}
