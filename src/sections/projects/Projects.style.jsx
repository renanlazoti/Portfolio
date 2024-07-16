import styled from "styled-components";

export const ProjectsContainer = styled.section`
    width: 100%;
    height: calc(100vh - 6rem);
    display: flex;
    justify-content: center;
`

export const ProjectsContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
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
`