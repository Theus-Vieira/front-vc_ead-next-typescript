import styled from "styled-components";
import { motion } from "framer-motion";

export const DeadArea = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.blackAlpha};

  position: absolute;
  z-index: 100;
`;

export const Container = styled(motion.section)`
  width: 60vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 10rem;

  position: absolute;
  left: 0;
  z-index: 200;

  border-radius: 0 0 15rem 0;

  background-color: ${(props) => props.theme.bgPrimary};

  & > .dark-mode-container {
    width: 100%;
    height: 15%;

    display: flex;
    align-items: center;

    padding: 0 3rem;
  }

  & > .container-children {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 3rem 2rem;
  }

  & > .container-button {
    width: 100%;
    height: 3.5rem;

    padding: 0 5rem;

    & > button:hover {
      background-color: #f79577;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
