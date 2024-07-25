import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        height: 100vh;
    }
    
    :root{
        --color-primary: #407BFF;
        --color-secondary: #E8F1F2;
        --color-light: #fff;
        --color-dark: #000;

        --border-radius: 1rem;
        --border-radius2: .5rem;

        --transition-slow: all 200ms ease;
    }

    section {
        padding: 12rem 0;
        margin: 0 auto;

        @media (max-width: 1024px) {
            padding: 9rem 0
        }

        @media (max-width: 768px) {
            padding: 7.5rem 0;
        }
    }

    h1 {
        font-size: 4rem;

        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }

    h2 {
        font-size: 1.5rem;

        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    @keyframes slide-top {
        0% {
            -webkit-transform: translateY(-15%);
            transform: translateY(-15%);
            overflow: hidden;
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            overflow: hidden;
            opacity: 1;
            animation-timeline: scroll();
        }
    }

    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }

    }
`
