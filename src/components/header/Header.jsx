import {
  DesktopNav,
  Link,
  Logo,
  LogoText,
  MenuIconsDiv,
  MenuLoginUserDiv,
  MobileNav,
  Nav,
  NavItem,
  NavItems,
  NavWrapper,
} from "./style";
import { useSelector } from "react-redux";
import Logout from "../logoutButton/Logout";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Search from "../search/Search";
import { useLocation } from "react-router-dom";
import UserBox from "../userbox/UserBox";
function Header() {
  const [scroll, setscroll] = useState(0);
  const [show, setShow] = useState(true);
  const [menuShow, setMenuShow] = useState(false);
  const { pathname } = useLocation();

  const onMenuClick = () => {
    setMenuShow((prev) => {
      return !prev;
    });
  };

  const location = useLocation();

  useEffect(() => {
    setMenuShow(false);
  }, [location.pathname]);

  useEffect(() => {
    setMenuShow(false);
    const handleScroll = () => {
      let presentScroll = window.scrollY;
      if (scroll > 0) {
        setShow(false);
      }
      if (presentScroll - scroll < 0) {
        setShow(true);
      }

      setscroll(presentScroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const { user } = useSelector((state) => state.auth);
  const name = user?.name || user?.providerUid;

  const navData = [
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "Users",
      url: "/users",
      active: true,
    },
    {
      title: "Login",
      url: "/login",
      active: !user,
    },
    {
      title: "Sign Up",
      url: "/signup",
      active: !user,
    },
  ];

  const linkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid white" : "",
      borderColor: isActive ? "#00d4bd" : "",
      color: isActive ? "#00d4bd" : "",
    };
  };

  return (
    <Nav show={show}>
      <NavWrapper>
        <Logo>
          <LogoText>
            Github <span>Finder</span>
          </LogoText>
        </Logo>
        {menuShow && (
          <MobileNav>
            <NavItems>
              {navData.map((item) => {
                return (
                  item.active && (
                    <NavItem key={item.title}>
                      <Link
                        to={item.url}
                        style={linkStyle}
                      >
                        {item.title}
                      </Link>
                    </NavItem>
                  )
                );
              })}
            </NavItems>
          </MobileNav>
        )}

        <DesktopNav>
          <NavItems>
            {navData.map((item) => {
              return (
                item.active && (
                  <NavItem key={item.title}>
                    <Link
                      to={item.url}
                      style={linkStyle}
                    >
                      {item.title}
                    </Link>
                  </NavItem>
                )
              );
            })}
          </NavItems>
        </DesktopNav>
        <MenuLoginUserDiv>
          {user && <UserBox name={name} />}
          {pathname !== "/" && <Search />}
          {user && <Logout />}
          <MenuIconsDiv onClick={onMenuClick}>
            {menuShow ? <AiOutlineClose /> : <AiOutlineMenu />}
          </MenuIconsDiv>
        </MenuLoginUserDiv>
      </NavWrapper>
    </Nav>
  );
}

export default Header;
