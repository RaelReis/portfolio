import styled from "styled-components";

import { Container } from "./UI/Container";
import { Logo } from "./UI/Logo";
import { SocialArea } from "./UI/SocialArea";

import footerBg from "../assets/img/footer-bg.png";

export const Footer = () => {
  return (
    <Container bgImage={footerBg}>
      <FooterBox>
        <Logo size="medium" />
        <SocialBox>
          <SocialArea />
          <CopyR>&#169; Copyright 2022. All Rights Reserved</CopyR>
        </SocialBox>
      </FooterBox>
    </Container>
  );
};

const FooterBox = styled.footer`
  padding-bottom: 40px;
  padding-top: 200px;

  display: flex;
  justify-content: space-between;
`;

const SocialBox = styled.div``;

const CopyR = styled.span`
  color: #b8b8b8;
  font-size: 14px;
  display: block;
  margin: 20px 0;
`;
