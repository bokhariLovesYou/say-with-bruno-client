import React, { Component } from "react";
import styled from "styled-components";

const CardWrapper = styled.article``;

const Card = styled.div`
  margin-bottom: 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;

const PostContent = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;
  @media (min-width: 576px) {
    padding: 1.5rem;
  }
`;

const PostHeader = styled.div``;

const PostDescription = styled.div``;

const HeadingTwo = styled.h2`
  font-size: 1.35rem;
  line-height: 1.45;
`;

const Paragraph = styled.p`
  margin-bottom: 0;
`;

const PostImageWrapper = styled.div`
  margin: 1rem 0;
  @media (min-width: 992px) {
    margin: 0;
  }
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    border-radius: 5px;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Picture = styled.picture``;

const ContentImage = styled.img`
  width: 100%;
  height: 180px;
  @media (min-width: 768px) {
    height: 240px;
  }
  @media (min-width: 992px) {
    height: 130px;
  }
  object-fit: cover;
  border-radius: 5px;
`;

const ContentFlex = styled.div`
  @media (min-width: 992px) {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
  }
`;

const Column = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    max-width: ${props => (props.Extended ? "65%" : "35%")};
    padding: ${props => (props.Extended ? "0 1rem 0 0" : "0 0 0 1rem")};
  }
`;

const CardFooter = styled.div`
  padding: 10px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  border-radius: 0 0 5px 5px;
`;

const CardFooterFlex = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

const CardFooterColumn = styled.div``;

const AuthorContents = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImageWrapper = styled.div``;

const RoundedImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 0.5rem;
  object-fit: cover;
`;

const AuthorName = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #000;
  margin-right: 0.5rem;
  margin-bottom: 0;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const PostTags = styled.div``;

const Tag = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  background: #2196f3;
  margin-right: 8px;
  border-radius: 3px;
  margin-bottom: 0;
  padding: 3px 4px;
  line-height: 1;
  display: block;
`;

const LikeCount = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  opacity: 0.75;
  margin-right: 15px;
`;

const CommentMetaWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CommentIcon = styled.div`
  padding-right: 0.35rem;
`;

const Figure = styled.figure`
  margin: 0;
  svg {
    width: 20px;
    height: auto;
  }
`;

const CommentCount = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  opacity: 0.75;
`;

export class CardContents extends Component {
  render() {
    return (
      <CardWrapper>
        <Card>
          <PostContent>
            <ContentFlex>
              <Column Extended>
                <PostHeader>
                  <HeadingTwo>{this.props.title}</HeadingTwo>
                </PostHeader>
                <PostDescription>
                  <Paragraph>{this.props.description}</Paragraph>
                </PostDescription>
              </Column>
              <Column Smaller>
                <PostImageWrapper>
                  <Picture>
                    <ContentImage src={this.props.coverImage} alt="" />
                  </Picture>
                </PostImageWrapper>
              </Column>
            </ContentFlex>
          </PostContent>
          <CardFooter>
            <CardFooterFlex>
              <CardFooterColumn>
                <AuthorContents>
                  <AuthorDetails>
                    <AuthorImageWrapper>
                      <Picture>
                        <RoundedImage
                          src={this.props.userImage}
                          alt={this.props.author}
                        />
                      </Picture>
                    </AuthorImageWrapper>
                  </AuthorDetails>
                  <AuthorDetails>
                    <AuthorName>{this.props.author}</AuthorName>
                    <PostTags>
                      <Tag>Design</Tag>
                    </PostTags>
                    <LikeCount>{this.props.likeCount} Likes</LikeCount>
                  </AuthorDetails>
                </AuthorContents>
              </CardFooterColumn>
              <CardFooterColumn>
                <CommentMetaWrapper>
                  <CommentIcon>
                    <Figure>
                      <svg viewBox="0 0 512 512">
                        <path d="M128 216c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176s224 79 224 176-100.5 176-224 176z"></path>
                      </svg>
                    </Figure>
                  </CommentIcon>
                  <CommentCount>{this.props.commentCount}</CommentCount>
                </CommentMetaWrapper>
              </CardFooterColumn>
            </CardFooterFlex>
          </CardFooter>
        </Card>
      </CardWrapper>
    );
  }
}

export default CardContents;
