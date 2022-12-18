import styled from "styled-components";

export const TechsStyled = styled.section`
  background-color: var(--bg-cards);

  width: 100%;

  border-radius: var(--radius);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;

  & > ul {
    display: flex;
    width: 100%;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`;

export const CardTech = styled.li`
  padding: 0.25rem 0.5rem;

  background-color: var(--bg-techs);

  border-radius: var(--radius-2);
`;
