import styled from "styled-components";

export const ProjectsContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ProjectsContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    p {
        text-align: justify;
    }
`

export const GithubLink = styled.a`
    text-decoration: underline;
    font-weight: bold;
    transition: var(--transition-slow);

    &:hover {
        color: var(--color-primary);
    }
`

export const ProjectsLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 1350px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    @media (max-width: 940px) {
        grid-template-columns: repeat(1, 1fr);
    }
`