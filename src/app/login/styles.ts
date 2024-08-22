import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  background-color: ${(props) => props.theme.bgSecondary};

  @media (min-width: 410px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;

    background-color: ${(props) => props.theme.bgSecondary};
  }
`;

export const BoxLogin = styled.section`
  min-width: 29rem;
  max-width: 31rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  padding: 2rem 2rem;

  border-radius: 2rem;

  background-color: ${(props) => props.theme.bgPrimary};

  & > .box_title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    text-align: center;

    & > h1 {
      font-size: 20pt;
    }

    & > p {
      font-size: 10pt;
    }
  }

  @media (min-width: 410px) {
    min-width: 35rem;
    max-width: 40rem;
  }

  @media (min-width: 1024px) {
    min-width: 31rem;
    max-width: 31rem;
  }
`;
