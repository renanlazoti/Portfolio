import styled from "styled-components";

export const SkillsContainer = styled.section`
    width: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`