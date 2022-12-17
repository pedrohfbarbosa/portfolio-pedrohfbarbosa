import styled from "styled-components";

export const ProfileStyled = styled.div`
  background-color: var(--bg-cards);

  width: 100%;
  min-height: 18.25rem;

  border-radius: var(--radius);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > figure {
    width: 100px;
    height: 100px;

    border-radius: var(--radius-rounded);

    overflow: hidden;
    object-fit: cover;

    border: 2px solid var(--border-color);
  }

  & > figure > img {
    object-fit: cover;

    width: 100%;
    height: 100%;
  }
`;
