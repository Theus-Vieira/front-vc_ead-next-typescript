import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
  }

  @media (min-width: 1200px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
  }

  @media (min-width: 1440px) {
  }
`;

export const DeadBox = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    height: 100vh;

    background-color: ${(props) => props.theme.blackAlpha};

    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
  }

  @media (min-width: 1200px) {
    width: 100vw;
    height: 100vh;

    background-color: ${(props) => props.theme.blackAlpha};

    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
  }

  @media (min-width: 1440px) {
  }
`;

export const BoxModal = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 3rem 2rem;

    border-radius: 1.5rem;

    position: fixed;
    z-index: 400;

    background-color: ${(props) => props.theme.bgPrimary};
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 3rem 2rem;

    border-radius: 1.5rem;

    position: fixed;
    z-index: 400;

    background-color: ${(props) => props.theme.bgPrimary};
  }

  @media (min-width: 1440px) {
  }
`;
