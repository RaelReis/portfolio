import styled from "styled-components";

import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const SocialArea = () => {
  return (
    <Social>
      <SocialLink>
        <SocialImg src={navIcon1} alt="" />
      </SocialLink>
      <SocialLink>
        <SocialImg src={navIcon2} alt="" />
      </SocialLink>
      <SocialLink>
        <SocialImg src={navIcon3} alt="" />
      </SocialLink>
    </Social>
  );
};

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SocialLink = styled.a`
  margin: 0 5px;
  width: 40px;
  height: 40px;

  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(217, 217, 217, 0.1);

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(110%);
  }
`;

const SocialImg = styled.img``;
