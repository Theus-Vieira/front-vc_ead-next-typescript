import styled from "styled-components";

interface ICardProps {
  isIncomplete?: boolean;
}

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  text-align: center;

  & > h2 {
    width: 100%;

    font-size: 20pt;
    /* text-align: left; */
  }

  & > p {
    width: 100%;

    font-size: 9pt;
    text-align: left;
  }

  & .welcome-video {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    & > h2 {
      padding: 0 4rem;

      font-size: 25pt;
    }

    & > p {
      padding: 0 4rem;

      font-size: 10pt;
    }

    & .welcome-video {
      width: 85%;
      height: 30rem;
    }
  }

  @media (min-width: 1024px) {
    & > p {
      font-size: 12pt;
    }

    & .welcome-video {
      width: 80%;
      height: 40rem;
    }
  }
`;

export const BoxCards = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  margin-top: 1rem;

  padding: 2rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

export const Card = styled.section<ICardProps>`
  width: 12rem;
  height: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  border: 4px solid
    ${(props) =>
      props.isIncomplete ? props.theme.error : props.theme.txtPrimary};
  border-radius: 2rem;

  animation-name: pulse;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-play-state: ${(props) =>
    props.isIncomplete ? "running" : "paused"};

  cursor: pointer;
  transition: 1.2s;

  & > svg {
    font-size: 25pt;

    margin-bottom: 1rem;

    transition: 1.2s;

    color: ${(props) =>
      props.isIncomplete ? props.theme.error : props.theme.txtPrimary};
  }

  & > h3 {
    font-size: 10pt;

    transition: 1.2s;

    color: ${(props) =>
      props.isIncomplete ? props.theme.error : props.theme.txtPrimary};
  }

  & > strong {
    font-size: 10pt;
  }

  &:hover {
    transform: scale(1.1);

    transition: 0.8s;

    border-color: ${(props) =>
      props.isIncomplete ? props.theme.error : props.theme.secondary};

    color: ${(props) =>
      props.isIncomplete ? props.theme.error : props.theme.secondary};

    & > svg,
    h3 {
      color: ${(props) =>
        props.isIncomplete ? props.theme.error : props.theme.secondary};

      transition: 0.8s;
    }
  }
`;
