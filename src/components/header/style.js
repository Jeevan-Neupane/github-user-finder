import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { WrapperContainer } from "../../style/Container";
import { laptop, mobile } from "../../style/responsiveness";


const Nav = styled.nav`
background-color:${props => props.theme.header_footer};
padding:1rem 0;
position:fixed;
top:0;
left:0;
right:0;
height:60px;
transform:translateY(${props =>{
   if(props.show){
    return "0px"
   }else{
    return "-60px"
   }
}});
display: flex;
align-items:center;
justify-content:center;
transition:transform .5s ease-in-out;

`
const NavWrapper = styled(WrapperContainer)`
display: flex;
align-items:center;
justify-content:space-between;


`
const Logo = styled.div`
display: flex;
align-items:center;
justify-content:center;

`

const LogoText = styled.h1`
font-size:3.5rem;
font-family:${props => props.theme.font_family_two};
span{
    color:${props => props.theme.specialTextTwo};
}

${mobile({
    fontSize:"2rem"
})}

`

const NavItems = styled.ul`
display: flex;
gap:7rem;
transition:display .2s ease-in-out;
${laptop({
 position: "absolute",
  top: "100%",
  flexDirection: "column",
  left: "0",
  right: "0",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  backgroundColor:"black"
})}





`

const NavItem = styled.li`
font-size:2rem;
list-style:none;
`

const Link = styled(NavLink)`
text-decoration:none;
color:${props => props.theme.text};

`



//*Small Screen

const MenuIconsDiv = styled.div`

font-size:3rem;
cursor: pointer;
display:none;

${laptop({
    display: "block;"
})}
`

const MenuLoginUserDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
gap:2rem;
`
const MobileNav = styled.div`
display:none;
${laptop({
    display: "block"
})}
`

const DesktopNav = styled.div`
${laptop({
    display: "none"
})}

`

export {
    Nav, Link, Logo, LogoText, NavItem, NavItems, NavWrapper, MenuIconsDiv, MenuLoginUserDiv, MobileNav, DesktopNav
}
