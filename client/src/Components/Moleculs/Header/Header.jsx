import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { GearFill } from "react-bootstrap-icons";

import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <>
        <Container className="navbarWrapper">
          <Navbar>
            <Container>
              <Navbar.Brand href="/">TodoList</Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <a href="/setting">
                    <GearFill size={20} />
                  </a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Header;
