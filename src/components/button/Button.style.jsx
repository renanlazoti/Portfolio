import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 12rem;
    height: 3rem;
    border: .2rem solid var(--color-primary);
    color: var(--color-light);
    font-weight: 600;
    font-size: 1.1rem;
    border-radius: var(--border-radius2);
    background-color: var(--color-primary);

    &:hover {
        cursor: pointer;
        color: var(--color-primary);
        border: .2rem solid var(--color-primary);
        background-color: transparent;
        transition: var(--transition-slow);
    }
`