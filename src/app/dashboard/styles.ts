import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;

    padding-top: 0;
  }
`;

export const HeaderMobile = styled.section`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;

  padding: 0 2rem;

  & > svg {
    font-size: 16pt;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BoxMenu = styled.section`
  display: none;

  @media (min-width: 768px) {
    width: 20rem;
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

  @media (min-width: 1024px) {
    width: 30rem;
  }
`;

export const BoxContent = styled.section`
  width: 100%;
  height: calc(100vh - 3rem);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;

  text-align: center;

  @media (min-width: 768px) {
    width: calc(100vw - 20rem);
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: calc(100vw - 30rem);
  }
`;
