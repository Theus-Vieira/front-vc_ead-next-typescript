import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: calc(100% - 6rem);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  padding: 2rem 2rem;

  overflow: hidden auto;

  @media (min-width: 410px) {
    padding: 2rem 5rem;
  }

  @media (min-width: 768px) {
    height: calc(100% - 8rem);

    flex-direction: row;
    justify-content: center;
    gap: 0;

    padding: 0 5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 10rem;
  }
`;

export const BoxLeft = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 20rem;
    height: 20rem;

    border-radius: 50%;

    overflow: hidden;
    transition: 1.2s;

    &:hover {
      transition: transform 0.3s ease;
      transform: translateX(6rem) rotate(15deg);
    }

    & > img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;

    & > div {
      width: 30rem;
      height: 30rem;
    }
  }

  @media (min-width: 1024px) {
    & > div {
      width: 35rem;
      height: 35rem;
    }
  }

  @media (min-width: 1200px) {
    & > div {
      width: 40rem;
      height: 40rem;
    }
  }
`;

export const BoxRight = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  padding: 2rem;

  overflow: hidden auto;

  text-align: center;

  & > h2 {
    margin-bottom: 1rem;

    font-size: 14pt;
  }

  & > p {
    font-size: 10pt;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;

    & > h2 {
      font-size: 14pt;
    }

    & > p {
      font-size: 8pt;
    }
  }

  @media (min-width: 1024px) {
    & > h2 {
      font-size: 16pt;
    }

    & > p {
      font-size: 9pt;
    }
  }

  @media (min-width: 1200px) {
    & > h2 {
      margin-bottom: 2rem;

      font-size: 20pt;
    }

    & > p {
      font-size: 11pt;
    }
  }
`;
