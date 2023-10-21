import { Link } from "react-router-dom";
import styled from "styled-components";
import { laptop, mobile, tablet } from "../../style/responsiveness";
export const OuterrDiv = styled.div`
margin:5rem;
`
export const TopDiv = styled.div`
width:70%;
margin:0rem auto;
font-size:3rem;
margin-bottom:1rem;
color:${props => props.color};

${laptop({
    width:"100%"
})}
`
export const HierabelDiv = styled.div`
display: flex;
align-items:center;
gap:2rem;

`
export const DetailsDiv = styled.div`
display: flex;
background-color:${props => props.theme.components};
padding:3rem;
gap:4rem;
width:70%;
margin:0rem auto;

${laptop({
    flexDirection: "column",
    width: "100%"
})}

`
export const LeftDiv = styled.div`
width:50%;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:2rem;

${laptop({
    width: "100%"
})}


`

export const ImageDiv = styled.div`
height:15rem;
width:15rem;
border-radius:50%;

`
export const Img = styled.img`
width:100%;
border-radius:50%;
height:100%;
object-fit: cover;
object-position:center;
`

export const NameLocoDiv = styled.div`
display: flex;
color:${props => props.theme.text};
flex-direction:column;
align-items:center;
justify-content:center;
`

export const Name = styled.h2`
font-size:2rem;


`

export const LocoDiv = styled.p`
font-size:2rem;
`

export const RightDiv = styled.div`
display: flex;
flex-direction:column;
justify-content:center;

`

export const BioDiv = styled.div`
flex:1;
`

export const BioHeading = styled.h3`
font-size:3rem;
`

export const BioDesc = styled.p`
font-size:2rem;
`


export const PersonalDetails = styled.div`
flex:1;

span{
    color:${props => props.theme.specialTextTwo};
}

`

export const Company = styled.div`
font-size:2rem;
display: flex;
p{
margin-right:2rem;
}
span{
    flex:1;
}


`

export const Username = styled.p`
font-size:2rem;
display: flex;
p{
margin-right:2rem;
}
span{
    flex:1;
}

`

export const Website = styled.p`
font-size:2rem;
display: flex;
p{
margin-right:2rem;
}
span{
    flex:1;
}

`

export const NumsDetails = styled.div`
width:60%;
margin:5rem auto;
display: flex;
align-items:center;
justify-content:center;
background-color:${props => props.theme.components};
padding:1rem 2rem;
gap:3rem;
${tablet({
    width: "100%"
})}
`

export const NumDetail = styled.div`
display: flex;
align-items:center;
flex-direction:column;
justify-content:center;
font-size:1.6rem;
span{
    color:${props => props.theme.secialTextOne};
}

`

export const NumText = styled.p`
`

export const VistUserDiv = styled.div`
width:70%;
margin:0rem auto;
text-align:center;
background-color:${props => props.theme.components};
padding:5rem;
display: flex;
${tablet({
    width: "100%"
})}
${mobile({
    flexDirection: "column",
    gap: "3rem"
})}

align-items:center;
justify-content:center;


`

export const GitHubUrl = styled.a`
font-size:2rem;
border:1px solid ${props => props.theme.text};
color:${props => props.theme.text};
text-decoration:none;
padding:1rem 2rem;
margin-right:2rem;

${mobile({
    width: "100%"
})}

`

export const GitHubRepo = styled(Link)`
font-size:2rem;
border:1px solid ${props => props.theme.text};
color:${props => props.theme.text};
text-decoration:none;
padding:1rem 2rem;
${mobile({
    width: "100%"
})}
`