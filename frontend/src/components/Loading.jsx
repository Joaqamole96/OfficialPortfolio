export default function Loading({ text = "Loading..." }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem",
        gap: "1rem",
      }}
    >
      <div
        className="loading-spinner"
        style={{
          width: "40px",
          height: "40px",
          border: "3px solid rgba(0, 169, 224, 0.1)",
          borderTop: "3px solid var(--accent)",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <p style={{ opacity: 0.6, fontSize: "0.9rem" }}>{text}</p>
    </div>
  );
}
