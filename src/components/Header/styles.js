import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 80%;
  height: 62px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;

  & > svg {
    height: 72px;
    width: 72px;
    object-fit: contain;
  }

  & > svg > path {
    fill: ${({theme}) => theme.primary};
  }

  & > h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 10px;
    color: ${({theme}) => theme.color};
  }
`;

export const NavContainer = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  gap: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & > a {
    color: ${({theme}) => theme.color};
    position: relative;
    padding: 5px;
    font-size: 18px;
    font-weight: 600;
  }

  & > a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.color};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease-in-out;
  }

  & > a:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
