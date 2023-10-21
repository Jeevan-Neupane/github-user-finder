import styled from "styled-components";


export const EmptyDiv = styled.div`
height:100vh;
display: flex;
align-items:center;
justify-content:center;
background-color:${props => props.theme.components};
width:100%;
`

export const Message = styled.div`
font-size:5rem;
color:${props=>props.theme.specialTextTwo};
font-family:${props=>props.theme.font_family_two};
span{
    color:${props=>props.theme.secialTextOne};
    font-weight:800;

}
`