import styled from "styled-components";
import { WrapperContainer } from "../../style/Container";

export const SearchBarComponets = styled.div`

display: flex;
align-items:center;
justify-content:center;
font-size:2rem;
cursor: pointer;
color:${props => props.theme.secialTextOne};
`

export const SearchBarDiv = styled(WrapperContainer)`
position:absolute;
top:60px;
left:50%;
transform:translateX(-41.5%);
background-color:${props => props.theme.text};
display: flex;
align-items:center;
background-color:${props => props.theme.header_footer};
padding:1rem;

.icon{
    color:${props => props.theme.text};
    font-size:2rem;
    cursor: pointer;
    width:20%;

}


`

export const SearchFieldDiv = styled.form`
display: flex;
align-items:center;
justify-content:center;
width:80%;
input{
    border-radius:0;
    color:${props => props.theme.body};
    padding: 0.5rem;
    width:80%;
    font-size:2rem;
    
}
justify-content:center;
`
export const SearchFieldButton = styled.button`
font-size:2rem;
padding:.5rem;
outline:none;
background-color:${props => props.theme.button};
color:${props => props.theme.text};
border-color:${props => props.theme.button};
cursor: pointer;


&:focus{
    border-color:${props => props.theme.secialTextOne};

}
`

