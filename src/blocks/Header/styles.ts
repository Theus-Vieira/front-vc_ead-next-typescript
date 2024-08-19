import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 5rem;

  background-color: ${(props) => props.theme.primary};

  & > .container_image {
    height: 100%;
    border-radius: 50%;

    background-color: white;

    & > img {
      height: 100%;

      transition: 0.8s;

      &:hover {
        transform: scale(1.05) rotate(10deg);
        transition: 0.3s;
      }
    }
  }

  & > .container-button {
    display: none;
  }

  & > button {
    display: none;
  }

  & > svg {
    font-size: 30pt;

    color: ${(props) => props.theme.white};

    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 8rem;

    padding: 1rem 10rem;

    & > .container-button {
      width: 7rem;
      height: 3.5rem;

      display: block;

      & > button:hover {
        background-color: yellow;
      }
    }

    & > button {
      display: flex;
    }

    & > svg {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    & > .container-button {
      width: 8rem;
    }
  }
`;

export const MobileNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  list-style: none;

  font-size: 12pt;
  font-weight: bold;
  color: ${(props) => props.theme.txtPrimary};

  & > li {
    transition: 0.8s;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.secondary};

      transform: scale(1.1) rotate(5deg);
      transition: 0.3s;
    }
  }

  @media (min-width: 410px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    list-style: none;

    font-size: 12pt;
    font-weight: bold;
    color: ${(props) => props.theme.txtPrimary};

    & > li {
      transition: 0.8s;

      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.secondary};

        transform: scale(1.1) rotate(5deg);
        transition: 0.3s;
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    list-style: none;

    font-size: 12pt;
    font-weight: bold;
    color: #f5f6fa;

    & > a {
      color: #f5f6fa;

      &:hover {
        color: ${(props) => props.theme.secondary};

        transform: scale(1.1) rotate(5deg);
        transition: 0.3s;
      }
    }

    & > li {
      transition: 0.8s;

      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.secondary};

        transform: scale(1.1) rotate(5deg);
        transition: 0.3s;
      }
    }
  }

  @media (min-width: 1024px) {
    gap: 3rem;
  }
`;
