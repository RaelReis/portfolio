import { useEffect, useRef, MouseEvent, useState } from "react";
import styled from "styled-components";

import { Container } from "./UI/Container";

import colorSharp from "../assets/img/color-sharp.png";

import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

interface CarouselItemProps {}

interface CarouselButtonProps {
  img: string;
}

export const Skills = () => {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [carouselLimit, setCarouselLimit] = useState(0);

  useEffect(() => {
    if (carousel.current) setCarouselLimit(carousel.current.offsetWidth);
  }, []);

  const handleLeftButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (carousel.current) {
      console.log(carousel.current.offsetWidth);
      carousel.current.scrollLeft -= carousel.current.offsetWidth / 3;
    }
  };

  const handleRightButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth / 3;

      const currentScroll = carousel.current.scrollLeft;
      const scrollWidth = carousel.current.offsetWidth;

      if (currentScroll >= scrollWidth) {
        carousel.current.scrollLeft = 0;
      }
    }
  };

  return (
    <Container>
      <SkillSection>
        <Title>Skills</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text.
        </Description>
        <Carousel>
          <LeftButton img={arrow1} onClick={handleLeftButton} />
          <CarouselConainer ref={carousel}>
            <CarouselItem>
              <ItemImage src={meter1} />
              <ItemTitle>Web Development</ItemTitle>
            </CarouselItem>
            <CarouselItem>
              <ItemImage src={meter2} />
              <ItemTitle>Web Development</ItemTitle>
            </CarouselItem>
            <CarouselItem>
              <ItemImage src={meter3} />
              <ItemTitle>Web Development</ItemTitle>
            </CarouselItem>
            <CarouselItem>
              <ItemImage src={meter1} />
              <ItemTitle>Web Development</ItemTitle>
            </CarouselItem>
            <CarouselItem>
              <ItemImage src={meter1} />
              <ItemTitle>Web Development</ItemTitle>
            </CarouselItem>
            <CarouselItem>
              <ItemImage src={meter1} />
              <ItemTitle>Web Development</ItemTitle>
            </CarouselItem>
            <CarouselItem>
              <ItemImage src={meter1} />
              <ItemTitle>Web Development</ItemTitle>
            </CarouselItem>
          </CarouselConainer>
          <RightButton img={arrow2} onClick={handleRightButton} />
        </Carousel>
      </SkillSection>
      <Background src={colorSharp} />
    </Container>
  );
};

const SkillSection = styled.section`
  background: #151515;
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;
  margin-bottom: 50px;

  padding: 60px;
`;

const Title = styled.h2`
  font-size: 45px;
`;

const Description = styled.p`
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin-top: 15px;
  margin-bottom: 75px;
`;

const CarouselConainer = styled.div`
  overflow-x: hidden;
  scroll-behavior: smooth;
  margin: 0 auto;

  flex: 1;
  display: flex;
  align-items: center;
`;

const Carousel = styled.div`
  max-width: 690px;

  margin: 0 auto;

  position: relative;
`;

const CarouselItem = styled.div<CarouselItemProps>`
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemTitle = styled.h5`
  font-size: 20px;
`;

const ItemImage = styled.img`
  width: 150px;
`;

const LeftButton = styled.button<CarouselButtonProps>`
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);

  text-align: center;
  height: 50px;
  width: 50px;
  background: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  border: none;
  cursor: pointer;
  margin: 0 10px;
  z-index: 99;
`;
const RightButton = styled.button<CarouselButtonProps>`
  position: absolute;
  right: -50px;
  bottom: 50%;
  transform: translateY(50%);

  text-align: center;
  height: 50px;
  width: 50px;
  background: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  border: none;
  cursor: pointer;
  margin: 0 10px;
  z-index: 99;
`;

const Background = styled.img`
  position: absolute;

  width: 30%;
  left: 0;
  top: 30%;
  transform: translateY(50%);

  z-index: -1;
`;
