import styled from "styled-components";
import { computer, laptop } from "../../style/responsiveness";

export const OuterDiv = styled.div`
display: flex;
width:60rem;
height:40rem;
background-color:${props => props.theme.components};
padding:2rem;
gap:2rem;
margin-top:2rem;
flex-direction:column;
${computer({
    width:"80%"
})}

`
export const LeftDiv = styled.div`
flex:1;

`

export const RepoName = styled.h2`
font-size:2.5rem;
color:${props => props.theme.specialTextTwo};
font-family:${props => props.theme.font_family_two};
span{
    color:${props => props.theme.secialTextOne};
    
}
`

export const RepoDesc = styled.p`
margin-top:.5rem;
font-size:1.6rem;
text-align:justify;

`

export const WatcherNumber = styled.p`
margin-top:1rem;
font-size:1.6rem;

span{
    color:${props => props.theme.secialTextOne};
}
`

export const GithubLink = styled.a`
display:block;
font-size:1.6rem;
margin-top:2rem;
background-color:${props => props.theme.button};
color:${props => props.theme.text};
text-align:center;
padding:1rem 2rem;
cursor: pointer;
text-decoration:none;

`



export const RightDiv = styled.div`
flex:1;
display: flex;
flex-direction:column;
padding-left:3rem;


`

export const LanguageHeading = styled.div`
font-size:2rem;
span{
    color:${props=>props.theme.secialTextOne};
    font-weight:800;
}
margin-top:1rem;

`
export const DateDiv = styled.div`
margin-top:2rem;
span{
    color:${props => props.theme.secialTextOne};
}
font-size:1.6rem;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;


`

export const CreatedAt = styled.p`
display: flex;
gap:2rem;

`
export const UpdatedAt = styled.p`
display: flex;
gap:2rem;


`
export const PushedAt = styled.p`
display: flex;
gap:2rem;

`

export const RepoLanguage=styled.span`
font-size:1.6rem;
color:${props=>props.theme.specialTextTwo};
font-weight:800;

`


