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
  }

  & > .box-action {
    width: 4rem;
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
      width: calc(100% - 26rem);

      padding: 2rem;

      & > h3 {
        font-size: 14pt;
      }
    }

    & > .box-level {
      width: 9rem;

      & > h3 {
        font-size: 14pt;
      }
    }

    & > .box-action {
      width: 8rem;

      & > svg {
        font-size: 16pt;
      }
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
