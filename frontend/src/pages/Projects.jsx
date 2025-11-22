import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(null);
  useEffect(() => {
    fetch("/assets/data/projects.json")
      .then((r) => r.json())
      .then(setProjects);
  }, []);
  return (
    <section className={"page-slide show"}>
      <h1>Projects</h1>
      <p style={{ opacity: 0.8 }}>Hybrid cards — click for details.</p>
      <div style={{ marginTop: 12 }} className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setOpen} />
        ))}
      </div>
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}