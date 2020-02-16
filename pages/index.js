import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/layout";
import PostsWrapper from "../components/PostsWrapper";

import { Container, Row, Col } from "react-bootstrap";

import {
  Section,
  ContentBox,
  Heading,
  SubTitle,
  PrimaryButton
} from "../components/Elements";

export class Home extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <Container>
            <Row>
              <Col lg={4}>
                <ContentBox>
                  <Heading>Dev and Design Discussions</Heading>
                  <SubTitle>
                    Participate in the discussions and build your dev/design
                    profile on SayWithBruno. You can also ask questions
                    anonymously, if you are too shy.
                  </SubTitle>
                  <Link href="/login">
                    <PrimaryButton>Ask A Question</PrimaryButton>
                  </Link>
                </ContentBox>
              </Col>
              <Col lg={8} className="pt-5 pt-lg-0">
                <ContentBox>
                  <PostsWrapper />
                </ContentBox>
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    );
  }
}

// Home.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);
//   return {
//     postsData: data
//   };
// };

export default Home;
