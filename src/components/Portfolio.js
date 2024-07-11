import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ScrollAnimation from "./ScrollAnimation";
import fancyITLogo from "../images/fancyItLogo.png"; // Asegúrate de reemplazar con la ruta correcta a tu imagen
import justDevineLogo from "../images/justDevineLogo.png"; // Asegúrate de reemplazar con la ruta correcta a tu imagen
import fisioteamLogo from "../images/fisioTeamLogo.png"; // Asegúrate de reemplazar con la ruta correcta a tu imagen

function Portfolio() {
  return (
    <Container className="portfolio-section">
      <Row className="justify-content-center">
        <Col md={8}>
          <ScrollAnimation>
            <h2>Portfolio</h2>
            <Row>
              <Col md={6} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={fancyITLogo} />
                  <Card.Body>
                    <Card.Title>Fancy IT Solutions</Card.Title>
                    <Card.Text>
                      Specialized in website creation, design, and branding.
                    </Card.Text>
                    <Card.Link
                      href="https://www.fancyitsolutions.com"
                      target="_blank"
                      className="custom-link"
                    >
                      Visit Website
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={justDevineLogo} />
                  <Card.Body>
                    <Card.Title>Just Devine Gelato</Card.Title>
                    <Card.Text>
                      A responsive website that showcases their history and
                      delicious gelato flavors.
                    </Card.Text>
                    <Card.Link
                      href="https://www.justdevinegelateria.com"
                      target="_blank"
                      className="custom-link"
                    >
                      Visit Website
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={fisioteamLogo} />
                  <Card.Body>
                    <Card.Title>FisioTeam</Card.Title>
                    <Card.Text>
                      A healthcare website with a connection to Square for
                      bookings.
                    </Card.Text>
                    <Card.Link
                      href="https://www.fisioteam.kesug.com/"
                      target="_blank"
                      className="custom-link"
                    >
                      Visit Website
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
