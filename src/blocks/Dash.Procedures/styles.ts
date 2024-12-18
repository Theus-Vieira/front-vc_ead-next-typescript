import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;

  overflow: hidden auto;

  & > .box-title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & > h2 {
      font-size: 24pt;
      font-weight: bold;
    }

    & > span {
      font-size: 10pt;
    }
  }

  & > .box-video {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & > h2 {
      font-size: 15pt;

      cursor: pointer;

      transition: 0.8s;

      &:hover {
        color: ${(props) => props.theme.secondary};

        transition: 0.3s;
      }
    }
  }

  @media (min-width: 768px) {
    & > .box-video {
      width: 80%;
    }
  }
`;
