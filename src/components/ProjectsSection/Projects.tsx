import { useState } from "react";
import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";
import { Background } from "../UI/Background";
import { Container } from "../UI/Container";

import project3 from "../../assets/img/project-img3.png";
import { ProjectData } from "./types";

const numbData = {
  tab1: [
    {
      img: project3,
      title: "BDO Diary",
      description: "Teeeestando",
    },
    {
      img: project3,
      title: "BDO Diary",
      description: "Teeeestando",
    },
    {
      img: project3,
      title: "BDO Diary",
      description: "Teeeestando",
    },
    {
      img: project3,
      title: "BDO Diary",
      description: "Teeeestando",
    },
    {
      img: project3,
      title: "BDO Diary",
      description: "Teeeestando",
    },
    {
      img: project3,
      title: "BDO Diary",
      description: "Teeeestando",
    },
  ],
  tab2: [],
  tab3: [],
};

interface NavItemProps {
  activeItem?: boolean;
}

export const Projects = () => {
  const [selectedList, setSelectedList] = useState<ProjectData[]>(numbData.tab1);

  const handleSelectTab = (list: ProjectData[]) => {
    setSelectedList(list);
  };

  return (
    <Background>
      <Container flex flex-d-column p-bottom={80} p-top={80}>
        <TextArea>
          <Title>Projects</Title>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Description>
        </TextArea>
        <ProjectsNavBar>
          <NavItem activeItem={selectedList === numbData.tab1} onClick={() => handleSelectTab(numbData.tab1)}>
            Tab 1
          </NavItem>
          <NavItem activeItem={selectedList === numbData.tab2} onClick={() => handleSelectTab(numbData.tab2)}>
            Tab 2
          </NavItem>
          <NavItem activeItem={selectedList === numbData.tab3} onClick={() => handleSelectTab(numbData.tab3)}>
            Tab 3
          </NavItem>
        </ProjectsNavBar>
        <ProjectList>
          {selectedList.length > 0 ? selectedList.map((data) => <ProjectCard data={data} />) : <span>alho</span>}
        </ProjectList>
      </Container>
    </Background>
  );
};

const TextArea = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px auto 30px auto;
  text-align: center;
  width: 56%;
`;

const ProjectsNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 40px;

  border-radius: 50px;
`;

const NavItem = styled.div<NavItemProps>`
  position: relative;
  padding: 20px 70px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 2px solid rgb(255, 255, 255, 0.5);
  margin: 15px;
  transition: all 0.4s ease;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;

  ${(props) => (props.activeItem ? "box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5)" : "")};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0px;

    height: 110%;
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    transition: all 0.4s ease;
    z-index: -1;

    ${(props) => (props.activeItem ? "width: 110%;" : "")};
  }
`;

const ProjectList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
