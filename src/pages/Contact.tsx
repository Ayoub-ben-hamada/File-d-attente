import React, { useState } from 'react';
import { Envelope, Telephone, GeoAlt, Send } from 'react-bootstrap-icons';
import styled from 'styled-components';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <ContactContainer>
      <ContactHeader>
        <h1>Contactez-Nous</h1>
      </ContactHeader>

      <ContactInfo>
        <InfoItem>
          <Envelope size={24} className="icon" />
          <div>
            <h5>Email</h5>
            <p>contact@smartqueue.tn</p>
          </div>
        </InfoItem>
        <InfoItem>
          <Telephone size={24} className="icon" />
          <div>
            <h5>Téléphone</h5>
            <p>+216 70 123 456</p>
          </div>
        </InfoItem>
        <InfoItem>
          <GeoAlt size={24} className="icon" />
          <div>
            <h5>Adresse</h5>
            <p>Tunis, Tunisia</p>
          </div>
        </InfoItem>
      </ContactInfo>

      {submitted ? (
        <SuccessMessage>
          Merci pour votre message! Nous vous contacterons bientôt.
        </SuccessMessage>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            fetch(form.action, {
              method: form.method,
              body: formData,
            })
              .then(() => setSubmitted(true))
              .catch((err) => console.error('Error submitting form:', err));
          }}
        >
          <input type="hidden" name="form-name" value="contact" />

          <FormGroup>
            <label htmlFor="name">Nom Complet</label>
            <input type="text" name="name" id="name" required />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={5} required></textarea>
          </FormGroup>

          <SubmitButton type="submit">
            <Send className="me-2" />
            Envoyer Message
          </SubmitButton>
        </form>
      )}
    </ContactContainer>
  );
};

export default Contact;

// Styled Components

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  width: 30%;

  .icon {
    color: #007bff;
    margin-right: 10px;
  }

  h5 {
    margin: 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
  }
`;

const SuccessMessage = styled.div`
  background-color: #28a745;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  input:focus,
  textarea:focus {
    border-color: #007bff;
    outline: none;
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
  }
`;
