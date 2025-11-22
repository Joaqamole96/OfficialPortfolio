import { useState } from "react";

export default function Logbook() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name || "Anonymous");
    formData.append("message", form.message);
    formData.append("date", new Date().toLocaleString());

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
      setForm({ name: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="page-slide show">
      <h1>Logbook</h1>
      <p style={{ opacity: 0.8 }}>
        Leave a short note — your name/alias and message will be sent to me.
        Thanks for visiting!
      </p>

      <form
        name="logbook"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 8, maxWidth: 640 }}
      >
        <input type="hidden" name="form-name" value="logbook" />
        <input type="hidden" name="bot-field" />

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
          required
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.04)",
            background: "transparent",
            color: "var(--text)",
          }}
        />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Log entry"}
          </button>
          {submitted && (
            <span style={{ color: "var(--accent)", fontSize: "0.9rem" }}>
              ✓ Sent! Thanks for your message.
            </span>
          )}
        </div>
      </form>

      <div style={{ marginTop: 24, opacity: 0.6, fontSize: "0.9rem" }}>
        <p>
          💡 Tip: Your message goes directly to me. I read every entry and may
          feature memorable ones on this page in the future!
        </p>
      </div>
    </section>
  );
}