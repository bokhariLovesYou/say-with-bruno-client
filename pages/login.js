import React, { Component } from "react";
import Layout from "../components/layout";
import LoginForm from "../components/LoginForm";
import { Container, Row, Col } from "react-bootstrap";
import { Section, ContentBox, Heading, SubTitle } from "../components/Elements";
import styled from "styled-components";

const ContentWrapper = styled.div`
  min-height: 100vh;
`;

export class Login extends Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <Section>
            <Container>
              <ContentBox EquipWidth>
                <ContentBox className="mb-4 text-sm-center">
                  <Heading Blue>Log in to your network</Heading>
                  <SubTitle>
                    Share your knowledge and learn from the best!
                  </SubTitle>
                </ContentBox>
                <LoginForm />
              </ContentBox>
            </Container>
          </Section>
        </ContentWrapper>
      </Layout>
    );
  }
}

export default Login;
