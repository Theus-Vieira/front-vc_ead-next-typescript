import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
`;

export const DeadBox = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.blackAlpha};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
`;

export const BoxModal = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1rem 4rem;
  padding: 3rem 2rem;

  border-radius: 1.5rem;

  position: fixed;
  z-index: 400;

  background-color: ${(props) => props.theme.bgPrimary};
`;
