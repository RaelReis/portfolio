import { useState } from "react";
import styled, { keyframes } from "styled-components";

import { Container } from "./UI/Container";
import { Input } from "./UI/Input";

import { BREAKPOINTS } from "../assets/style/breakpoints";
import rocket2 from "../assets/img/teste2.png";
import locationIcon from "../assets/img/location_icon.svg";
import phoneIcon from "../assets/img/phone_icon.svg";
import emailIcon from "../assets/img/email_icon.svg";
import discordIcon from "../assets/img/discord_icon.svg";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github_icon.svg";

const backgroundColor = "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)";

const CONTACT_INITIAL = {
  name: "",
  email: "",
  number: "",
  message: "",
};

export const Contact = () => {
  const [contactForm, setContactForm] = useState(CONTACT_INITIAL);

  const handleInput = (inputText: string, inputName: "name" | "email" | "number" | "message") => {
    setContactForm((prevContact) => {
      return { ...prevContact, [inputName]: inputText };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container id="contact" bgColor={backgroundColor}>
      <ContactContainer>
        <MoreContactsBox>
          <MoreContactsItem>
            <MoreContactsItemIcon src={linkedinIcon} alt="Icone do discord" />
          </MoreContactsItem>
          <MoreContactsItem>
            <MoreContactsItemIcon src={discordIcon} alt="Icone do linkedin" />
          </MoreContactsItem>
          <MoreContactsItem>
            <MoreContactsItemIcon src={githubIcon} alt="Icone do gitub" />
          </MoreContactsItem>
        </MoreContactsBox>
        <ContactBox>
          <ContactImageBox>
            <ContactImage src={rocket2} alt="Contact Image" />
            <MyContactArea>
              <MyContactItem>
                <ContactIcon src={locationIcon} alt="Icone de mapa" />
                <ContactText>Vila Santa Catarina, São Paulo - SP</ContactText>
              </MyContactItem>
              <MyContactItem>
                <ContactIcon src={phoneIcon} alt="Icone de telefone" />
                <ContactText>(11) 9 8512-8393</ContactText>
              </MyContactItem>
              <MyContactItem>
                <ContactIcon src={emailIcon} alt="Icone de email" />
                <ContactText>raelreiscontato@gmail.com</ContactText>
              </MyContactItem>
            </MyContactArea>
          </ContactImageBox>
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Get In Touch</FormTitle>
            <Input
              id="name"
              value={contactForm.name}
              placeholder="Name"
              type="text"
              onChange={(text) => handleInput(text.target.value, "name")}
            />
            <Input
              id="email"
              value={contactForm.email}
              placeholder="Email Adress"
              type="email"
              onChange={(text) => handleInput(text.target.value, "email")}
            />
            <Input
              id="number"
              value={contactForm.number}
              placeholder="Phone No."
              type="text"
              onChange={(text) => handleInput(text.target.value, "number")}
            />
            <TextArea
              id="text-area"
              value={contactForm.message}
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

// ************* Animations *************

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

// ************* Styles *************

const ContactContainer = styled.div`
  position: relative;

  min-height: 670px;
  margin: 0 90px;

  @media (${BREAKPOINTS.medium}) {
    min-height: 800px;
  }
`;

const MoreContactsBox = styled.ul`
  padding: 25px 0;
  background-color: rgba(0, 0, 0, 0.7);

  position: absolute;
  left: -87px;
  bottom: 35px;

  width: 90px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 15px #000;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoreContactsItem = styled.li`
  width: 40px;
  height: 40px;

  margin: 10px 0;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(217, 217, 217, 0.1);

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(110%);
  }
`;

const MoreContactsItemIcon = styled.img`
  text-align: center;
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
  padding: 45px 100px;

  display: flex;

  @media (${BREAKPOINTS.big}) {
    padding: 45px 40px;
  }

  @media (${BREAKPOINTS.medium}) {
    flex-direction: column;
  }
`;

const ContactImageBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (${BREAKPOINTS.medium}) {
    flex: none;
  }
`;

const MyContactArea = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  &::before {
    content: "";
    margin-top: auto;
  }

  &::after {
    content: "";
    margin-top: auto;
  }
`;

const MyContactItem = styled.li`
  display: flex;
  align-items: center;

  margin: 10px 25px;
  padding: 18px 10px;
`;

const ContactIcon = styled.img``;

const ContactText = styled.span`
  color: #b8b8b8;
  width: 100%;
  font-size: 18px;
  margin-left: 30px;
`;

const ContactImage = styled.img`
  // display: none;
  margin: 15px auto 0 60px;
  width: 50%;

  @media (${BREAKPOINTS.medium}) {
    width: 20%;
    margin-left: auto;
  }
`;

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
  flex: 1;
  font-family: inherit;
  font-size: 18px;
  height: 50px;
  margin: 15px 0;

  resize: none;

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
  font-weight: 400;
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
