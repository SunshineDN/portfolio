import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        scroll-behavior: smooth;
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
        primary: '#E9212A',
        secondary: '#641515',
        BGopacity: '1'
    },
    light: {
        background: '#fff',
        color: '#1E1C1C',
        primary: '#641515',
        secondary: '#E9212A',
        BGopacity: '0.2',
        headerColorFont: '#4f0e17'
    }
};