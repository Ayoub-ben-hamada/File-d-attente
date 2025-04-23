import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Contactez-Nous</h1>

      {submitted ? (
        <div
          style={{
            background: '#d4edda',
            padding: '1rem',
            textAlign: 'center',
            borderRadius: '5px',
            color: '#155724',
            marginTop: '2rem'
          }}
        >
          Merci pour votre message! Nous vous contacterons bientôt.
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            fetch('/', {
              method: 'POST',
              body: formData,
            })
              .then(() => setSubmitted(true))
              .catch((error) => alert(error));
          }}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div style={{ marginBottom: '1rem' }}>
            <label>Nom Complet</label>
            <input
              type="text"
              name="name"
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Message</label>
            <textarea
              name="message"
              rows={5}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          >
            Envoyer Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;