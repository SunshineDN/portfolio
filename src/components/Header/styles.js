import styled from 'styled-components';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

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

export const NavMenu = styled(BiMenuAltRight)`
  display: none;
  position: absolute;
  top: 25%;
  right: 15px;
  height: 50%;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  color: ${({theme}) => theme.color};
`;

export const NavClose = styled(IoClose)`
  display: none;
  position: absolute;
  top: 25%;
  right: 15px;
  height: 50%;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  color: ${({theme}) => theme.color};
`;

export const NavList = styled.ul`
  gap: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s ease-in-out;
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
  margin: 25px auto 0 auto;
  position: absolute;
  z-index: 100 !important;

  @media (max-width: 953px) {
    width: 100%;
    justify-content: center;

    & > ${LogoContainer} > h1 {
      font-size: 1.5em;
    }

    & > ${LogoContainer} > svg {
      height: 50%;
      width: 50%;
    }

    & > ${NavMenu} {
      display: block;
    }

    & > ${NavClose} {
      display: block;
    }

    & > ${NavContainer} > ul {
      position: fixed;
      width: 100%;
      top: 0;
      left: ${({open}) => open ? '70vw' : '110vw'};
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: ${({theme}) => theme.secondary};
      padding: 40px 0 0 10px;
      gap: 20px;
    }

    & > ${NavContainer} > ul > li {
      padding: 10px;
      height: 5%;
    }

    & > ${NavContainer} > ul > li > a {
      font-size: 1.5em;
    }
  }

  @media (max-width: 768px) {
    & > ${NavContainer} > ul {
      left: ${({open}) => open ? '65vw' : '110vw'};
    }

    & > ${LogoContainer} > h1 {
      font-size: 1.2em;
    }

    & > ${NavContainer} > ul > li > a {
      font-size: 1.2em;
    }
  }

  @media (max-width: 700px) {
    & > ${NavContainer} > ul {
      left: ${({open}) => open ? '60vw' : '110vw'};
    }

    & > ${LogoContainer} > h1 {
      font-size: 1.1em;
    }

    & > ${NavContainer} > ul > li > a {
      font-size: 1.1em;
    }
  }

  @media (max-width: 600px) {
    & > ${NavContainer} > ul {
      left: ${({open}) => open ? '55vw' : '110vw'};
    }

    & > ${LogoContainer} > h1 {
      font-size: 1em;
    }

    & > ${NavContainer} > ul > li > a {
      font-size: 1em;
    }
  }

  @media (max-width: 500px) {
    & > ${NavContainer} > ul {
      left: ${({open}) => open ? '50vw' : '110vw'};
    }
  }

  @media (max-width: 425px) {
    & > ${NavContainer} > ul {
      left: ${({open}) => open ? '50vw' : '110vw'};
    }

    & > ${LogoContainer} > h1 {
      font-size: .9em;
    }

    & > ${NavContainer} > ul > li > a {
      font-size: .9em;
    }
  }

  @media (max-width: 375px) {
    & > ${NavContainer} > ul {
      left: ${({open}) => open ? '43vw' : '110vw'};
    }

    & > ${LogoContainer} > h1 {
      font-size: .7em;
    }

    & > ${NavContainer} > ul > li > a {
      font-size: .7em;
    }
  }


`;