import { useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: "1rem",
          }}
        >
          <div>
            <h2 style={{ margin: "0 0 0.5rem 0" }}>{project.title}</h2>
            <div style={{ display: "flex", gap: "1rem", fontSize: "0.9rem" }}>
              {project.role && (
                <span style={{ opacity: 0.7 }}>
                  <strong>Role:</strong> {project.role}
                </span>
              )}
              {project.date && (
                <span style={{ opacity: 0.7 }}>
                  <strong>Date:</strong> {project.date}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "var(--text)",
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
            }}
          >
            ×
          </button>
        </div>

        {/* Description */}
        <p style={{ opacity: 0.9, lineHeight: 1.6, marginBottom: "1rem" }}>
          {project.description}
        </p>

        {/* Technologies */}
        <div style={{ marginBottom: "1rem" }}>
          <strong>Technologies:</strong>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginTop: "0.5rem",
            }}
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "0.3rem 0.7rem",
                  background: "rgba(0, 169, 224, 0.1)",
                  border: "1px solid rgba(0, 169, 224, 0.3)",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  color: "var(--accent)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div style={{ marginBottom: "1rem" }}>
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>
              Screenshots:
            </strong>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {project.screenshots.map((screenshot, i) => (
                <img
                  key={i}
                  src={screenshot}
                  alt={`${project.title} screenshot ${i + 1}`}
                  onClick={() => setSelectedImage(screenshot)}
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    cursor: "pointer",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem" }}>
          {project.repo && (
            <a
              className="btn"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          )}
          {project.demo && (
            <a
              className="btn"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "transparent",
                border: "1px solid var(--accent)",
                color: "var(--accent)",
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            padding: "2rem",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8)",
            }}
          />
        </div>
      )}
    </div>
  );
}