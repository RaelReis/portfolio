import styled from "styled-components";
import { Background } from "./UI/Background";
import { Container } from "./UI/Container";

export const Projects = () => {
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
