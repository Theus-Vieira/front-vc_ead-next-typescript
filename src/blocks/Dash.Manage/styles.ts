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
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & > h2 {
      font-size: 25pt;
    }

    & > .box-add {
      width: 80%;

      display: flex;
      justify-content: flex-end;

      margin-top: 5rem;

      & > svg {
        font-size: 25pt;

        border: 2px solid ${(props) => props.theme.txtPrimary};
        border-radius: 50%;

        transition: 1.2s;

        cursor: pointer;

        &:hover {
          transform: scale(1.1);
          transition: 0.8s;

          border-color: ${(props) => props.theme.secondary};
          color: ${(props) => props.theme.secondary};
        }
      }
    }
  }

  @media (min-width: 1440px) {
  }
`;

export const BoxCards = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 1440px) {
  }
`;
