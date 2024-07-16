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

    section {
        padding: 12rem 0;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
        color: inherit;
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
`