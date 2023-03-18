import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Github, Instagram } from "react-bootstrap-icons";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <>
        <Container className="footerWrapper fixed-bottom">
          <footer>
            <Container>
              <a href="https://github.com/Kydens" target="_blank">
                <Github size={24} />
              </a>
              <a href="https://instagram.com/ednath.s" target="_blank">
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
