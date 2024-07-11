import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="navbar-custom" expanded={expanded}>
      <Navbar.Brand as={Link} to="/" className="ml-5">
        <img
          src={logo}
          alt="Antonella Domenez"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto custom-nav">
          <Nav.Link as={Link} to="/" className="nav-link-custom" onClick={handleClose}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about-me" className="nav-link-custom" onClick={handleClose}>
            About Me
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio" className="nav-link-custom" onClick={handleClose}>
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link-custom" onClick={handleClose}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
