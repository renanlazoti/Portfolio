import styled from "styled-components";

export const Formation = styled.div`
  width: 40%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 0px;
  border-radius: var(--border-radius);
  border-bottom: .3rem solid var(--color-secondary);

  h2 {
    color: var(--color-primary);
  }

  h3 {
    margin-bottom: 1.2rem;
  }

  p {
    display: flex;
    align-items: center;
    font-size: .9rem;
    gap: 0.3rem;
    color: rgba(15, 15, 15, 0.568);
  }

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: -2.6rem;
    width: 1rem;
    height: 1rem;
    background-color: var(--color-secondary);
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.1);
    transition: var(--transition-slow);
    cursor: pointer;
    border-bottom: .3rem solid var(--color-primary);

    &:before {
      top: -1.7rem;
      transition: var(--transition-slow);
      background-color: var(--color-primary);
    }
  }
`