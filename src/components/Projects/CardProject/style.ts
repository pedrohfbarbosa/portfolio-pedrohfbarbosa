import styled from "styled-components";

export const CardProjectStyled = styled.li`
  background-color: var(--bg-cards);

  width: 100%;
  max-width: 28.8125rem;
  min-height: 11.625rem;

  border-radius: var(--radius);

  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: center;
      gap: 2rem;
      
      & > a {
        &:hover {
          text-decoration: underline;
          color: var(--text-color);
        }
      }
    }
  }

  & svg {
    color: var(--text-color);
    height: 1.25rem;
    width: 1.25rem;
  }
`;
