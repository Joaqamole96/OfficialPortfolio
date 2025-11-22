import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
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
      <h1>Contact</h1>
      <p style={{ opacity: 0.8 }}>
        Use this form to send me a direct message. I'll get back to you as soon
        as possible.
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 8, maxWidth: 640 }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
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
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          required
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
            {loading ? "Sending..." : "Send"}
          </button>
          {submitted && (
            <span style={{ color: "var(--accent)", fontSize: "0.9rem" }}>
              ✓ Message sent successfully!
            </span>
          )}
        </div>
      </form>
    </section>
  );
}