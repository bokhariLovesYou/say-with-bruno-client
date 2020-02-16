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
  ContentBox
} from "./Elements";

export class LoginForm extends Component {
  render() {
    return (
      <>
        <FormWrapper>
          <FlexJustified>
            <Span>Sign in</Span>
            <Span BlueOnHover>Forgot your password?</Span>
          </FlexJustified>
          <Form>
            <Field>
              <Input type="text" name="email" placeholder="Email Address" />
            </Field>
            <Field>
              <Input type="password" name="password" placeholder="Password" />
            </Field>
            <Field noBottomMargin>
              <PrimaryButton className="form-button">Sign in</PrimaryButton>
            </Field>
          </Form>
        </FormWrapper>
        <ContentBox className="text-center pt-3">
          <Span Block>Don't have an account?</Span>
          <Link href="/signup">
            <Span Blue>Sign up for free</Span>
          </Link>
        </ContentBox>
      </>
    );
  }
}

export default LoginForm;
