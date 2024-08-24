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
    flex-direction: row;
  }
`;

export const BoxMenu = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 30rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 2rem;

    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};

    & > .box-dark-mode {
      width: 100%;
      height: 3rem;

      display: flex;
      justify-content: end;
      align-items: center;
    }

    & > .box-menu {
      width: 100%;
      height: calc(100% - 8rem);
    }

    & > .box-button {
      width: 100%;
      height: 3rem;

      display: flex;
      justify-content: center;
    }
  }
`;

export const BoxContent = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: calc(100vw - 30rem);
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 2rem;

    text-align: center;
  }
`;
