import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    fetch("/assets/data/projects.json")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  return (
    <section className={"page-slide show"}>
      <h1 style={{ fontFamily: "Poppins,Inter", fontSize: 28 }}>
        Joaquin — Meticulous CS Student
      </h1>
      <p style={{ opacity: 0.8 }}>
        I build considered software & games. Below are highlights; explore for
        details.
      </p>

      <h2 style={{ marginTop: 18 }}>Featured</h2>
      <div className="grid" style={{ marginTop: 8 }}>
        {projects.slice(0, 2).map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setOpen} />
        ))}
      </div>

      <div style={{ marginTop: 18 }}>
        <Link to="/projects" className="btn">
          View all projects
        </Link>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
