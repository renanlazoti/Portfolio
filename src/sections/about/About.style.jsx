import styled from "styled-components";

export const AboutContainer = styled.section`
    width: 80%;
`

export const AboutContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
`

export const AboutInformations = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: 2rem;
    }

    p {
        text-align: justify;
    }

`

export const AboutImage = styled.img`
    width: 30%;
    border-radius: var(--border-radius);
    border-bottom: .4rem solid var(--color-secondary);
    transition: var(--transition-slow);

    &:hover {
        transform: scale(1.1);
        border-bottom: .4rem solid var(--color-primary);
    }
    
`

export const AboutCards = styled.div`
    display: flex;
    gap: 1rem;
    
    p {
        text-align: center;
    }
`