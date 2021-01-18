import React from "react";
// import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap";
import NavTab from "./NavTab";
import "./NavigationBar.css";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">LINE TODAY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#login">
                Masuk
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <NavTab />
      </>
    );
  }
}
