import { Link, useLocation } from "react-router";

export default function Nav() {
    const loc = useLocation();
    return (
        <nav className="nav">
        <div className="brand">
            <div className="logo">Joaquin</div>
            <div style={{ color: "rgba(230,238,246,0.6)", fontSize: "0.9rem" }}>
            Meticulous · CS
            </div>
        </div>

        <div className="nav-links">
            <Link to="/" className={loc.pathname === "/" ? "active" : ""}>
            Home
            </Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/about">About</Link>
            <Link to="/logbook">Logbook</Link>
            <Link to="/contact">Contact</Link>
        </div>
        </nav>
    );
}