import styled from "styled-components";

export const Container = styled.form`
  @media (min-width: 410px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    text-align: center;

    & > button {
      margin-top: 0.5rem;
    }

    & > span {
      font-size: 9pt;
    }
  }

  @media (min-width: 1440px) {
  }
`;
