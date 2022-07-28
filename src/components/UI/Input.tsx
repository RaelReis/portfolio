import React, { useState } from "react";
import styled from "styled-components";

interface InputProps {
  id: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

interface LabelProps {
  inputActive: boolean;
  textActive: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <InputBox>
      <Label inputActive={isFocus} textActive={props.value.length > 0} htmlFor={props.id}>
        {props.placeholder}
      </Label>
      <MainInput
        id={props.id}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </InputBox>
  );
};

const InputBox = styled.div`
  position: relative;
  margin: 15px 0;
  border-radius: 10px;
`;

const Label = styled.label<LabelProps>`
  opacity: 0.6;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: text;

  transition: all 0.2s ease;

  ${(props) => (props.inputActive || props.textActive ? "top: -15px" : "")};
  ${(props) => (props.inputActive || props.textActive ? "font-size: 14px" : "")};
  ${(props) => (props.inputActive || props.textActive ? "opacity: 1" : "")};
`;

const MainInput = styled.input`
  width: 100%;
  font-family: inherit;
  font-size: 18px;
  padding: 15px 20px;

  border: 2px solid transparent;
  border-radius: 10px;

  transition: all 0.4s ease;

  &:focus {
    border: 2px solid #fff;
  }
`;
