import { useState } from "react";
import { links } from "../data/profile.js";
import "./Contact.css";

export default function Contact({ standalone = false }) {
  const [result, setResult] = useState("");
  const [formState, setFormState] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "e38326ef-a49d-4332-aa62-ac86ea81298e");
    setFormState("loading");
    setResult("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Your message could not be sent. Please try again.");
      }

      setResult("Success!");
      setFormState("success");
      form.reset();
    } catch (error) {
      setResult(error.message || "Error");
      setFormState("error");
    }
  };

  return (
    <section
      className={`contact section-wrap section-block${standalone ? " contact-page" : ""}`}
      id="contact"
    >
      <div className="contact-heading">
        <div className="section-label">
          <span>05</span> GET IN TOUCH
        </div>
        <h2>
          Have a good one
          <br />
          <span>in mind?</span>
        </h2>
        <p>
          I’d love to hear what you’re working on. Drop me a note and let’s
          start a conversation.
        </p>
        <div className="contact-details">
          <a href="mailto:priyanshukashyap844@gmail.com">
            priyanshukashyap844@gmail.com <span>↗</span>
          </a>
          <a href="tel:+918851021358">
            +91 88510 21358 <span>↗</span>
          </a>
        </div>
        <div className="social-row">
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <label>
            Your name
            <input
              name="name"
              autoComplete="name"
              required
              maxLength="100"
              placeholder="Jane Smith"
            />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength="254"
              placeholder="jane@example.com"
            />
          </label>
        </div>
        <label>
          Subject
          <input
            name="subject"
            required
            maxLength="150"
            placeholder="What would you like to talk about?"
          />
        </label>
        <label>
          Your message
          <textarea
            name="message"
            required
            minLength="10"
            maxLength="5000"
            rows="4"
            placeholder="Tell me a little about it…"
          />
        </label>
        <label className="honeypot" aria-hidden="true">
          Leave this field empty
          <input name="website" tabIndex="-1" autoComplete="off" />
        </label>
        <div className="form-footer">
          <button
            className="button button-primary"
            type="submit"
            disabled={formState === "loading"}
          >
            {formState === "loading" ? "Sending…" : "Send message"}{" "}
            <span>↗</span>
          </button>
          <p role="status" aria-live="polite">
            {formState === "success" && "Thanks — your message was sent successfully."}
            {formState === "error" && result}
          </p>
        </div>
      </form>
    </section>
  );
}
