import styled from "styled-components";

export const Container = styled.form`
  width: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > h2 {
    margin-bottom: 1rem;

    text-align: center;
    font-size: 16pt;
  }

  & > button {
    margin: 2rem 0 0.5rem 0;
  }

  & > p {
    font-weight: bold;
    font-size: 9pt;

    color: ${(props) => props.theme.error};
  }
`;
