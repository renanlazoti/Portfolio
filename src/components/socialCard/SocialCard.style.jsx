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

    svg {
        width: 2.5rem;
        height: 2.5rem;
    }

    &:hover {
        cursor: pointer;
        transition: var(--transition-slow);
        border-bottom: .3rem solid var(--color-primary);
    }
`

export const CardIcon = styled(FaGithub)`

`