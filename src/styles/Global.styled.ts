import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
        background-color: ${theme.colors.primaryBg};
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    h1 {
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
        color: ${theme.colors.accent};
        margin-top: 110px;
        margin-bottom: 20px;
    }
    
    h2 {
        font-family: "Playfair Display", sans-serif;
        font-weight: 700;
        font-size: 48px;
        text-align: center;
        line-height: 150%;
        color: ${theme.colors.fontMain};
    }
    
    h3 {
        font-family: "Playfair Display", sans-serif;
        font-weight: 700;
        font-size: 40px;
        color: ${theme.colors.fontMain};
    }
    
    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 1.5;
        color: ${theme.colors.fontText};
        text-align: left;
    }
`