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
  LoadingDiv,
  ErrorMessage,
 
} from "./style";
import Input from "../input/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginImage from "../../asset/login.svg";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";
import { login, removeSearchError } from "../../store/store";
import Loader from "../loader/Loader";

function LoginForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();

  const { email, password } = formState.errors;
  const onSubmit = async (data) => {
    try {
      setLoginLoading(true);
      const user = await authService.login(data);
      if (user) {
        dispatch(login(user));
        dispatch(removeSearchError());
        navigate("/");
      }
      setLoginLoading(false);
    } catch (error) {
      setLoginLoading(false);
      setErrorMessage(error.message);
    }
  };

  if (loginLoading) {
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
          <Image src={loginImage} />
        </ImageDiv>
        <TextDiv>
          <Text>Login To Enable More Functionality</Text>
        </TextDiv>
      </LeftDiv>

      <RightDiv>
        <Heading>Login In </Heading>
        <Form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputWrapper>
            <Input
              label='Email'
              placeholder='Enter Your Email'
              {...register("email", {
                required: {
                  value: true,
                  message: "Required",
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
              })}
              type='password'
            />

            {password?.message && (
              <ErrorMessage>*{password?.message}</ErrorMessage>
            )}
          </InputWrapper>
          <SignUpButton>Login</SignUpButton>
          {errorMessage && <ErrorMessage>*{errorMessage}</ErrorMessage>}
        </Form>

        <LoginDiv>
          <LoginText>Don't Have Account?</LoginText>
          <LoginLink to='/signup'>Sign Up</LoginLink>
        </LoginDiv>
      </RightDiv>
    </OuterDiv>
  );
}

export default LoginForm;
