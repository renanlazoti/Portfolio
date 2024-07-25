import styled from "styled-components"

export const NavbarList = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    gap: 3rem;

    svg {
        display: none;
    }

    @media (max-width: 1024px) {
        svg {
            display: flex;
            width: 2rem;
            height: 2rem;
        }
    }
`

export const NavResponsive = styled.div`
    display: none;
    width: 0%;
    height: 100%;
    background-color: var(--color-secondary);
    z-index: 9;
    position: fixed;
    left: 0;
    top: 0;
    overflow-x: hidden;
    transition: 0.5s ease;
    
    svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 2rem;
        height: 2rem;
        z-index: 10;
    }

    @media (max-width: 1024px) {
        display: block;
    }
`

export const NavResponsiveContent = styled.nav`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    font-size: 1.2rem;

    a {
        &:nth-child(4){
            display: none;
        }
    }
`

export const NavbarListItem = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition-slow);

    &:after{
        content: "";
        position: absolute;
        background-color: var(--color-primary);
        height: .2rem;
        width: 0;
        left: 0;
        bottom: -.2rem;
        border-radius: var(--border-radius2);
        transition: var(--transition-slow);
    }

    &:hover{
        color: var(--color-primary);
    }

    &:hover::after{
        width: 100%;
    }

    &:nth-child(4){
        color: var(--color-primary);
        font-size: 2rem;
        font-weight: bold;

        &:after{
            display: none;
        }

        @media (max-width: 950px) {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 1024px) {
        display: none;
    }
`

