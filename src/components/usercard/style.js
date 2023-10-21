import { Link } from "react-router-dom";
import styled from "styled-components";

export const OuterDiv = styled.div`
width:30rem;
height:30rem;
margin-top:2rem;
border:2px solid white;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:2rem;
background-color:${props => props.theme.components};
border-radius:2rem;
transition:all .2s ease-in-out;

&:hover{
    box-shadow:0 0 2px 2px #eee;
}

`
export const ImageDiv = styled.div`
width:10rem;
height:10rem;
border-radius:50%;


`
export const InfoDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;

flex-direction:column;
gap:1rem;
border-top:1px solid ${props => props.theme.text};

`
export const Image = styled.img`
width:100%;
height:100%;
border-radius:50%;
border:2px solid ${props => props.theme.specialTextTwo}

`
export const Name = styled.h3`
font-size:2rem;
font-family:${props => props.theme.font_family_two};
padding-top:1rem;

`

export const MoreButton = styled(Link)`
font-size:2rem;
padding:.5rem 3rem;
cursor: pointer;
border:none;
outline:none;
background-color:${props => props.theme.button};
color:${props => props.theme.text};
text-decoration:none;

`