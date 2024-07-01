import styled from "styled-components";

export const AboutContainer = styled.section`
    width: 80%;
    height: calc(100vh - 6rem);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 4rem;
    padding: 2rem;
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

    &:hover {
        transition: var(--transition-slow);
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