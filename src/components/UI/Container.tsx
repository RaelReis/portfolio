import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../assets/style/breakpoints";
import { Background } from "./Background";

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  bgColor?: string;
  bgImage?: string;
  full?: boolean;
  flex?: boolean;
  ["flex-d-column"]?: boolean;
  ["f-1"]?: boolean;
  ["align-center"]?: boolean;
  ["justify-center"]?: boolean;
  ["p-top"]?: number;
  ["p-bottom"]?: number;
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { children } = props;

  return (
    <Background bgImage={props.bgImage} bgColor={props.bgColor}>
      <SectionContainer {...props}>{children}</SectionContainer>
    </Background>
  );
};

const SectionContainer = styled.div<ContainerProps>`
  width: min(100%, 1400px);
  margin-inline: auto;

  ${(props) => (props.flex ? "display: flex" : "")};
  ${(props) => (props["flex-d-column"] ? "flex-direction: column" : "")};
  ${(props) => (props["p-top"] ? `padding-top: ${props["p-top"]}px ` : "")};
  ${(props) => (props["p-bottom"] ? `padding-bottom: ${props["p-bottom"]}px ` : "")};

  ${(props) => (props["f-1"] ? "flex: 1" : "")};
  ${(props) => (props["align-center"] ? "align-items: center" : "")};
  ${(props) => (props["justify-center"] ? "justify-content: center" : "")};

  @media (${BREAKPOINTS.large}) {
    max-width: 1200px;
  }
  @media (${BREAKPOINTS.big}) {
    max-width: 1000px;
  }
  @media (${BREAKPOINTS.medium}) {
    max-width: 800px;
  }
`;
