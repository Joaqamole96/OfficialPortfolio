export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p style={{ opacity: 0.9 }}>{project.description}</p>
        <p>
          <strong>Tech:</strong> {project.tech.join(", ")}
        </p>
        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}
        >
          {project.screenshots &&
            project.screenshots.map((s, i) => (
              <img
                key={i}
                src={s}
                alt="screenshot"
                style={{
                  width: 160,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}