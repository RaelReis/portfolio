import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Container } from "./UI/Container";
import { Input } from "./UI/Input";

import rocket from "../assets/img/rocket.png";
import rocket2 from "../assets/img/rocket2.png";

const backgroundColor = "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)";

const CONTACT_INITIAL = {
  name: "",
  email: "",
  number: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(CONTACT_INITIAL);

  const handleInput = (inputText: string, inputName: string) => {
    setContact((prevContact) => {
      return { ...prevContact, [inputName]: inputText };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container bgColor={backgroundColor}>
      <ContactContainer>
        <ContactBox>
          <ContactImageBox>
            <ContactImage src={rocket2} alt="Contact Image" />
          </ContactImageBox>
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Get In Touch</FormTitle>
            <Input
              id="name"
              value={contact.name}
              placeholder="Name"
              type="text"
              onChange={(text) => handleInput(text.target.value, "name")}
            />
            <Input
              id="email"
              value={contact.email}
              placeholder="Email Adress"
              type="email"
              onChange={(text) => handleInput(text.target.value, "email")}
            />
            <Input
              id="number"
              value={contact.number}
              placeholder="Phone No."
              type="text"
              onChange={(text) => handleInput(text.target.value, "number")}
            />
            <TextArea
              id="text-area"
              value={contact.message}
              placeholder="Message"
              onChange={(text) => handleInput(text.target.value, "message")}
            />
            <FormButton>
              <ButtonSpan type="submit">Send</ButtonSpan>
            </FormButton>
          </ContactForm>
        </ContactBox>
      </ContactContainer>
    </Container>
  );
};

const rainbow = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const ContactContainer = styled.div`
  position: relative;

  height: 70vh;
`;

const ContactBox = styled.div`
  position: absolute;
  bottom: -100px;

  height: 100%;
  width: 100%;

  background-color: #151515f4;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 30px #000;
  border-radius: 50px;
  padding: 45px 80px;

  display: flex;
`;

const ContactImageBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactImage = styled.img``;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h3`
  font-size: 45px;
  margin-bottom: 30px;
`;

const TextArea = styled.textarea`
  font-family: inherit;
  height: 50px;
  margin: 15px 0;

  padding: 15px 20px;

  border: 2px solid transparent;
  border-radius: 10px;

  transition: all 0.4s ease;

  &:focus {
    border: 2px solid #fff;
  }
`;

const FormButton = styled.button`
  position: relative;
  font-family: inherit;
  margin-top: 20px;
  max-width: 300px;
  padding: 30px 0;
  cursor: pointer;

  transition: all 0.3s ease;

  &:active {
    filter: brightness(0.8);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      #aa367c,
      #81187c,
      #6b148d,
      #8400ff,
      #4a2fbd,
      #3c15eb,
      #aa367c,
      #81187c,
      #6b148d,
      #8400ff,
      #4a2fbd,
      #3c15eb
    );
    background-size: 400%;
    transition: 0.5s;
    animation: ${rainbow} 20s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 400%;
    background: linear-gradient(
      45deg,
      #aa367c,
      #81187c,
      #6b148d,
      #8400ff,
      #4a2fbd,
      #3c15eb,
      #aa367c,
      #81187c,
      #6b148d,
      #8400ff,
      #4a2fbd,
      #3c15eb
    );
    filter: blur(5px);
    transition: 0.5s;
    animation: ${rainbow} 20s linear infinite;
  }
`;

const ButtonSpan = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 20px;

  position: absolute;
  display: block;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;

  background-color: #151515;
  z-index: 1;

  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 0px;
    height: 100%;
    background: #4a2fbd;

    z-index: -1;

    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`;
