import React, { Component } from "react";
import Layout from "../components/layout";
import SignupForm from "../components/SignupForm";
import { Container, Row, Col } from "react-bootstrap";
import { Section, ContentBox, Heading, SubTitle } from "../components/Elements";
import styled from "styled-components";

const ContentWrapper = styled.div`
  min-height: 100vh;
`;

export class Signup extends Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <Section>
            <Container>
              <ContentBox EquipWidth>
                <ContentBox className="mb-4 text-sm-center">
                  <Heading Blue>Create an account</Heading>
                  <SubTitle>
                    Share your knowledge and learn from the best!
                  </SubTitle>
                </ContentBox>
                <SignupForm />
              </ContentBox>
            </Container>
          </Section>
        </ContentWrapper>
      </Layout>
    );
  }
}

export default Signup;
