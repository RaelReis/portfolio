import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
  bg?: string;
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

  return <SectionContainer {...props}>{children}</SectionContainer>;
};

const SectionContainer = styled.div<ContainerProps>`
  max-width: 1400px;
  width: 100%;

  margin: 0 auto;

  ${(props) => (props.bg ? `background: url(${props.bg})` : "")};
  ${(props) => (props.flex ? "display: flex" : "")};
  ${(props) => (props["flex-d-column"] ? "flex-direction: column" : "")};
  ${(props) => (props["p-top"] ? `padding-top: ${props["p-top"]}px ` : "")};
  ${(props) => (props["p-bottom"] ? `padding-bottom: ${props["p-bottom"]}px ` : "")};

  ${(props) => (props["f-1"] ? "flex: 1" : "")};
  ${(props) => (props["align-center"] ? "align-items: center" : "")};
  ${(props) => (props["justify-center"] ? "justify-content: center" : "")};

  @media (max-width: 1500px) {
    max-width: 1200px;
  }
  @media (max-width: 1250px) {
    max-width: 1000px;
  }
  @media (max-width: 1050px) {
    max-width: 800px;
  }
`;
