import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;

    border: 2px solid ${(props) => props.theme.txtPrimary};
    border-radius: 1rem;

    & .title {
      width: 80%;
      height: 100%;

      display: flex;
      align-items: center;

      padding: 0.5rem 1rem;
    }

    & .form {
      width: 10%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      & > .disabled {
        pointer-events: none;

        & > svg {
          color: ${(props) => props.theme.warning}50;
        }
      }

      & > a > svg {
        font-size: 14pt;

        color: ${(props) => props.theme.warning};

        cursor: pointer;

        transition: 0.8s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    & .play {
      width: 10%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      & > svg {
        font-size: 14pt;

        color: ${(props) => props.theme.error};

        cursor: pointer;

        transition: 0.8s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
