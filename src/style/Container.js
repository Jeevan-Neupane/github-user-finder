import styled from "styled-components";
import search from "../asset/background.jpg"
import { tablet } from "./responsiveness";
export const WrapperContainer = styled.div`
max-width:1440px;
width:100%;
padding:0rem 2rem;
margin:0 auto;

`



export const Div = styled.div`
`

export const Main = styled(WrapperContainer)`
padding-top:60px;



`
export const UsersMain = styled(WrapperContainer)`
padding-top:60px;
display: flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
gap:2rem;


`

export const HomeDiv = styled.div`
background-image:url(${search});
height:700px;
background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position:center;
display: flex;
align-items:center;
justify-content:center;

`

export const SinglePageMainDiv = styled(Main)`

min-height:100vh;
`

export const SignUpFormMainDiv = styled(Main)`
min-height:900px;
display: flex;
align-items:center;
justify-content:center;
`
export const LoginFormMainDiv = styled(Main)`
min-height:900px;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:3rem;
`
export const WarningDiv=styled.div`
p{
  font-size:4rem;
  color:red;
  text-align:center;

  ${tablet({
    fontSize:"3rem"
  })}
  
}

`

export const ErrorMessageDiv=styled.h3`
font-size:3rem;
color:red;
width:100vw;
height:100vh;
display: flex;
align-items:center;
justify-content:center;
`

export const ReposContainer=styled(Main)`
display: flex;
flex-wrap:wrap;
gap:2rem;
align-items:center;
justify-content:center;
margin-bottom:2rem;
`