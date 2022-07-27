import React from "react";
import styled from "styled-components";

interface BackgroundProps {
  children: React.ReactNode;
  bg?: string;
}

export const Background = (props: BackgroundProps) => {
  return <Bg {...props}>{props.children}</Bg>;
};

const Bg = styled.div<BackgroundProps>`
  ${(props) => (props.bg ? `background: url(${props.bg})` : "background: #000")};
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;
