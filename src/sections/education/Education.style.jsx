import styled from "styled-components";

export const EducationContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }
`;

export const Formations = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 6rem;
  border-top: dashed 0.2rem var(--color-secondary);
  padding: 2rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    border-top: none;
    align-items: center;
    padding: 0 5rem;
  }
`;