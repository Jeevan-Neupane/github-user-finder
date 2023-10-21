import styled from "styled-components";

const LogoutBtn = styled.button`
color:${props => props.theme.text};
font-size:1.6rem;
background-color:${props => props.theme.button};
outline:none;
border:none;
padding:1rem 2rem;
cursor: pointer;
border-radius:1rem;
&:active{
    scale: 0.95;
}
`
export const LogoutLoadingDiv = styled.div`
position:absolute;
left:0;
width:100%;
height:100%;
background-color:blue;
display: flex;
align-items:center;
justify-content:center;
top:0;

`

export { LogoutBtn }