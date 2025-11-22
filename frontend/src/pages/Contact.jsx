import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("This demo sends via Formspree when configured.");
    setForm({ name: "", email: "", message: "" });
  }
  return (
    <section className={"page-slide show"}>
      <h1>Contact</h1>
      <p style={{ opacity: 0.8 }}>
        Use this form to send a direct message — configure Formspree endpoint
        for delivery.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 8, maxWidth: 640 }}
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.04)",
            background: "transparent",
            color: "var(--text)",
          }}
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
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
          placeholder="Message"
          rows={6}
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
            Send
          </button>
        </div>
      </form>
    </section>
  );
}