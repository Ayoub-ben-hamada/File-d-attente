import React, { useState } from 'react';
import { Container, Row, Col, Button, Alert, Card, Form as BootstrapForm } from 'react-bootstrap';
import { Envelope, Telephone, GeoAlt, Send } from 'react-bootstrap-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Ce champ est requis'),
  email: Yup.string().email('Email invalide').required('Ce champ est requis'),
  message: Yup.string().required('Ce champ est requis').min(20, 'Minimum 20 caractères')
});

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="text-center mb-5">Contactez-Nous</h1>

          <Row className="g-4 mb-5">
            <Col md={4}>
              <div className="d-flex align-items-center mb-3">
                <Envelope size={24} className="text-primary me-3" />
                <div>
                  <h5>Email</h5>
                  <p className="mb-0">contact@smartqueue.tn</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex align-items-center mb-3">
                <Telephone size={24} className="text-primary me-3" />
                <div>
                  <h5>Téléphone</h5>
                  <p className="mb-0">+216 70 123 456</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex align-items-center mb-3">
                <GeoAlt size={24} className="text-primary me-3" />
                <div>
                  <h5>Adresse</h5>
                  <p className="mb-0">Tunis, Tunisia</p>
                </div>
              </div>
            </Col>
          </Row>

          {submitted ? (
            <Alert variant="success" className="text-center">
              Merci pour votre message! Nous vous contacterons bientôt.
            </Alert>
          ) : (
            <Card className="shadow-sm">
              <Card.Body>
                <Formik
                  initialValues={{ name: '', email: '', message: '' }}
                  validationSchema={ContactSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    // Netlify handles this form submission
                    setSubmitting(true);
                    setSubmitted(true);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                  }) => (
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      onSubmit={handleSubmit}
                    >
                      {/* Hidden input to tell Netlify which form is being submitted */}
                      <input type="hidden" name="form-name" value="contact" />

                      <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Nom Complet</BootstrapForm.Label>
                        <BootstrapForm.Control
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          isInvalid={touched.name && !!errors.name}
                        />
                        <BootstrapForm.Control.Feedback type="invalid">
                          {errors.name}
                        </BootstrapForm.Control.Feedback>
                      </BootstrapForm.Group>

                      <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Email</BootstrapForm.Label>
                        <BootstrapForm.Control
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          isInvalid={touched.email && !!errors.email}
                        />
                        <BootstrapForm.Control.Feedback type="invalid">
                          {errors.email}
                        </BootstrapForm.Control.Feedback>
                      </BootstrapForm.Group>

                      <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Message</BootstrapForm.Label>
                        <BootstrapForm.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          isInvalid={touched.message && !!errors.message}
                        />
                        <BootstrapForm.Control.Feedback type="invalid">
                          {errors.message}
                        </BootstrapForm.Control.Feedback>
                      </BootstrapForm.Group>

                      <div className="d-grid">
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          <Send className="me-2" />
                          {isSubmitting ? 'Envoi en cours...' : 'Envoyer Message'}
                        </Button>
                      </div>
                    </form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
