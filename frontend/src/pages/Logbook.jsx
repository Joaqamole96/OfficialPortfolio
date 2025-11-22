import React, { useEffect, useState } from "react";

// NOTE: Replace the FORM_ENDPOINT value with your Formspree endpoint (or other service)
const FORM_ENDPOINT = "<YOUR_FORMSPREE_ENDPOINT>";

export default function Logbook() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("logbook.entries") || "[]");
    setEntries(stored.reverse());
  }, []);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const entry = {
      name: form.name || "Anonymous",
      message: form.message,
      date: new Date().toISOString(),
    };
    // save locally
    const next = [entry, ...entries].slice(0, 200);
    localStorage.setItem("logbook.entries", JSON.stringify(next.reverse()));
    setEntries(next);
    setForm({ name: "", message: "" });

    // send to Formspree for delivery (optional)
    if (FORM_ENDPOINT && FORM_ENDPOINT.includes("formspree")) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry),
        });
      } catch (err) {
        console.warn("Formspree send failed", err);
      }
    }
  }

  return (
    <section className={"page-slide show"}>
      <h1>Logbook</h1>
      <p style={{ opacity: 0.8 }}>
        Leave a short note — your name/alias and message will appear below.
        Messages are stored locally and optionally sent to Formspree.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 8, maxWidth: 640 }}
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name or alias"
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.04)",
            background: "transparent",
            color: "var(--text)",
          }}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Share a short note"
          rows={4}
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.04)",
            background: "transparent",
            color: "var(--text)",
          }}
        />
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" type="submit">
            Log entry
          </button>
        </div>
      </form>

      <div style={{ marginTop: 18 }} className="logbook-list">
        {entries.length === 0 && (
          <p style={{ opacity: 0.7 }}>
            No entries yet. Be the first to sign the logbook.
          </p>
        )}
        {entries.map((e, i) => (
          <div key={i} className="entry">
            <div className="meta">
              {e.name} · {new Date(e.date).toLocaleString()}
            </div>
            <div style={{ marginTop: 6 }}>{e.message}</div>
          </div>
        ))}
      </div>
    </section>
  );
}