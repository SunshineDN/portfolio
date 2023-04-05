/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import ReactSwitch from 'react-switch';
import React, { useState } from 'react';

import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  NavList,
  NavItem,
  NavMenu,
  NavClose,
} from './styles';

export default function Header({ handleTheme, handleOpen, theme, isOpen }) {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  function handleChangeOpen() {
    handleOpen();
  }

  function handleChange() {
    setIsChecked(!isChecked);
    handleTheme();
  }

  return (
    <HeaderContainer open={isOpen}>
      <LogoContainer onClick={
        () => {
          window.open('https://instagram.com/doug.cabral01', '_blank');
        }
      }>
        <Logo />
        <h1>Sunshine</h1>
      </LogoContainer>
      <NavContainer>
        <NavList>
          <NavItem>
            <a href="#about">Sobre mim</a>
          </NavItem>
          <NavItem>
            <a href="#skills">Skills</a>
          </NavItem>
          <NavItem>
            <a href="#projects">Projetos</a>
          </NavItem>
          <NavItem>
            <a href="#services">Serviços</a>
          </NavItem>
          <NavItem>
            <a href="#contact">Contato</a>
          </NavItem>
          <NavItem>
            <ReactSwitch
              checked={isChecked}
              onChange={handleChange}
              checkedHandleIcon={
                <MdOutlineNightlight
                  style={{ position: 'absolute', top: '7px', left: '7px' }}
                />
              }
              uncheckedHandleIcon={
                <MdOutlineLightMode
                  style={{ position: 'absolute', top: '7px', left: '7px' }}
                />
              }
              boxShadow='0 0 4px 1px rgba(0, 0, 0, 0.2)'
              offColor={theme.primary}
              onColor={theme.primary}
              handleDiameter={30}
              height={5}
              width={35}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </NavItem>
        </NavList>
      </NavContainer>
      {isOpen ? 
        <NavClose onClick={() => handleChangeOpen()} />
      : 
        <NavMenu onClick={() => handleChangeOpen()} />
      }
    </HeaderContainer>
  );
}
