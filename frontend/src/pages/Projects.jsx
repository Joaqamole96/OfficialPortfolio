import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [open, setOpen] = useState(null);
  const [filter, setFilter] = useState("all");
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch("/assets/data/projects.json")
      .then((r) => r.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);

        // Extract unique technologies
        const techs = new Set();
        data.forEach((project) => {
          project.tech.forEach((tech) => techs.add(tech));
        });
        setTechnologies(["all", ...Array.from(techs).sort()]);
      })
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tech.includes(filter))
      );
    }
  }, [filter, projects]);

  return (
    <section className="page-slide show">
      <div style={{ marginBottom: "2rem" }}>
        <h1>Projects</h1>
        <p style={{ opacity: 0.8 }}>
          A collection of my work. Click on any project to see more details.
        </p>
      </div>

      {/* Filter Buttons */}
      {technologies.length > 1 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span style={{ opacity: 0.7, fontSize: "0.9rem" }}>Filter:</span>
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className="filter-btn"
                style={{
                  padding: "0.4rem 0.8rem",
                  borderRadius: "6px",
                  background:
                    filter === tech
                      ? "var(--accent)"
                      : "rgba(255, 255, 255, 0.03)",
                  color: filter === tech ? "#002133" : "var(--text)",
                  border:
                    filter === tech
                      ? "1px solid var(--accent)"
                      : "1px solid rgba(255, 255, 255, 0.06)",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: filter === tech ? "600" : "400",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  if (filter !== tech) {
                    e.target.style.background = "rgba(255, 255, 255, 0.06)";
                    e.target.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (filter !== tech) {
                    e.target.style.background = "rgba(255, 255, 255, 0.03)";
                    e.target.style.transform = "translateY(0)";
                  }
                }}
              >
                {tech === "all" ? "All" : tech}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Project Count */}
      <p style={{ fontSize: "0.9rem", opacity: 0.6, marginBottom: "1rem" }}>
        Showing {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "project" : "projects"}
        {filter !== "all" && ` with ${filter}`}
      </p>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem 1rem",
            opacity: 0.6,
          }}
        >
          <p>No projects found with the selected filter.</p>
        </div>
      ) : (
        <div className="grid">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setOpen} />
          ))}
        </div>
      )}

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
