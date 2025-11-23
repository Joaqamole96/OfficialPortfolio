import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    import("../data/projects.json")
      .then((module) => setProjects(module.default))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section className="page-slide show">
      {/* Hero Section */}
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            fontFamily: "Poppins,Inter",
            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
            marginBottom: "0.5rem",
            background: "linear-gradient(135deg, var(--text), var(--accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Hi, welcome to my Portfolio!
        </h1>
        <p
          style={{
            opacity: 0.8,
            fontSize: "1.1rem",
            lineHeight: 1.6,
            maxWidth: "600px",
          }}
        >
          I build software & games with attention to detail. I'm deeply 
          passionate about algorithms, systems, and creating meaningful digital
          experiences.
        </p>

        {/* Quick Links */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Link to="/projects" className="btn">
            View Projects
          </Link>
          <Link
            to="/contact"
            className="btn"
            style={{
              background: "transparent",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div
          className="card"
          style={{
            textAlign: "center",
            padding: "1.5rem 1rem",
            background:
              "linear-gradient(135deg, rgba(0,169,224,0.1), transparent)",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            3+
          </div>
          <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>Projects</div>
        </div>
        <div
          className="card"
          style={{
            textAlign: "center",
            padding: "1.5rem 1rem",
            background:
              "linear-gradient(135deg, rgba(15,76,129,0.2), transparent)",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            11+
          </div>
          <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>Technologies</div>
        </div>
        <div
          className="card"
          style={{
            textAlign: "center",
            padding: "1.5rem 1rem",
            background:
              "linear-gradient(135deg, rgba(0,169,224,0.1), transparent)",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            BS CS
          </div>
          <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>In Progress</div>
        </div>
      </div>

      {/* Featured Projects */}
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Featured Projects
      </h2>
      {projects.length === 0 ? (
        <p style={{ opacity: 0.6 }}>Loading projects...</p>
      ) : (
        <div className="grid" style={{ marginTop: "1rem" }}>
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setOpen} />
          ))}
        </div>
      )}

      <div style={{ marginTop: "1.5rem" }}>
        <Link to="/projects" className="btn">
          View All Projects →
        </Link>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
