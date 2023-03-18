import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Github, Instagram } from "react-bootstrap-icons";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <>
        <Container className="footerWrapper">
          <footer>
            <Container>
              <a href="/">
                <Github size={24} />
              </a>
              <a href="/">
                <Instagram size={24} />
              </a>
            </Container>
          </footer>
        </Container>
      </>
    );
  }
}

export default Footer;
