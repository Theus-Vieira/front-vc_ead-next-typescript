import styled from "styled-components";
import YouTube from "react-youtube";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  text-align: center;

  & > h2 {
    font-size: 12pt;
  }

  @media (min-width: 410px) {
    gap: 2rem;

    & > h2 {
      font-size: 14pt;
    }
  }
`;

export const SYouTube = styled(YouTube)`
  width: 25rem;
  height: 17rem;

  & > iframe {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 410px) {
    width: 35rem;
    height: 25rem;
  }

  @media (min-width: 768px) {
    width: 60rem;
    height: 37rem;
  }

  @media (min-width: 1440px) {
    height: 40rem;
  }
`;
