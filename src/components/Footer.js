import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={4} className="mb-4">
            <h5>HealthKure Diagnostics</h5>
            <p>Reliable diagnostics with state-of-the-art technology. Serving you with care and precision.</p>
            <p><strong>Address:</strong><br />DNO 1-56-22/1, LIG-218, Beside Apollo Pharmacy ,Venkojipalem Rd, Sector 2,MVP Colony, Visakhapatnam, Andhra Pradesh 530017</p>
            <p><strong>Phone:</strong>+91 9705111133</p>
            <p><strong>Email:</strong> contact@healthkuredignostics.in</p>
          </Col>

          {/* Contact Us Form */}
          <Col md={8}>
            <h5>Contact Us</h5>
            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Your Message" />
              </Form.Group>
              <Button variant="primary" type="submit">Send Message</Button>
            </Form>
          </Col>
        </Row>
        <hr className="mt-4" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Healthkure Diagnostics. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
