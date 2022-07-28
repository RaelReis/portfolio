import React from "react";
import styled from "styled-components";

import logo from "../../assets/img/logo.svg";

interface LogoProps {
  size?: "small" | "medium" | "big";
}

const size = {
  small: "110px",
  medium: "160px",
  big: "200px",
};

export const Logo: React.FC<LogoProps> = (props) => {
  return <LogoBox src={logo} alt="Portfolio Logo" size={props.size} />;
};

const LogoBox = styled.img<LogoProps>`
  max-width: ${(props) => (props.size ? size[props.size] : size.small)};
  width: 100%;
`;
