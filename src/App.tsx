import { motion } from "framer-motion";
import { Section } from "./components/Section";
import { SkillIcon } from "./components/Icons";
import {
  goals,
  interests,
  profile,
  projects,
  skillGroups,
} from "./data";
import profilePhoto from "./Images/image1.jpeg";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#goals", label: "Goals" },
  { href: "#contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function App() {
  return (
    <div className="portfolio-page position-relative">
      <div className="portfolio-grid-overlay" aria-hidden />

      <nav className="navbar navbar-expand-lg navbar-dark portfolio-navbar border-bottom border-secondary border-opacity-25">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <a className="navbar-brand text-white" href="#top">
            LK
          </a>
          <button
            className="navbar-toggler shadow-none border-secondary border-opacity-25"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-1">
              {nav.map((item) => (
                <li className="nav-item" key={item.href}>
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className="position-relative" style={{ zIndex: 1 }}>
        <section id="top" className="hero-padding">
          <div className="container" style={{ maxWidth: "64rem" }}>
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-lg">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="min-w-0"
                  style={{ maxWidth: "48rem" }}
                >
                  <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-mono text-uppercase small text-accent mb-2 letter-spacing-wide"
                  >
                    Computer Science Engineer
                  </motion.p>
                  <motion.h1
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="display-4 fw-semibold text-white lh-sm mb-3"
                  >
                    {profile.name}
                  </motion.h1>
                  <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="lead text-muted-custom mb-4"
                  >
                    {profile.tagline}
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="fs-5 fw-medium text-white mb-3"
                  >
                    {profile.headline}
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="text-muted-custom mb-4 pe-lg-4"
                  >
                    {profile.subheadline}
                  </motion.p>
                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="d-flex flex-wrap gap-2 gap-sm-3"
                  >
                    <a
                      href={`mailto:${profile.email}`}
                      className="btn btn-portfolio-primary btn-lg px-4 rounded-3"
                    >
                      Email me
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-portfolio btn-lg px-4 rounded-3"
                    >
                      GitHub
                    </a>
                    {profile.linkedin ? (
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-portfolio btn-lg px-4 rounded-3"
                      >
                        LinkedIn
                      </a>
                    ) : null}
                    <a
                      href="#projects"
                      className="btn btn-ghost btn-lg px-4 rounded-3"
                    >
                      View projects
                    </a>
                  </motion.div>
                  <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="d-flex flex-wrap align-items-center gap-2 gap-sm-3 small text-muted-custom mt-4 mb-0"
                  >
                    <span>{profile.email}</span>
                    <span className="d-none d-sm-inline text-secondary opacity-50">
                      ·
                    </span>
                    <a href={`tel:${profile.phone}`} className="link-light link-underline-opacity-0 link-underline-opacity-100-hover">
                      {profile.phoneLabel}
                    </a>
                    <span className="d-none d-sm-inline text-secondary opacity-50">
                      ·
                    </span>
                    <span>{profile.location}</span>
                  </motion.p>
                </motion.div>
              </div>
              <div className="col-lg-auto">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{
                    duration: 0.55,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="hero-photo-wrap"
                >
                  <div className="hero-photo-glow" aria-hidden />
                  <div className="hero-photo-frame">
                    <img
                      src={profilePhoto}
                      alt={`${profile.name}, professional portrait`}
                      width={640}
                      height={800}
                      className="w-100 ratio-4x5 rounded-3"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="Who I am">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lead text-muted-custom mb-0"
            style={{ maxWidth: "48rem" }}
          >
            I am a passionate Computer Science Engineer specializing in building scalable
            digital solutions across web, mobile, and embedded systems. My expertise spans
            full-stack development, UI/UX design, graphics programming, and IoT systems. I
            enjoy solving real-world problems — from intuitive interfaces to backend systems
            and smart connected devices.
          </motion.p>
        </Section>

        <Section id="skills" eyebrow="Skills" title="What I work with">
          <div className="row g-4">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                className="col-md-6 col-xl-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{
                  duration: 0.45,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <article className="card card-portfolio border rounded-4 h-100 p-2 p-md-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="icon-skill-wrap flex-shrink-0">
                        <SkillIcon name={group.icon} className="icon-skill" />
                      </div>
                      <h3 className="h5 fw-semibold text-white mb-0">{group.title}</h3>
                    </div>
                    <ul className="list-unstyled small text-muted-custom mb-0">
                      {group.items.map((item) => (
                        <li key={item} className="d-flex gap-2 mb-2">
                          <span
                            className="rounded-circle flex-shrink-0 bg-primary mt-1"
                            style={{ width: "0.35rem", height: "0.35rem" }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected work">
          <div className="d-flex flex-column gap-4">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`card border rounded-4 p-4 p-md-5 ${
                  project.featured ? "project-card-featured" : "card-portfolio"
                }`}
              >
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-3">
                  <div>
                    {project.featured ? (
                      <span className="font-mono text-uppercase small text-accent letter-spacing-wide d-block mb-1">
                        Featured
                      </span>
                    ) : null}
                    <h3
                      className={`fw-semibold text-white mb-0 ${
                        project.featured ? "fs-3 mt-1" : "fs-4"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  {project.links.length > 0 ? (
                    <div className="d-flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-outline-light border-secondary border-opacity-25 text-accent px-3 rounded-3"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
                <p className="text-muted-custom mt-3 mb-0" style={{ maxWidth: "48rem" }}>
                  {project.description}
                </p>
                <ul className="list-unstyled d-flex flex-wrap gap-2 mt-4 mb-0">
                  {project.highlights.map((h) => (
                    <li key={h}>
                      <span className="badge rounded-pill px-3 py-2 badge-outline fw-normal">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="goals" eyebrow="Experience" title="Interests & goals">
          <div className="row g-4 g-lg-5">
            <motion.div
              className="col-lg-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="h5 fw-semibold text-white mb-3">Focus areas</h3>
              <ul className="list-unstyled text-muted-custom mb-0">
                {interests.map((item) => (
                  <li key={item} className="d-flex gap-3 mb-3">
                    <span
                      className="rounded-circle bg-primary flex-shrink-0 mt-2"
                      style={{ width: "0.4rem", height: "0.4rem" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="col-lg-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="goals-card border rounded-4 p-4 p-md-5 h-100">
                <span className="font-mono text-uppercase small text-accent letter-spacing-wide d-block mb-2">
                  Goals
                </span>
                <p className="fs-5 text-white mb-0 lh-base">{goals}</p>
              </div>
            </motion.div>
          </div>
        </Section>

        <section id="contact" className="section-scroll border-top border-secondary border-opacity-25">
          <div className="container" style={{ maxWidth: "64rem" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="contact-panel rounded-4 p-4 p-md-5 text-center"
            >
              <h2 className="fs-2 fw-semibold text-white mb-3">Let&apos;s work together</h2>
              <p className="text-muted-custom mx-auto mb-4 mb-md-5" style={{ maxWidth: "36rem" }}>
                Open to freelance work, collaborations, and full-time opportunities.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-portfolio-primary btn-lg px-4 rounded-3"
                >
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="btn btn-outline-portfolio btn-lg px-4 rounded-3"
                >
                  {profile.phoneLabel}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-portfolio btn-lg px-4 rounded-3"
                >
                  github.com/{profile.githubUser}
                </a>
                {profile.linkedin ? (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-portfolio btn-lg px-4 rounded-3"
                  >
                    LinkedIn
                  </a>
                ) : null}
                {profile.resumeUrl ? (
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-portfolio btn-lg px-4 rounded-3 text-accent"
                  >
                    Download résumé
                  </a>
                ) : null}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-top border-secondary border-opacity-25 py-4 text-center small text-muted-custom">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <p className="mb-0">
            © {new Date().getFullYear()} {profile.name}. Built with React & Bootstrap.
          </p>
        </div>
      </footer>
    </div>
  );
}
