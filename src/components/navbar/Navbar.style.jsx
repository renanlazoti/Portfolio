import styled from "styled-components"

export const NavbarList = styled.nav`
    display: flex;
    gap: 3rem;
`

export const NavbarListItem = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        transition: var(--transition-slow);
        color: var(--color-primary);
    }

    &:nth-child(4){
        color: var(--color-primary);
        font-size: 2rem;
        font-weight: bold;
    }

`