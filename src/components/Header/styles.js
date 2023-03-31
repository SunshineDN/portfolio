import styled from 'styled-components';

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;

  & > svg {
    height: 100%;
    width: 100%;
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

export const HeaderContainer = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  position: absolute;
  z-index: 100 !important;

  @media (max-width: 953px) {
    width: 100%;
    justify-content: space-between;
    padding: 0 1em;

    & > ${LogoContainer} > h1 {
      font-size: .8em;
    }

    & > ${LogoContainer} > svg {
      height: 50%;
      width: 50%;
    }
      

    & > ${NavContainer} > ul {
      position: fixed;
      width: 100%;
      top: 0;
      left: 60vw;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: ${({theme}) => theme.secondary};
    }

    & > ${NavContainer} > ul > li {
      padding: 10px;
      height: 5%;
    }

    & > ${NavContainer} > ul > li > a {
      font-size: .8em;
    }

  }
`;