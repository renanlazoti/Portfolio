import styled from "styled-components";

export const ExperienceCard = styled.div`
    border-bottom: .2rem solid var(--color-secondary);
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: var(--border-radius2);
    gap: .8rem;
    transition: var(--transition-slow);
    
    svg {
        width: 2rem;
        height: 2rem;
        transition: var(--transition-slow);
    }

    p {
        text-align: center;
        font-size: .9rem;
    }
    
    &:hover {
        border-bottom: .2rem solid var(--color-primary);
        cursor: pointer;

        svg {
            color: var(--color-primary);
        }
    }

    &:active {
        background-color: var(--color-secondary);
        transition: var(--transition-slow);
    }

`