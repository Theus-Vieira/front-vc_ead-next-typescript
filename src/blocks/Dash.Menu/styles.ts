import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  padding: 3rem 0 2rem;

  list-style: none;

  & > li {
    font-size: 14pt;
    font-weight: bold;

    cursor: pointer;
  }

  & > .selected {
    color: ${(props) => props.theme.secondary};
    transform: translateX(2rem);

    animation: moveRight 0.5s ease-in-out;
  }

  & > .deselected {
    transform: translateX(0);

    animation: moveLeft 0.5s ease-in-out;
  }

  @media (min-width: 768px) {
    color: ${(props) => props.theme.white};
  }

  @media (min-width: 1024px) {
    gap: 2rem;

    & > li {
      font-size: 16pt;
    }
  }

  @keyframes moveRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(2rem);
    }
  }

  @keyframes moveLeft {
    from {
      transform: translateX(2rem);
    }
    to {
      transform: translateX(0);
    }
  }
`;
