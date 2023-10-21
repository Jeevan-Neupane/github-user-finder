import { createGlobalStyle } from "styled-components";
import { laptop, mobile, tablet } from "./responsiveness";


const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

html{
    font-size:62.5%;
    ${laptop({
    fontSize: "58%"
})}
    ${tablet({
    fontSize: "55%"
})}
    ${mobile({
    fontSize: "45%"
})}
}
body{
    font-family:${props => props.theme.font_family_one},sans-serif;
    background:${props => props.theme.background_color};
    background:${props => props.theme.background_gradient};
    color:${props => props.theme.text};

    
    
overflow-x:hidden;
}

`

export default GlobalStyle;