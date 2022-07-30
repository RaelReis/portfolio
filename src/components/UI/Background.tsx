import React from "react";
import styled from "styled-components";

interface BackgroundProps {
  children: React.ReactNode;
  bgImage?: string;
  bgColor?: string;
}

export const Background: React.FC<BackgroundProps> = (props) => {
  return <Bg {...props}>{props.children}</Bg>;
};

const Bg = styled.div<BackgroundProps>`
  width: 100%;
  ${(props) => (props.bgImage ? `background: url(${props.bgImage})` : "")}
  ${(props) => (props.bgColor ? `background: ${props.bgColor}` : "")};
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;