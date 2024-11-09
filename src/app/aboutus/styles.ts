import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 9rem);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  padding-top: 1rem;

  overflow: hidden auto;

  & > h2 {
    font-size: 16pt;
  }

  @media (min-width: 768px) {
    height: calc(100vh - 11rem);

    & > h2 {
      font-size: 18pt;
    }

    & .video-about-us {
      width: 45rem;
      height: 30rem;
    }
  }

  @media (min-width: 1440px) {
    & .video-about-us {
      width: 60rem;
      height: 40rem;
    }
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.primary};

  & > h2 {
    color: ${(props) => props.theme.white};
  }
`;
