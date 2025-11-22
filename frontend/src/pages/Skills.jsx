import { useEffect, useState } from "react";
import SkillCircle from "../components/SkillCircle";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/assets/data/skills.json")
      .then((r) => r.json())
      .then(setSkills);
  }, []);

  return (
    <section className={"page-slide show"}>
      <h1>Skills</h1>
      <p style={{ opacity: 0.8 }}>
        Technical stack — current competence visualized. "Learning Now" appears
        below.
      </p>
      <div style={{ marginTop: 12 }} className="skill-grid">
        {skills.map((s) => (
          <SkillCircle key={s.name} {...s} />
        ))}
      </div>

      <h2 style={{ marginTop: 18 }}>Learning now</h2>
      <p style={{ opacity: 0.75 }}>
        C++, Rust — systems & performance-focused languages I'm actively
        learning.
      </p>
    </section>
  );
}