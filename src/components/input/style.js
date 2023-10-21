import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction:column;
gap:1rem;
`

export const Label = styled.label`
font-size:2rem;
color:${props => props.theme.secialTextOne};
font-weight:800;

`


export const InputField = styled.input`
padding:.5rem;
font-size:1.6rem;
outline:none;
border:none;
padding-left:1rem;

border:2px solid white;
&:focus{
    border:2px solid ${props => props.theme.specialTextTwo};
}

`