import styled from "styled-components";

export const LinksStyled = styled.section`
  background-color: var(--bg-cards);

  width: 100%;

  border-radius: var(--radius);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 2rem;

  & > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
`;

export const CardLink = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > svg {
    color: white;
  }

  a {
    color: var(--text-color);
  }

  & > a:hover {
    text-decoration: underline;

    color: var(--text-color);
  }
`;
