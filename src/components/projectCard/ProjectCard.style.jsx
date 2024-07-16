import styled from "styled-components"

export const Project = styled.div`
    width: 26rem;
    display: flex;
    padding: 2rem 1rem;
    justify-content: center;
    gap: 2rem;
    flex-direction: column;
    border-radius: var(--border-radius);
    border-bottom: .2rem solid var(--color-secondary);
    transition: var(--transition-slow);

    img {
        width: 100%;
        height: auto;
    }

    p {
        text-align: justify;
    }

    a {
        background-color: var(--color-dark);
        color: var(--color-light);
        padding: .5rem 2rem;
        border-radius: var(--border-radius);
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
    }

    &:hover {
        border-bottom: .2rem solid var(--color-primary);
    }
`

export const UsedLanguages = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: .5rem;
    
    p {
        background-color: var(--color-primary);
        color: var(--color-light);
        padding: .2rem 1rem;
        border-radius: var(--border-radius);
        text-align: center;
    }
`