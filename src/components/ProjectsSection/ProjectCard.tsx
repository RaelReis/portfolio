import React from "react";
import styled, { keyframes } from "styled-components";
import { ProjectData } from "./types";

interface ProjectCardProps {
  data: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { data } = props;

  return (
    <Card>
      <CardImage src={data.img} alt="Imagem do logo" />
      <CardTextArea>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardTextArea>
    </Card>
  );
};

const Card = styled.div`
  max-width: 435px;
  
  position: relative;
  border-radius: 50px;
  margin: 15px;

  cursor: pointer;

  @media (max-width: 1500px) {
    max-width: 365px;
  }
  @media (max-width: 1250px) {
    max-width: 460px;
  }

  @media (max-width: 1050px) {
    max-width: 365px;
  }
`;

const CardImage = styled.img`
  width: 100%;

`;

const CardTitle = styled.h4`
  font-size: 30px;

  opacity: 0;
  transform: translateY(-50px);
  transition: all 0.6s ease;
`;

const CardDescription = styled.span`
  opacity: 0;
  transform: translateY(-50px);
  transition: all 0.6s ease;
`;

const CardTextArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    width: 100%;
    height: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;

    transition: all 0.4s ease-out;
  }

  &:hover::before {
    height: 100%;
  }

  &:hover {
    opacity: 1;
  }

  &:hover ${CardTitle}, &:hover ${CardDescription} {
    transform: translateY(0);
    opacity: 1;
  }
`;
