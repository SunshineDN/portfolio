import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
    a {
        text-decoration: none;
        color: black;
    }
    *:focus {
        outline: none;
    }
`;

export const themes = {
    dark: {
        background: '#1E1C1C',
        color: '#fff',
        primary: '#a71a2e',
        secondary: '#641515'
    },
    light: {
        background: '#fff',
        color: '#1E1C1C',
        primary: '#641515',
        secondary: '#a71a2e'
    }
};