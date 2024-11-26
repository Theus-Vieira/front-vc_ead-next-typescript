import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  & > svg {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 10;

    padding: 0.5rem;

    border-radius: 50%;

    background-color: ${(props) => props.theme.success};
    color: ${(props) => props.theme.white};

    font-size: 40pt;

    cursor: pointer;
    transition: 0.6s;

    &:hover {
      transform: scale(1.1);
      transition: 1s;
    }
  }
`;

export const UsersOnlineBox = styled.section`
  width: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`;

export const MessagesBox = styled.section`
  width: 100%;
  height: calc(100% - 8.5rem);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.2rem;

  padding: 1.5rem;

  overflow: hidden auto;

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
