import styled from "styled-components";

export const MainContainer = styled.main`
    height: calc(100vh - 6rem);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding-top: 5rem;
    animation-name: slide-top;
    animation-duration: 2s;

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        gap: 2rem;
    }

    @media (max-width: 658px) {
        gap: .5rem;
    }
    
`

export const MainIntroduction = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1000px) {
        text-align: center;
    }
`

export const MainButtons = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 1000px) {
        justify-content: center;
    }

    @media (max-width: 658px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const MainImg = styled.img`
    width: 37%;

    @media (max-width: 1000px) {
        width: 45%;
    }

    @media (max-width: 658px) {
        width: 70%;
    }
`

export const IntroductionSocials = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 1000px) {
        justify-content: center;
    }
`

export const LinkCv = styled.a`
    width: 12rem;
    height: 3rem;
    font-weight: 600;
    font-size: 1.1rem;
    border-radius: var(--border-radius2);
    transition: var(--transition-slow);
    display: flex;
    align-items: center;
    justify-content: center;
    border: .2rem solid var(--color-primary);
    color: var(--color-light);
    background-color: var(--color-primary);

    &:hover {
        cursor: pointer;
        color: var(--color-primary);
        border: .2rem solid var(--color-primary);
        background-color: transparent;
    }

    &:active {
        cursor: grabbing;
        color: var(--color-primary);
        border: .2rem solid var(--color-primary);
        background-color: transparent;
    }
`

export const LinkAbout = styled.a`
    border-radius: var(--border-radius2);
    color: #9b9b9b;
    background-color: var(--color-secondary);
    width: 12rem;
    height: 3rem;
    font-weight: 600;
    font-size: 1.1rem;
    border-radius: var(--border-radius2);
    transition: var(--transition-slow);
    display: flex;
    align-items: center;
    justify-content: center;
    border: .2rem solid var(--color-secondary);;

    &:hover {
        cursor: pointer;
        color: var(--color-primary);
        background-color: transparent;
        border: .2rem solid var(--color-secondary);
    }

    &:active {
        cursor: grabbing;
        color: var(--color-primary);
    }
`
