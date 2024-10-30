import styled from "styled-components";

export const ContainerRegister = styled.section`
  width: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > h2 {
    font-size: 18pt;
  }

  @media (min-width: 410px) {
    width: 31rem;
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > h2 {
    font-size: 22pt;
  }

  & > .container-actions {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    margin-top: 2rem;
    margin-bottom: 2rem;

    & > svg {
      font-size: 22pt;

      transition: 1.2s;

      cursor: pointer;

      &:hover {
        transform: scale(1.1);
        transition: 0.8s;

        border-color: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.secondary};
      }
    }
  }

  @media (min-width: 768px) {
    & > h2 {
      font-size: 25pt;
    }

    & > .box-add {
      width: 80%;

      margin-top: 5rem;

      & > svg {
        font-size: 25pt;
      }
    }
  }
`;

export const BoxHeader = styled.section`
  width: 100%;
  height: 2.5rem;

  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  /* border: 1px solid #f5f6fa; */
  border-radius: 1rem 1rem 0.4rem 0.4rem;

  white-space: nowrap;

  background-color: ${(props) => props.theme.primary};
  color: #f5f6fa;

  & > .box-username {
    min-width: calc(100% - 19rem);
    max-width: calc(100% - 19rem);
    height: 100%;

    display: flex;
    align-items: center;

    padding: 1rem;

    & > h3 {
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;
      text-align: start;

      font-size: 9pt;
    }
  }

  & > .box-level {
    min-width: 5rem;
    max-width: 5rem;
    height: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.3rem;

    & > h3 {
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 9pt;
    }
  }

  & > .box-action {
    min-width: 4rem;
    max-width: 4rem;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.3rem;

    & > h3 {
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 9pt;
    }
  }

  @media (min-width: 768px) {
    & > .box-username {
      min-width: calc(100% - 35rem);
      max-width: calc(100% - 35rem);

      padding: 2rem;
    }

    & > .box-level {
      min-width: 9rem;
      max-width: 9rem;
    }

    & > .box-action {
      min-width: 8rem;
      max-width: 8rem;
    }
  }

  @media (min-width: 1024px) {
    & > .box-username {
      min-width: calc(100% - 38rem);
      max-width: calc(100% - 38rem);
    }

    & > .box-level {
      min-width: 10rem;
      max-width: 10rem;
    }

    & > .box-action {
      min-width: 8rem;
      max-width: 8rem;
    }
  }
`;

export const BoxCards = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
