import React, { Component } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Link from "next/link";

const HeaderContents = styled.header`
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
`;

const HeaderWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div``;

const LogoWrapper = styled.div``;

const Logo = styled.div`
  position: relative;
  background-color: #0070f3;
  width: 45px;
  height: 45px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 900;
`;

const ButtonsWrap = styled.div``;

const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 0.657rem 2rem;
  border-radius: 5px;
  font-weight: 900;
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
  &:hover {
    background: rgba(0, 118, 255, 0.9);
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export class Header extends Component {
  render() {
    return (
      <HeaderContents>
        <Container>
          <HeaderWrapper>
            <Column>
              <LogoWrapper>
                <Link href="/">
                  <Logo>
                    <Span>!</Span>
                  </Logo>
                </Link>
              </LogoWrapper>
            </Column>
            <Column>
              <ButtonsWrap>
                <Link href="/login">
                  <Button>Log in</Button>
                </Link>
              </ButtonsWrap>
            </Column>
          </HeaderWrapper>
        </Container>
      </HeaderContents>
    );
  }
}

export default Header;
