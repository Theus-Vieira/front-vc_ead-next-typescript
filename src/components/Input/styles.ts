import styled, { css } from "styled-components";

interface ISInputProps {
  isErrored?: boolean;
  iconAction?: () => void;

  width?: string;
  height?: string;

  radius?: string;
  iconSize?: string;
  borderColor?: string;
  color?: string;
}

export const Container = styled.div<ISInputProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "2.5rem"};

  text-align: left;

  background-color: transparent;

  & > div {
    max-width: 100%;
    margin-bottom: 0.2rem;
    padding: 0 0.5rem;

    color: ${(props) => props.color || props.theme.txtPrimary};

    font-weight: bold;
    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;

    & > span {
      font-size: 7pt;
      color: ${(props) => props.theme.error};

      cursor: default;

      white-space: nowrap;

      @media (min-width: 767px) {
        font-size: 9pt;
      }
    }
  }
`;

export const InputContainer = styled.div<ISInputProps>`
  width: 100%;
  height: 90%;

  display: flex;
  align-items: center;

  padding: 0.5rem;

  border: 1.5px solid
    ${(props) => props.borderColor || props.theme.borderPrimary};
  border-radius: ${(props) => props.radius || "0.8rem"};

  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme.error};
      svg {
        color: ${(props) => props.theme.error};
      }
    `};

  & > input {
    width: 80%;

    flex: 1;
    align-items: center;
    background: transparent;
    color: ${(props) => props.color || props.theme.txtPrimary};

    &::placeholder {
      color: ${(props) => props.theme.txtPrimary}75;
    }

    &::-webkit-inner-spin-button {
      display: none;
    }
  }

  svg {
    margin-right: 0.5rem;

    font-size: ${(props) => props.iconSize || "10pt"};

    cursor: ${(props) => (props.iconAction ? "pointer" : "default")};

    transition: 0.5s;

    &:hover {
      color: ${(props) =>
        props.iconAction ? props.theme.primary : props.theme.txtPrimary};
      transition: 0.8s;
    }

    & > .password_eye {
      cursor: pointer;
    }
  }
`;
