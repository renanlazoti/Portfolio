import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const CardContainer = styled.a`
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .7rem;
    border-bottom: .3rem solid var(--color-secondary);
    border-radius: var(--border-radius2);
    transition: var(--transition-slow);

    svg {
        width: 2rem;
        height: 2rem;
    }

    &:hover {
        cursor: pointer;
        border-bottom: .3rem solid var(--color-primary);
    }

    &:active {
        background-color: var(--color-secondary);
        transition: var(--transition-slow);
    }
`

export const CardIcon = styled(FaGithub)`

`