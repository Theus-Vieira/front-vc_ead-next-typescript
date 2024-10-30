import styled from "styled-components";

interface IContainerProps {
  isAdm: boolean;
}

export const ContainerEdit = styled.section`
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

export const ContainerView = styled.section`
  width: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > h2 {
    font-size: 18pt;
  }

  & > ul {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    list-style: none;

    & > li {
      font-size: 12pt;
      font-weight: bold;

      & > .whats {
        font-weight: bold;

        color: ${(props) => props.theme.success};
      }

      & > span {
        font-weight: normal;
      }
    }
  }
`;

export const Container = styled.section<IContainerProps>`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;

  border: 1px solid
    ${(props) => (props.isAdm ? props.theme.error : props.theme.txtPrimary)};
  border-radius: 1rem;

  white-space: nowrap;

  & > .box-username {
    min-width: calc(100% - 19rem);
    max-width: calc(100% - 19rem);
    height: 100%;

    display: flex;
    align-items: center;

    padding: 1rem;

    cursor: pointer;

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
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-left: 1px solid
      ${(props) => (props.isAdm ? props.theme.error : props.theme.txtPrimary)};
    border-right: 1px solid
      ${(props) => (props.isAdm ? props.theme.error : props.theme.txtPrimary)};

    & > h3 {
      width: 100%;

      font-size: 9pt;
    }

    & > svg {
      font-size: 12pt;
    }
  }

  & > .box-action {
    min-width: 4rem;
    max-width: 4rem;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
      font-size: 11pt;

      transition: 1.2s;

      cursor: pointer;

      &:hover {
        transform: scale(1.2);
        transition: 0.8s;
      }
    }
  }

  @media (min-width: 768px) {
    & > .box-username {
      min-width: calc(100% - 35rem);
      max-width: calc(100% - 35rem);

      padding: 2rem;

      & > h3 {
        font-size: 14pt;
      }
    }

    & > .box-level {
      min-width: 9rem;
      max-width: 9rem;

      & > h3 {
        font-size: 14pt;
      }

      & > svg {
        font-size: 14pt;
      }
    }

    & > .box-action {
      min-width: 8rem;
      max-width: 8rem;

      & > svg {
        font-size: 16pt;
      }
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

      & > svg {
        font-size: 16pt;
      }
    }

    & > .box-action {
      min-width: 8rem;
      max-width: 8rem;
    }
  }
`;
