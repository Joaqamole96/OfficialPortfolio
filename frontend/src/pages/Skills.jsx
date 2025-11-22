import { useEffect, useState } from "react";
import SkillCircle from "../components/SkillCircle";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/assets/data/skills.json")
      .then((r) => r.json())
      .then(setSkills)
      .catch((err) => console.error("Failed to load skills:", err));
  }, []);

  // Categorize skills
  const categorizeSkills = () => {
    const categories = {
      Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
      Backend: ["PHP", "MySQL"],
      Languages: ["Java", "C#", "Python", "C++", "Rust"],
    };

    const categorized = {};
    Object.keys(categories).forEach((category) => {
      categorized[category] = skills.filter((skill) =>
        categories[category].includes(skill.name)
      );
    });

    return categorized;
  };

  const filteredSkills = searchTerm
    ? skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  const categorizedSkills = !searchTerm ? categorizeSkills() : {};

  return (
    <section className="page-slide show">
      <div style={{ marginBottom: "2rem" }}>
        <h1>Skills & Technologies</h1>
        <p style={{ opacity: 0.8 }}>
          My technical stack and current competencies. Hover over each to see
          proficiency levels.
        </p>
      </div>

      {/* Search */}
      <div style={{ marginBottom: "2rem", maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            background: "rgba(255, 255, 255, 0.03)",
            color: "var(--text)",
            fontSize: "0.95rem",
            transition: "all 0.2s ease",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "var(--accent)";
            e.target.style.background = "rgba(255, 255, 255, 0.05)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
            e.target.style.background = "rgba(255, 255, 255, 0.03)";
          }}
        />
      </div>

      {/* Skills Display */}
      {searchTerm ? (
        // Search Results
        <div>
          <p style={{ fontSize: "0.9rem", opacity: 0.6, marginBottom: "1rem" }}>
            Found {filteredSkills.length} skill
            {filteredSkills.length !== 1 ? "s" : ""}
          </p>
          {filteredSkills.length === 0 ? (
            <p style={{ opacity: 0.6, textAlign: "center", padding: "2rem" }}>
              No skills found matching "{searchTerm}"
            </p>
          ) : (
            <div className="skill-grid">
              {filteredSkills.map((s) => (
                <SkillCircle key={s.name} {...s} />
              ))}
            </div>
          )}
        </div>
      ) : (
        // Categorized Skills
        <div>
          {Object.entries(categorizedSkills).map(([category, categorySkills]) =>
            categorySkills.length > 0 ? (
              <div key={category} style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "1rem",
                    color: "var(--accent)",
                  }}
                >
                  {category}
                </h2>
                <div className="skill-grid">
                  {categorySkills.map((s) => (
                    <SkillCircle key={s.name} {...s} />
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      )}

      {/* Learning Section */}
      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          background: "linear-gradient(135deg, rgba(0,169,224,0.05), transparent)",
          borderRadius: "var(--radius)",
          border: "1px solid rgba(0,169,224,0.1)",
        }}
      >
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>
          🎯 Currently Learning
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7, margin: 0 }}>
          <strong>C++</strong> — Diving deeper into systems programming,
          memory management, and performance optimization.
          <br />
          <strong>Rust</strong> — Exploring modern systems language with a
          focus on safety and concurrency.
        </p>
      </div>

      {/* Proficiency Legend */}
      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem", opacity: 0.7 }}>
          Proficiency Guide
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0.5rem",
            fontSize: "0.85rem",
          }}
        >
          <div style={{ opacity: 0.7 }}>
            <span style={{ color: "var(--accent)" }}>■</span> 80-100%:
            Advanced/Expert
          </div>
          <div style={{ opacity: 0.7 }}>
            <span style={{ color: "var(--accent)" }}>■</span> 60-79%:
            Intermediate
          </div>
          <div style={{ opacity: 0.7 }}>
            <span style={{ color: "var(--accent)" }}>■</span> 30-59%: Familiar
          </div>
          <div style={{ opacity: 0.7 }}>
            <span style={{ color: "var(--accent)" }}>■</span> 0-29%: Learning
          </div>
        </div>
      </div>
    </section>
  );
}