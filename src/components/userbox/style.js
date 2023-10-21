import styled from "styled-components";

export const UserBoxDiv = styled.div`

display: flex;
align-items:center;
justify-content:center;
gap:1rem;

`
export const LeftDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
`
export const UserImage = styled.div`
height:4rem;
width:4rem;


`

export const Image = styled.img`
width:100%;
height:100%;
`


export const RighDiv = styled.div`
display: flex;
justify-content:center;
flex-direction:column;

`

export const NameDiv = styled.p`
font-size:1.6rem;
color:${props=>props.theme.specialTextTwo};
`

export const Status = styled.p`
place-items:start;
font-weight:500;
letter-spacing:3px;
color:${props=>props.theme.secialTextOne};
`