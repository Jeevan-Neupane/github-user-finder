import { Link } from "react-router-dom";
import styled from "styled-components";
import { WrapperContainer } from "../../style/Container";
import { mobile } from "../../style/responsiveness";

export const FooterDiv = styled.footer`
background-color:${props => props.theme.header_footer}
`
export const FooterWrapper = styled(WrapperContainer)`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:2rem;

`

export const LinkDiv = styled.div`

margin-bottom:2rem;


`
export const Links = styled(Link)`
color:${props => props.theme.text};
text-decoration:none;
font-size:2rem;
margin-left:3rem;
&:hover{
    color:${props => props.theme.hover};
}
${mobile({
    fontSize:"1rem"
})}
`
export const ContentDiv = styled.p`
font-size:1.6rem;
text-align:center;
width:60%;
margin:auto;
margin-bottom:2rem;
`



export const IconDiv = styled.div`
display: flex;
gap:2rem;
font-size:3rem;



`

export const Icon = styled.div`
background-color:#04152d;
padding:1rem;
border-radius:50%;
display: flex;
align-items:center;
justify-content:center;
&:hover{
    box-shadow:0 0 5px 5px ${props => props.theme.hover};
}
cursor: pointer;


`