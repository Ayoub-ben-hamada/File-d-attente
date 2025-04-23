import React from "react";


function Contact() {
  return (
    <div className="Contact" style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        {/* Required for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows={6}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
