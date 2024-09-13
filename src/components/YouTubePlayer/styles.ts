import styled from "styled-components";
import YouTube from "react-youtube";

export const Container = styled.section`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    text-align: center;

    & > p {
      font-size: 14pt;
    }

    & > h2 {
      font-size: 16pt;
    }

    & > a {
      font-size: 14pt;
      font-weight: bold;

      color: ${(props) => props.theme.link};

      transition: 0.8s ease-in-out;

      &:hover {
        transform: scale(1.1);

        color: yellow;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    text-align: center;

    & > p {
      font-size: 14pt;
    }

    & > h2 {
      font-size: 18pt;
    }

    & > a {
      font-size: 14pt;
      font-weight: bold;

      color: ${(props) => props.theme.link};

      transition: 0.8s ease-in-out;

      &:hover {
        transform: scale(1.1);

        color: yellow;
      }
    }
  }

  @media (min-width: 1440px) {
  }
`;

export const SYouTube = styled(YouTube)`
  & > iframe {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 30rem;
    height: 15rem;
  }

  @media (min-width: 1200px) {
    width: 30rem;
    height: 15rem;
  }

  @media (min-width: 1440px) {
  }
`;
