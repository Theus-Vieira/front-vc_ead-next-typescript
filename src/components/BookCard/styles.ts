import styled from "styled-components";

export const Container = styled.section`
  width: 12rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  white-space: nowrap;

  cursor: pointer;

  transition: 0.5s;

  & > img {
    width: 100%;
    height: 17rem;

    border-radius: 1rem;
  }

  & > h2 {
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    transform: scale(1.1);

    transition: 1.2s;
  }
`;
