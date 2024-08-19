import styled from "styled-components";

interface ISButtonProps {
  primary: boolean;

  iconPosition?: "before" | "after";
  iconSize?: string;
  iconColor?: string;

  width?: string;
  height?: string;
  fontSize?: string;
  radius?: string;

  color?: string;
  bgColor?: string;
}

export const SButton = styled.button<ISButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};

  display: flex;
  flex-direction: ${(props) =>
    props.iconPosition === "before" ? "row" : "row-reverse"};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;

  border-radius: ${(props) => props.radius || ".5rem"};

  font-size: ${(props) => props.fontSize || "12pt"};
  font-weight: bold;
  white-space: nowrap;

  color: ${(props) => props.color || props.theme.white};
  background-color: ${(props) =>
    props.bgColor
      ? props.bgColor
      : props.primary === false
      ? props.theme.secondary
      : props.theme.primary};

  cursor: pointer;

  transition: 0.3s;

  & > svg {
    width: ${(props) => props.iconSize || "20px"};
    height: ${(props) => props.iconSize || "20px"};

    color: ${(props) => props.iconColor};
  }

  &:hover {
    transition: 0.8s;
    transform: scale(1.01);
    background-color: #585858;
  }

  &:active {
    transform: scale(0.9);
    transition: 0s;
  }
`;
