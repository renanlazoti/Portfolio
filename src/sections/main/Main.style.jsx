import styled from "styled-components";

export const MainContainer = styled.main`
    height: calc(100vh - 6rem);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding-top: 5rem;
`

export const MainIntroduction = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const MainButtons = styled.div`
    display: flex;
    gap: 1rem;
`

export const MainImg = styled.img`
    width: 37%;
`

export const IntroductionTitle = styled.h1`
    font-size: 5rem;
`

export const IntroductionSubtitle = styled.h2`
    font-size: 2rem;
`

export const IntroductionSocials = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
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

    &:hover {
        cursor: pointer;
        color: var(--color-primary);
    }
`
