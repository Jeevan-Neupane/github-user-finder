import React from "react";
import {
  ContentDiv,
  FooterDiv,
  FooterWrapper,
  Icon,
  IconDiv,
  LinkDiv,
  Links,
} from "./style";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
function Footer() {
  const footerLinks = [
    "Terms of Use",
    "Privacy Policy",
    "About",
    "Blog",
    "FAQ",
  ];
  return (
    <FooterDiv>
      <FooterWrapper>
        <LinkDiv>
          {footerLinks.map((link) => {
            return <Links key={link}>{link}</Links>;
          })}
        </LinkDiv>
        <ContentDiv>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
          eum. Iure natus rerum perspiciatis cumque est architecto unde
          molestias corporis labore, officiis magnam blanditiis impedit
          perferendis, repellat ab quod! Sunt totam nisi deleniti consequatur
          maxime ipsam, qui hic excepturi beatae inventore architecto ad
          accusantium voluptates eius explicabo quia ut nam!
        </ContentDiv>
        <IconDiv>
          <Icon>
            <BsFacebook />
          </Icon>
          <Icon>
            <AiFillTwitterCircle />
          </Icon>
          <Icon>
            <AiOutlineInstagram />
          </Icon>
          <Icon>
            <AiFillLinkedin />
          </Icon>
        </IconDiv>
      </FooterWrapper>
    </FooterDiv>
  );
}

export default Footer;
