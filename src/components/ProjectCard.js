import React from "react";
import { Card, Col } from "react-bootstrap";

function ProjectCard({ title, text, link, image }) {
  return (
    <Col md={6} className="mb-4">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Card.Link href={link} target="_blank" className="custom-link">
            Visit Website
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
