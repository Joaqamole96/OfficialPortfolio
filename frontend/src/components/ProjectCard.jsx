export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.short}</p>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <button className="btn" onClick={() => onOpen(project)}>
          Details
        </button>
        {project.repo && (
          <a
            className="btn"
            href={project.repo}
            target="\_blank"
            rel="noreferrer"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "var(--text)",
            }}
          >
            Repo
          </a>
        )}
      </div>
    </article>
  );
}