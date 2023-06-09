import styled from "styled-components";

import Background from './assets/bg-red.png';

export const Section = styled.section`
    background-color: ${({theme}) => theme.background};
    padding-top: 30px;
    position: relative;
    z-index: 1;

    &:nth-child(2)::before {
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
        opacity: ${({theme}) => theme.BGopacity};
        z-index: -1;

        @media (max-width: 953px) {
            background-position: 0 0;
        }

        @media (max-width: 768px) {
        }

        @media (max-width: 700px) {
        }

        @media (max-width: 600px) {
        }

        @media (max-width: 425px) {
        }

        @media (max-width: 375px) {
        }
    }
`;