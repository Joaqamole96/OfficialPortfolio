import { useEffect, useRef } from "react";

export default function SkillCircle({ logo, name, level }) {
  const ref = useRef();
  useEffect(() => {
    const circle = ref.current;
    if (!circle) return;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    const offset = circumference - (level / 100) * circumference;
    setTimeout(() => {
      circle.style.transition = "stroke-dashoffset 900ms ease-out";
      circle.style.strokeDashoffset = offset;
    }, 120);
  }, [level]);

  return (
    <div className="skill">
      <svg width="96" height="96" viewBox="0 0 120 120">
        <defs></defs>
        <g transform="translate(60,60)">
          <circle
            r="44"
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="12"
          ></circle>
          <circle
            ref={ref}
            r="44"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="12"
            strokeLinecap="round"
            transform="rotate(-90)"
          />
          <foreignObject x="-28" y="-18" width="56" height="56">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
              }}
            >
              <img src={logo} alt="logo" style={{ width: 34, height: 34 }} />
            </div>
          </foreignObject>
        </g>
      </svg>
      <div className="label">{name}</div>
    </div>
  );
}
