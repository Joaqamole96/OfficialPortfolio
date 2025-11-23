import { useEffect, useRef } from "react";

export default function About() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-item-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="page-slide show">
      <h1>About Me</h1>
      
      {/* Intro */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(0,169,224,0.05), transparent)",
          padding: "1.5rem",
          borderRadius: "var(--radius)",
          marginBottom: "2rem",
          border: "1px solid rgba(0,169,224,0.1)",
        }}
      >
        <p style={{ opacity: 0.9, lineHeight: 1.7, margin: 0 }}>
          I am professional but conversational. That is to say, I am meticulous, 
          detail-focused, and curious about the science of computation. I enjoy 
          algorithms, data structures, and efficient systems. Outside of 
          academics I keep things light but always aim for high-quality work.
        </p>
      </div>

      {/* Skills Highlight */}
      <h2 style={{ marginBottom: "1rem" }}>What I Do</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div className="card">
          <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            🎮 Game Development
          </h3>
          <p style={{ fontSize: "0.9rem", margin: 0 }}>
            Creating immersive experiences with Unity and C#, focusing on
            gameplay mechanics and procedural generation.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            💻 Web Development
          </h3>
          <p style={{ fontSize: "0.9rem", margin: 0 }}>
            Building responsive, user-friendly web applications with modern
            technologies like React, PHP, and MySQL.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            🔬 Problem Solving
          </h3>
          <p style={{ fontSize: "0.9rem", margin: 0 }}>
            Passionate about algorithms and data structures. Enjoy tackling
            complex computational challenges.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <h2 style={{ marginBottom: "1.5rem" }}>My Journey</h2>
      <div ref={timelineRef} className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-date">2023 - Present</div>
            <h3>Started BS Computer Science</h3>
            <p>University of Makati</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Began the pursuit of learning computer science.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-date">October 2025 - Present</div>
            <h3>UMak Link</h3>
            <p>Full-stack Developer</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Developed an online lost & found system for the University of
              Makati's (UMak) Occupational Health & Safety Office (OHSO).
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-date">October 2025 - Present</div>
            <h3>Dungeon Frontier</h3>
            <p>Systems Developer</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Created a 3D mobile roguelike game as a course project, featuring
              complete procedural level generation and application of innovative
              algorithmic principles.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-date">- Present</div>
            <h3>Acadenza</h3>
            <p>Product/Developer</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Currently planning a student productivity platform with timelines, study
              logs, and Pomodoro tracking.
            </p>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Beyond Code</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
          When I'm not coding, I enjoy exploring new technologies, reading about
          software architecture, and staying updated with the latest trends in
          computer science. I believe in continuous learning and always seek
          opportunities to improve my craft.
        </p>
      </div>
    </section>
  );
}