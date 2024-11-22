import styled from "styled-components";

interface ISTextareaProps {
  iconAction?: () => void;
  iconAfter?: boolean;
  iconSize?: string;
}

export const Container = styled.section<ISTextareaProps>`
  width: 100%;
  min-height: 70%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 2rem;

  border-radius: 2rem;
  border: 1px solid ${(props) => props.theme.borderPrimary};

  & > textarea {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    resize: none;

    font-size: 14pt;

    transform-origin: bottom;

    color: ${(props) => props.theme.txtPrimary};
    background-color: transparent;
  }

  & > svg {
    font-size: 20pt;
  }
`;
