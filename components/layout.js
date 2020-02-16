import React, { Component } from "react";
import GlobalHead from "./GlobalHead";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.main`
  padding-top: 77px;
`;

export class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <GlobalHead />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </>
    );
  }
}

export default Layout;
