import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    background-color: var(--color-light);
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: .2rem solid var(--color-secondary);
    border-radius: var(--border-radius);
    z-index: 1000;
    animation-name: appear;
    animation-duration: 1s;

    @media (max-width: 1024px) {
        border-bottom: none;
        justify-content: flex-start;
        padding-left: 1rem;
    }
`