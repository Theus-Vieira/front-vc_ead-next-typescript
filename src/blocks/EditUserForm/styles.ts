import styled from "styled-components";

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  & .selects {
    width: 100%;

    display: flex;
    gap: 1rem;

    & .box-opt {
      bottom: -6.5rem;
    }
  }

  & > button {
    margin-top: 0.5rem;
  }

  & > .box-actions {
    width: 100%;

    margin-top: -0.5rem;

    display: flex;
    gap: 1rem;
  }
`;
