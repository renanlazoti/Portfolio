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
        width: 100vw;
        height: 100vh;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    li {
        list-style: none;
    }


    :root{
        --color-primary: #407BFF;
        --color-secondary: #E8F1F2;
        --color-light: #fff;
        --color-dark: #000;

        --border-radius: 1rem;

        --transition-slow: all 200ms ease;
    }
`