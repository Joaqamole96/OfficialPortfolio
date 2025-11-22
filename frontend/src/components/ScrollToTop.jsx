import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "var(--accent)",
            color: "#002133",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            boxShadow: "0 4px 12px rgba(0, 169, 224, 0.4)",
            transition: "all 0.3s ease",
            zIndex: 50,
            animation: "fadeIn 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-5px)";
            e.target.style.boxShadow = "0 6px 20px rgba(0, 169, 224, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 12px rgba(0, 169, 224, 0.4)";
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}