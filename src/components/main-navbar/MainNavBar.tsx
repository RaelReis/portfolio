import { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

interface NavBarProps {
  scrolled: boolean;
}

function MainNavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        console.log('vapo')
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () =>  window.removeEventListener("scroll", onScroll);
  }, []);

  const handleActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <NavBar scrolled={scrolled}>
      <Container>
        <NavBarBrand>
          <Brand src={logo} alt="Logo" />
        </NavBarBrand>
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>Skills</NavItem>
          <NavItem>Projects</NavItem>
        </Nav>
        <SocialBox>
          <SocialLink>
            <SocialImg src={navIcon1} alt="" />
          </SocialLink>
          <SocialLink>
            <SocialImg src={navIcon2} alt="" />
          </SocialLink>
          <SocialLink>
            <SocialImg src={navIcon3} alt="" />
          </SocialLink>
        </SocialBox>
      </Container>
    </NavBar>
  );
}

export default MainNavBar;

const NavBar = styled.div<NavBarProps>`
  padding: ${(props) => (props.scrolled ? "0px 0" : "")};
  background-color: ${(props) => (props.scrolled ? "#121212" : "")};
  height: 100px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 99;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 300px;
`;

const NavBarBrand = styled.div``;

const Brand = styled.img`
  width: 80%;
`;

const Nav = styled.nav`
  margin-right: auto;
`;

const NavItem = styled.span`
  font-size: 18px;
  padding: 0 20px;
  margin: 0 10px;
  opacity: 0.7;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const SocialBox = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  margin: 0 5px;
  width: 50px;
  height: 50px;

  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(217, 217, 217, 0.1);

  text-decoration: none;
  color: inherit;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(110%);
  }
`;

const SocialImg = styled.img``;
