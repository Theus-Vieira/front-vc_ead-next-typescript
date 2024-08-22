import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10rem;

    background-color: ${(props) => props.theme.bgSecondary};
  }

  @media (min-width: 1440px) {
  }
`;

export const BoxLogin = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
    width: 31rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    padding: 2rem 1rem;

    border-radius: 2rem;

    text-align: center;

    background-color: ${(props) => props.theme.bgPrimary};
  }

  @media (min-width: 1440px) {
  }
`;
