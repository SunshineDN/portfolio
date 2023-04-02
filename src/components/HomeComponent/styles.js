import styled from 'styled-components';

export const HomeFirstParagraph = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.color};
    margin: 0;
    padding: 0;
`;

export const HomeTitle = styled.div`
    position: relative;
    left: -10px;
    font-size: 4em;
    font-weight: 600;
    color: ${({ theme }) => theme.color};
    z-index: 1 !important;

    & .Typewriter {
        position: relative !important;
        z-index: -1 !important;
    }

    & .Typewriter__cursor {
        z-index: 1 !important;

        &::after {
        content: '';
        position: absolute;
        height: 50px;
        width: 6px;
        background-color: ${({ theme }) => theme.color};
        margin-top: 15px;
        animation: blink 1s linear infinite;
        border-radius: 5px;
        z-index: 1 !important;

        @keyframes blink {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }

        @media (max-width: 953px) {
            height: 30px;
            margin-top: 6.5px;
            width: 3px;
        }
    }
`;

export const HomeSecondParagraph = styled.p`
    font-size: 16px;
    font-weight: 600;
    padding-top: 30px;
    color: ${({ theme }) => theme.color};
`;

export const HomeButton = styled.button`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.color};
    border: 1px solid ${({theme}) => theme.color};
    padding: 0.5em 1em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: 30px;

    &:hover {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
        border: 1px solid ${({theme}) => theme.color};
    }
`;

export const HomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    margin: 1em 0;
`;

export const HomeContainer = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    z-index: 1 !important;

    @media (max-width: 953px) {
        flex-direction: column;
        align-items: center;
        padding: 0 1em;

        & > svg {
            width: 50% !important;
            height: 50% !important;
            margin: 0;
        }

        & > ${HomeTextContainer} {
            width: 50%;
            margin: 1em 0;
        }

        & > ${HomeTextContainer} > ${HomeTitle} {
            font-size: 2em;
            left: -2px;
        }

        & > ${HomeTextContainer} > ${HomeFirstParagraph} {
            font-size: .8em;
        }

        & > ${HomeTextContainer} > ${HomeSecondParagraph} {
            font-size: .8em;
        }

        & > ${HomeTextContainer} > ${HomeButton} {
            font-size: .8em;
            padding: 0.3em 0.8em;
        }
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
`;