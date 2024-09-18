import styled from "styled-components";

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  text-align: center;

  & > button {
    margin-top: 0.5rem;
  }
`;
