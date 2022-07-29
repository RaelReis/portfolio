import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Container } from "./UI/Container";

import bannerBg from "../assets/img/banner-bg.png";
import bannerImg from "../assets/img/header-img.svg";

const BANNER_TEXT = "Web Developer";
const PERIOD = 2000;

interface SpanProps {
  dataPeriod: string;
}

export const Banner = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let fullText = BANNER_TEXT;
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PERIOD);
      return;
    }

    if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(500);
    }
  };

  return (
    <Container id="home" flex p-top={260} p-bottom={100} bgImage={bannerBg}>
      <TextBox>
        <TagLine>Welcome to my Portfolio</TagLine>
        <H1>
          Hi! I'm Kelon <Text dataPeriod="1000">{text}</Text>
        </H1>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </Description>
      </TextBox>
      <ImgBox>
        <BannerImg src={bannerImg} alt="Header image" />
      </ImgBox>
    </Container>
  );
};

const upDown = keyframes`
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
`;

const zoomIn = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const TextBox = styled.div`
  flex: 1.3;
  padding-right: 20px;
`;

const TagLine = styled.div`
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
`;

const H1 = styled.h1`
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
`;

const Text = styled.span<SpanProps>`
  font-size: 65px;
  font-weight: 700;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    text-align: center;
    width: 5px;
    height: 80px;
    margin: 0 2px;
    background-color: #696969;
  }
`;

const Description = styled.span`
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
`;

const ImgBox = styled.div`
  flex: 1;
`;

const BannerImg = styled.img`
  width: 500px;
  animation: ${upDown} 3s linear infinite, ${zoomIn} 1.4s ease-out;
`;
