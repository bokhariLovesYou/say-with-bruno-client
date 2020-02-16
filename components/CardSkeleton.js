import React, { Component } from "react";
import styled from "styled-components";
const SkeletonWrap = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 15px;
  overflow: hidden;
  background: #fff;
`;
const SkeletonCard = styled.div`
  padding: 1rem;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem;
  }
`;

const SkeletonContent = styled.div`
  @media (min-width: 992px) {
    width: 100%;
  }
`;

const SkeletonTitle = styled.div`
  height: 28px;
  width: 100%;
  animation: colorchange 1.5s infinite;
  -webkit-animation: colorchange 1.5s infinite;
  margin-bottom: 14px;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const SkeletonPara = styled.div`
  height: 15px;
  width: ${props => (props.Extended ? "80%" : "50%")};
  animation: colorchange 1.5s infinite;
  -webkit-animation: colorchange 1.5s infinite;
  margin-bottom: 5px;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const SkeletonCover = styled.div`
  width: 100%;
  height: 131.5px;
  border-radius: 5px;
  margin-right: 20px;
  animation: colorchange 1.5s infinite;
  -webkit-animation: colorchange 1.5s infinite;
  margin-bottom: 1rem;
  @media (min-width: 992px) {
    width: 400px;
    margin: 0 0 2rem 2.5rem;
  }
`;

const SkeletonFooter = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkeletonAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const SkeletonActions = styled.div`
    display: flex;
    align-items; center;
`;

const SkeletonFace = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  animation: colorchange 1.5s infinite;
  -webkit-animation: colorchange 1.5s infinite;
  margin-right: 10px;
`;

const SkeletonName = styled.div`
  width: 100px;
  height: 18px;
  border-radius: 4px;
  animation: colorchange 1.5s infinite;
  -webkit-animation: colorchange 1.5s infinite;
`;

const SkeletonMeta = styled.div`
  width: 100px;
  height: 18px;
  border-radius: 4px;
  animation: colorchange 1.5s infinite;
  -webkit-animation: colorchange 1.5s infinite;
  margin-left: 20px;
`;

const SkeletonDropDown = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  animation: colorchange 1.5s infinite;
  -webkit-animation: colorchange 1.5s infinite;
  margin-left: 20px;
`;

export class CardSkeleton extends Component {
  render() {
    return (
      <SkeletonWrap>
        <SkeletonCard>
          <SkeletonContent>
            <SkeletonTitle />
            <SkeletonPara Extended />
            <SkeletonPara />
            <SkeletonPara />
          </SkeletonContent>
          <SkeletonCover />
        </SkeletonCard>
        <SkeletonFooter>
          <SkeletonAuthor>
            <SkeletonFace />
            <SkeletonName />
          </SkeletonAuthor>
          <SkeletonActions>
            <SkeletonMeta />
            <SkeletonDropDown />
          </SkeletonActions>
        </SkeletonFooter>
      </SkeletonWrap>
    );
  }
}

export default CardSkeleton;
