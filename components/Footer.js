import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
const FooterContents = styled.footer`
  width: 100%;
  padding: 0.5rem 0;
  p {
    margin-bottom: 0;
    color: rgb(197, 197, 197);
  }
`;

export class Footer extends Component {
  render() {
    return (
      <FooterContents>
        <Container className="text-center">
          <p>© 2020 bokharilovesyou.</p>
        </Container>
      </FooterContents>
    );
  }
}

export default Footer;
