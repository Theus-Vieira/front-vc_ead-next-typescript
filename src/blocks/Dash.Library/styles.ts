import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  & > h2 {
    font-size: 25pt;
  }

  & > p {
    font-size: 12pt;
  }

  & > .container-actions {
    width: 80%;
    min-height: 3rem;
  }

  & > .box-links {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;

    margin-top: 4rem;
    padding-bottom: 4rem;
  }
`;
