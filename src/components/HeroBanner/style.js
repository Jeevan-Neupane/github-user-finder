import styled from "styled-components";
import { mobile } from "../../style/responsiveness";

export const MainDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

export const WelcomeText = styled.h3`
font-size:10rem;
font-family:${props => props.theme.font_family_two};
color:${props => props.theme.header_footer};
text-shadow: 5px -4px 7px ${props => props.theme.specialTextTwo};
${mobile({
    fontSize: "5rem"
})}
`

export const Desc = styled.p`
font-size:3rem;
letter-spacing:3px;
color:${props => props.theme.header_footer};
${mobile({
    fontSize: "2rem"
})}
text-align:center;
`
export const SearchDiv = styled.form`
margin-top:2rem;
display: flex;align-items:center;
justify-content:center;
width:60%;



`



export const SearchButton = styled.button`
width:20%;
padding:1rem;
border-radius: 0px 30px 30px 0px;
font-size:2rem;
cursor: pointer;
background-color:${props => props.theme.button};
outline:none;
 border:2px solid ${props => props.theme.button};
color:${props => props.theme.text};
&:focus{
    border:solid 2px ${props => props.theme.specialTextTwo};
}
${mobile({
    width: "30%"
})}
`

