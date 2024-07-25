import styled from "styled-components";

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem .8rem;
    border-bottom: .2rem solid var(--color-secondary);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition-slow);

    svg {
        width: 2.2rem;
        height: 2.2rem;
        transition: var(--transition-slow);
    }

    p {
        font-weight: bold;
    }

    &:hover {
        transform: scale(1.1);
        border-bottom: .2rem solid var(--color-primary);
    }

    &:active {
        background-color: var(--color-secondary);
        transition: var(--transition-slow);
    }
`