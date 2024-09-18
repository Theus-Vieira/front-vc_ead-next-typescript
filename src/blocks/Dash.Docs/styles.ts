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

  & > p {
    font-size: 12pt;
  }

  & > .box-links {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    margin-top: 4rem;

    & > a {
      font-size: 12pt;
      font-weight: bold;

      color: ${(props) => props.theme.secondary};

      transition: 1.2s;

      &:hover {
        transform: scale(1.1);
        transition: 0.8s;
      }
    }
  }
`;
