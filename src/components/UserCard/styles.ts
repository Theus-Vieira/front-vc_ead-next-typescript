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
    height: 5rem;

    display: flex;
    align-items: center;

    border: 2px solid ${(props) => props.theme.txtPrimary};
    border-radius: 1rem;

    & > .box-username {
      width: calc(100% - 40rem);
      height: 100%;

      display: flex;
      align-items: center;

      padding: 2rem;

      & > h3 {
        width: 100%;

        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;

        font-size: 14pt;
      }
    }

    & > .box-level {
      width: 15rem;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      border-left: 2px solid ${(props) => props.theme.txtPrimary};
      border-right: 2px solid ${(props) => props.theme.txtPrimary};

      & > h3 {
        width: 100%;

        font-size: 14pt;
      }
    }

    & > .box-action {
      width: 10rem;
      height: 100%;
    }
  }

  @media (min-width: 1440px) {
  }
`;
