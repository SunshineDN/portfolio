import styled from "styled-components";

import Background from './assets/bg-red.png';

export const Section = styled.section`
    background-color: ${({theme}) => theme.background};
    padding-top: 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${Background});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
    }
`;