import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    margin-top: 80px;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
`;

export const HomeFirstParagraph = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.color};
    margin: 0;
    padding: 0;
`;

export const HomeTitle = styled.h1`
    font-size: 6em;
    font-weight: 600;
    color: ${({ theme }) => theme.color};

    @media (max-width: 768px) {
        font-size: 1.5em;
    }

    @media (max-width: 480px) {
        font-size: 1em;
    }

    @media (max-width: 320px) {
        font-size: 0.8em;
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

export const HomeImage = styled.img`
    width: 100%;
    height: 100%;
    margin: 1em 0;
    z-index: 10;
`;

export const HomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    margin: 1em 0;
`;