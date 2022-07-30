import React from "react";
import styled from "styled-components";

// import logo from "../../assets/img/logo.svg";
import logo from "../../assets/img/logo2.png";

interface LogoProps {
  size?: "small" | "big";
}

const size = {
  small: "50px",
  big: "120px",
};

export const Logo: React.FC<LogoProps> = (props) => {
  return <LogoBox src={logo} alt="Portfolio Logo" size={props.size} />;
};

const LogoBox = styled.img<LogoProps>`
  max-width: ${(props) => (props.size ? size[props.size] : size.small)};
  width: 100%;
`;
