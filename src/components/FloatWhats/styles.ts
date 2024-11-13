import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: absolute;
  right: 2rem;
  bottom: 0;

  z-index: 90;

  opacity: 0.6;

  transition: 1.2s;

  cursor: pointer;

  &:hover {
    opacity: 1;

    transition: 0.3s;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 1rem;

  cursor: inherit;

  border-radius: 50%;

  background-color: forestgreen;

  animation-name: pulse;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  animation-iteration-count: infinite;

  & > svg {
    font-size: 20pt;

    color: ${(props) => props.theme.white};
  }
`;

export const Baloon = styled.div`
  width: 11rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: -9rem;

  border-radius: 1rem;

  background-color: ${(props) => props.theme.bgSecondary};

  &::after {
    content: "";

    width: 0;
    height: 0;

    position: absolute;
    bottom: -8px;
    left: 80%;

    border-right: 10px solid transparent;
    border-top: 10px solid ${(props) => props.theme.bgSecondary};
    border-left: 3px solid transparent;

    transform: translateX(-50%);
  }

  & > p {
    font-weight: bold;
    font-size: 8pt;

    color: ${(props) => props.theme.txtPrimary};
  }
`;
