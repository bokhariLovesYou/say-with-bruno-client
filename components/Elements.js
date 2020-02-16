import React, { Component } from "react";
import styled from "styled-components";

export const Section = styled.section`
  padding: 3.5rem 0;
`;

export const ContentBox = styled.div`
  max-width: ${props => (props.EquipWidth ? "450px" : "")};
  margin-left: ${props => (props.EquipWidth ? "auto" : "")};
  margin-right: ${props => (props.EquipWidth ? "auto" : "")};
`;

export const Heading = styled.h1`
  margin-bottom: 1rem;
  color: ${props => (props.Blue ? "#0070f3;" : "")};
`;

export const SubTitle = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  font-weight: 500;
`;

export const PrimaryButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 0.657rem 2rem;
  border-radius: 5px;
  font-weight: 700;
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

export const FormWrapper = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background-color: hsla(0, 0%, 0%, 0.05);
  border-radius: 10px;
  @media (min-width: 576px) {
    padding: 2.5rem 2rem;
  }
  box-shadow: rgba(55, 53, 47, 0.09) 0px 1px 0px;
`;

export const Form = styled.form`
  .form-button {
    margin-top: 0.5rem;
    width: 100%;
  }
`;

export const Field = styled.div`
  margin-bottom: 1rem;
  margin-bottom: ${props => (props.noBottomMargin ? "0" : "")};
  @media (min-width: 576px) {
    width: ${props => (props.FlexChild ? "48%" : "100%")};
    margin-bottom: ${props => (props.FlexChild ? "0" : "1rem")};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  outline: none;
  background-color: #fff;
  border: none;
  font-weight: 600;
`;

export const FlexJustified = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export const Span = styled.span`
  font-weight: 600;
  color: ${props => (props.Blue ? "#0070f3" : "")};
  cursor: ${props => (props.Blue ? "pointer" : "")};
  display: ${props => (props.Block ? "block" : "")};
  &:hover {
    color: ${props => (props.BlueOnHover ? "#0070f3" : "")};
    cursor: ${props => (props.BlueOnHover ? "pointer" : "")};
    text-decoration: ${props => (props.Blue ? "underline" : "")};
  }
`;

export const FlexField = styled.div`
  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`;

export class Elements extends Component {
  render() {
    return <div></div>;
  }
}

export default Elements;
