import { Link, useLocation } from "react-router";
import { useState } from "react";

export default function Nav() {
  const loc = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/about", label: "About" },
    { to: "/logbook", label: "Logbook" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="brand">
        <div className="logo">Joaquin</div>
        <div style={{ color: "rgba(230,238,246,0.6)", fontSize: "0.9rem" }}>
          Meticulous · CS
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links desktop-nav">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={loc.pathname === link.to ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" onClick={closeMenu}>
          <div
            className="mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={loc.pathname === link.to ? "active" : ""}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
