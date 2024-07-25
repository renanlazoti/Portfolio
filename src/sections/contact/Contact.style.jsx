import styled from "styled-components";

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 8rem 0;

    @media (max-width: 768px) {
        padding: 7rem 0;
    }
`
export const ContactTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const ContactLinks = styled.div`
    display: flex;
    gap: 3rem;

    @media (max-width: 480px) {
        gap: 1.8rem
    }
`