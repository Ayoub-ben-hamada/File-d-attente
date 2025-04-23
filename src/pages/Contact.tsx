import React from "react";

const Contact: React.FC = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Contactez-Nous</h1>

      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <div style={{ marginBottom: "1rem" }}>
          <label>Nom Complet</label>
          <input
            type="text"
            name="name"
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.25rem",
              display: "block",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.25rem",
              display: "block",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Message</label>
          <textarea
            name="message"
            rows={5}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.25rem",
              display: "block",
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        >
          Envoyer Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
