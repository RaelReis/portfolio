import { useEffect, useState } from "react";
import styled from "styled-components";

import { Container } from "./UI/Container";
import { Logo } from "./UI/Logo";
import { SocialArea } from "./UI/SocialArea";

interface NavBarProps {
  scrolled: boolean;
}

export const MainNavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        console.log("vapo");
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <NavBar scrolled={scrolled}>
      <Container flex align-center justify-center>
        <NavBarBrand>
          <Logo />
        </NavBarBrand>
        <Nav>
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Nav>
        <SocialArea />
      </Container>
    </NavBar>
  );
};

const NavBar = styled.div<NavBarProps>`
  padding: ${(props) => (props.scrolled ? "0px 0" : "")};
  background-color: ${(props) => (props.scrolled ? "#121212" : "")};

  height: ${(props) => (props.scrolled ? "70px" : "100px")};
  width: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 99;

  transition: all 0.3s ease;
`;

const NavBarBrand = styled.div``;

const Nav = styled.nav`
  margin-left: auto;
  margin-right: 50px;
`;

const NavItem = styled.a`
  color: inherit;
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
