import styled from "styled-components";

interface IButtonProps {
  isActive: boolean;
}

export const Button = styled.button<IButtonProps>`
  width: 2.5rem;
  height: 1.1rem;

  display: flex;
  align-items: center;

  border: 2px solid ${(props) => props.theme.borderPrimary};
  border-radius: 1rem;

  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);

  transition: background-color 300ms;
  cursor: pointer;

  background-color: ${(props) => props.theme.bgPrimary};

  & > div {
    width: 1.75rem;
    height: 1.75rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    padding: 0.25rem;

    color: ${(props) => props.theme.txtPrimary};
    background-color: ${(props) => (props.isActive ? "#6a6a6a" : "#ffcc00")};

    transition: background-color 0.5s, transform 0.5s;

    transform: ${(props) =>
      props.isActive ? "translateX(100%)" : "translateX(-1rem)"};

    @keyframes fadeindark {
      0% {
        rotate: -180deg;
        scale: 0.7;
        opacity: 0.5;
      }

      50% {
        color: #9a9a9a;
        opacity: 0.85;
      }

      100% {
        scale: 1;
        rotate: 0deg;
        opacity: 1;
      }
    }

    @keyframes fadeinlight {
      0% {
        rotate: -180deg;
        scale: 0.7;
        opacity: 0.5;
      }

      50% {
        color: #fcfba9;
        opacity: 0.85;
      }

      100% {
        scale: 1;
        rotate: 0deg;
        opacity: 1;
      }
    }

    .fadeindark {
      animation-name: fadeindark;
      animation-duration: 0.5s;
      animation-timing-function: ease;
    }

    .fadeinlight {
      animation-name: fadeinlight;
      animation-duration: 0.5s;
    }
  }
`;
