import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  & > h2 {
    font-size: 25pt;
  }

  & > svg {
    position: absolute;
    top: 6.5rem;
    right: 2rem;
    font-size: 18pt;

    cursor: pointer;

    transition: 1.2s;

    &:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }

    @media (min-width: 768px) {
      top: 2rem;

      font-size: 25pt;
    }
  }

  & > h4 {
    position: absolute;
    bottom: 2rem;
    right: 3rem;

    animation-name: pulse;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;

    font-size: 12pt;
  }
`;

export const List = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  list-style: none;

  & > li {
    font-size: 14pt;

    font-weight: bold;

    & > span {
      font-size: 14pt;
      font-weight: normal;
    }
  }
`;
