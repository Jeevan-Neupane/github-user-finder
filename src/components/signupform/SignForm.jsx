import React, { useState } from "react";
import {
  Form,
  Heading,
  ImageDiv,
  InputWrapper,
  LeftDiv,
  LoginDiv,
  LoginLink,
  LoginText,
  OuterDiv,
  RightDiv,
  SignUpButton,
  Image,
  Text,
  TextDiv,
  ErrorMessage,
  LoadingDiv,
} from "./style";
import singup from "../../asset/signup.svg";
import Input from "../input/Input";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/store";
import Loader from "../loader/Loader";



function SignForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm();

  const { username, email, password } = formState.errors;
  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }

    return true;
  };
  const onSubmit = async (data) => {
    try {
      setSignUpLoading(true);
      const user = await authService.createAccount(data);
      if (user) {
        dispatch(login(user));
        navigate("/");
      }
      setSignUpLoading(false);
    } catch (error) {
      setSignUpLoading(false);
      setErrorMessage(error.message);
    }
  };

  if (signUpLoading) {
    return (
      <OuterDiv>
        <LoadingDiv>
          <Loader />
        </LoadingDiv>
      </OuterDiv>
    );
  }
  return (
    <OuterDiv>
      <LeftDiv>
        <ImageDiv>
          <Image src={singup} />
        </ImageDiv>
        <TextDiv>
          <Text>Please Sign Up To Connect Us</Text>
        </TextDiv>
      </LeftDiv>

      <RightDiv>
        <Heading>Sign Up Now</Heading>
        <Form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputWrapper>
            <Input
              label='Username'
              placeholder='Enter Your Full Name'
              {...register("username", {
                required: {
                  value: true,
                  message: "Required",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Username contains a-z and A-Z only",
                },
              })}
            />
            {username?.message && (
              <ErrorMessage>*{username?.message}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              label='Email'
              placeholder='Enter Your Email'
              {...register("email", {
                required: {
                  value: true,
                  message: "Required",
                },
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid One",
                },
              })}
              type='email'
            />

            {email?.message && <ErrorMessage>*{email?.message}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <Input
              label='Password'
              placeholder='Enter Your Password'
              {...register("password", {
                required: {
                  value: true,
                  message: "Required",
                },
                validate: validatePassword,
                pattern: {
                  value: /[@#!%^&*()]/,
                  message: "Must contain special symbol",
                },
              })}
              type='password'
            />

            {password?.message && (
              <ErrorMessage>*{password?.message}</ErrorMessage>
            )}
          </InputWrapper>

          <SignUpButton>Sign Up</SignUpButton>
          {errorMessage && <ErrorMessage>*{errorMessage}</ErrorMessage>}
        </Form>

        <LoginDiv>
          <LoginText>Already Have an Account? </LoginText>
          <LoginLink to='/login'>Login</LoginLink>
        </LoginDiv>
      </RightDiv>
    </OuterDiv>
  );
}

export default SignForm;
