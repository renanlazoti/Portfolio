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
    
    svg {
        width: 2rem;
        height: 2rem;
    }

    p {
        text-align: center;
        font-size: .9rem;
    }
    
    &:hover {
        border-bottom: .2rem solid var(--color-primary);
        transition: var(--transition-slow);
        cursor: pointer;

        svg {
            color: var(--color-primary);
            transition: var(--transition-slow);
        }
    }

`