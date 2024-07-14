import styled from "styled-components"

export const NavbarList = styled.nav`
    display: flex;
    gap: 3rem;
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
        height: .1rem;
        width: 0;
        left: 0;
        bottom: -.1rem;
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
    }

`