import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.primary};

  & > h2 {
    color: ${(props) => props.theme.white};
  }
`;
