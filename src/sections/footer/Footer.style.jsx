import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 1.5rem 0;
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p, a {
        color: var(--color-light);
    }

    @media (max-width: 480px) {
        text-align: center;
        font-size: .9rem;
    }
`