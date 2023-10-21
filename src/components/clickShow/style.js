import styled from "styled-components";


export const OuterWrapper = styled.div`
display: flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
gap:2rem;
`

export const NumberDiv = styled.div`
display: flex;
gap:2rem;
font-size:2rem;
margin:2rem 0rem;
cursor: pointer;

`

export const LeftArrow = styled.div`
border:1px solid ${props => props.theme.text};
padding:1rem;
display: flex;
align-items:center;
justify-content:center;
`

export const RightArrow = styled.div`
border:1px solid ${props => props.theme.text};
padding:1rem;
display: flex;
align-items:center;
justify-content:center;

`

export const Numbers = styled.div`
display: flex;
gap:2rem;
`
export const Number = styled.p`
border:1px solid ${props => props.theme.text};
padding:1rem;

color:${props => props.numStyle === "do" ? props.theme.specialTextTwo : null};

`