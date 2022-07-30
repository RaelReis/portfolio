import styled from "styled-components";

import { Container } from "./UI/Container";
import footerBg from "../assets/img/footer-bg.png";

export const Footer = () => {
  return (
    <Container bgImage={footerBg}>
      <FooterBox>
        <SocialBox>
          <FooterText>Made by <StrongText>Rafael Reis</StrongText></FooterText>
        </SocialBox>
      </FooterBox>
    </Container>
  );
};

const FooterBox = styled.footer`
  padding-bottom: 70px;
  padding-top: 160px;

  display: flex;
  justify-content: space-between;
`;

const SocialBox = styled.div`
  margin: auto;
`;

const FooterText = styled.div`
  color: #b8b8b8;
  font-size: 20px;
  margin-top: 20px;
`;

const StrongText = styled.strong`
  color: #4A2FBD;
`
