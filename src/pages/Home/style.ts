import styled from "styled-components";
import { Container } from "../../styles/Container";

export const HomeStyled = styled(Container)`
  min-height: 100vh;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 56.25rem) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AsideStyled = styled.aside`
  width: 100%;
  max-width: 21.75rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MainStyled = styled.main`
  width: 100%;
  max-width: 59.5rem;
`;
