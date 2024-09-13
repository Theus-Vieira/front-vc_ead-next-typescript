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
    gap: 1rem;

    & > h2 {
      width: 100%;

      padding: 0 4rem;

      font-size: 25pt;
      text-align: left;
    }

    & > p {
      width: 100%;

      padding: 0 4rem;

      font-size: 12pt;
      text-align: left;
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
    justify-content: center;
    gap: 4rem;
  }

  @media (min-width: 1440px) {
  }
`;

export const Card = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
    width: 12rem;
    height: 12rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 3rem;
    padding: 1rem;

    border: 4px solid ${(props) => props.theme.txtPrimary};
    border-radius: 2rem;

    cursor: pointer;
    transition: 1.2s;

    & > svg {
      font-size: 25pt;

      margin-bottom: 1rem;
    }

    & > h3 {
      font-size: 10pt;
    }

    & > strong {
      font-size: 10pt;
    }

    &:hover {
      transform: scale(1.1);

      transition: 0.8s;

      border-color: ${(props) => props.theme.secondary};
      color: ${(props) => props.theme.secondary};
    }
  }

  @media (min-width: 1440px) {
  }
`;
