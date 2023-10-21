import styled from "styled-components";

export const Input = styled.input`
outline:none;
 
padding:1rem;
width:80%;
border-radius: 30px 0 0 30px;
font-size:2rem;
padding-left:2rem;
border:none;
border:2px solid white;
&:focus{
    border:solid 2px ${props => props.theme.specialTextTwo};
}
`

export const Form=styled.form`

`