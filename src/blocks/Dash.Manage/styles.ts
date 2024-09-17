import styled from "styled-components";

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

  & > .box-add {
    width: 90%;

    display: flex;
    justify-content: flex-end;

    margin-top: 2rem;
    margin-bottom: 2rem;

    & > svg {
      font-size: 22pt;

      border: 2px solid ${(props) => props.theme.txtPrimary};
      border-radius: 50%;

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
    width: calc(100% - 14rem);
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
    width: 5rem;
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
    width: 4rem;
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
      width: calc(100% - 26rem);

      padding: 2rem;
    }

    & > .box-level {
      width: 9rem;
    }

    & > .box-action {
      width: 8rem;
    }
  }

  @media (min-width: 1024px) {
    & > .box-username {
      width: calc(100% - 38rem);
    }

    & > .box-level {
      width: 15rem;
    }

    & > .box-action {
      width: 8rem;
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
