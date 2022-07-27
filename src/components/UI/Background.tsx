import React from "react";
import styled from "styled-components";

interface BackgroundProps {
  children: React.ReactNode;
  bg?: string;
}

export const Background: React.FC<BackgroundProps> = (props) => {
  return <Bg {...props}>{props.children}</Bg>;
};

const Bg = styled.div<BackgroundProps>`
  ${(props) => (props.bg ? `background: url(${props.bg})` : "background: #000")};
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  z-index: -99;
`;
