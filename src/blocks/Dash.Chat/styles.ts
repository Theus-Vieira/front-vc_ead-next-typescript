import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const MessagesBox = styled.section`
  width: 100%;
  height: calc(100% - 8.5rem);

  display: flex;

  & > h3 {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 50;
  }
`;

export const InputContainer = styled.section`
  width: 100%;
  height: 8.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > .action-box {
    width: 7rem;

    & .box-opt {
      bottom: 4rem;
    }
  }

  & > .input-box {
    width: 90rem;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
