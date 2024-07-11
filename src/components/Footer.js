import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row>
          <Col>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about-me" className="text-white">About Me</a></li>
              <li><a href="/portfolio" className="text-white">Portfolio</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col>
            <h5>Contact Info</h5>
            <p>Email: antonella@example.com</p>
          </Col>
          <Col>
            <h5>Follow Me</h5>
            <ul>
              <li><a href="https://www.linkedin.com" className="text-white">LinkedIn</a></li>
              <li><a href="https://github.com" className="text-white">GitHub</a></li>
              <li><a href="mailto:antonella@example.com" className="text-white">Email</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
