import React, { Component } from "react";
import Link from "next/link";
import {
  FormWrapper,
  FlexJustified,
  Span,
  Form,
  Field,
  Input,
  PrimaryButton,
  ContentBox,
  FlexField,
  FlexChild
} from "./Elements";

export class SignupForm extends Component {
  render() {
    return (
      <>
        <FormWrapper>
          <FlexJustified>
            <Span>Register your account</Span>
          </FlexJustified>
          <Form>
            <FlexField>
              <Field FlexChild>
                <Input type="text" name="first-name" placeholder="First Name" />
              </Field>
              <Field FlexChild>
                <Input type="text" name="last-name" placeholder="Last Name" />
              </Field>
            </FlexField>
            <Field>
              <Input type="text" name="user-handle" placeholder="User Handle" />
            </Field>
            <Field>
              <Input type="text" name="email" placeholder="Email Address" />
            </Field>
            <Field>
              <Input type="password" name="password" placeholder="Password" />
            </Field>
            <Field>
              <Input
                type="password"
                name="confirm-password"
                placeholder="Confirm Password"
              />
            </Field>
            <Field noBottomMargin>
              <PrimaryButton className="form-button">Sign up now</PrimaryButton>
            </Field>
          </Form>
        </FormWrapper>
        <ContentBox className="text-center pt-3">
          <Span Block>Already have an account?</Span>
          <Link href="/login">
            <Span Blue>Log in now</Span>
          </Link>
        </ContentBox>
      </>
    );
  }
}

export default SignupForm;
