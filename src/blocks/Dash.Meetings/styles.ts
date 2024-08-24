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
    gap: 4rem;

    overflow: hidden auto;

    & > .box-title {
      & > h2 {
        font-size: 20pt;
        font-weight: bold;
      }

      & > span {
        font-size: 14pt;
      }
    }
  }

  @media (min-width: 1440px) {
  }
`;
