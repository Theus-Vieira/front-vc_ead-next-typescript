import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  position: relative;

  & > span {
    padding: 0 0.5rem;

    font-size: 8pt;
    font-weight: bold;

    color: ${(props) => props.theme.txtPrimary};
  }

  & > .select-box {
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 0.5rem;

    box-shadow: 1px 1px 3px 0 ${(props) => props.theme.borderPrimary};

    background-color: ${(props) => props.theme.bgPrimary};

    padding: 0 1rem;

    cursor: pointer;

    & > span {
      font-size: 12pt;
      font-weight: bold;

      color: ${(props) => props.theme.txtPrimary};
    }

    & > svg {
      width: 1.5rem;
      height: 1.5rem;

      color: ${(props) => props.theme.txtPrimary};
    }
  }
`;

export const BoxOptions = styled(motion.div)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0;

  position: absolute;
  bottom: -15.5rem;
  z-index: 5000;

  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.borderPrimary};

  background-color: ${(props) => props.theme.bgPrimary};

  box-shadow: 1px 1px 3px 0 ${(props) => props.theme.borderPrimary};

  & > span {
    width: 100%;
    height: 2.3rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding-left: 1rem;

    font-size: 12pt;
    font-weight: bold;

    color: ${(props) => props.theme.txtPrimary};

    cursor: pointer;

    transition: 0.8s;

    &:hover {
      transform: translateX(0.5rem);
      transform-origin: left;

      color: ${(props) => props.theme.primary};

      transition: 0.3s;
    }
  }
`;
