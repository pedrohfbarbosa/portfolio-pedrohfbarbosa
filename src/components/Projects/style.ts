import styled from "styled-components";

export const ProjectsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  & > ul {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18.75rem, auto));
    grid-gap: 1rem;
  }
`;

export const StyledTitleDiv = styled.div`
  background-color: var(--bg-cards);

  width: 100%;

  border-radius: var(--radius);

  padding: 2rem;
`;
