/* eslint-disable react/jsx-no-bind */
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import { themes } from './globalStyles';
import Header from './components/Header';
import HomeComponent from './components/HomeComponent';
import { Section } from './AppStyles';

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || localStorage.setItem('theme', 'dark')
  );

  function handleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={themes[theme]}>

      <Header handleTheme={handleTheme} theme={themes[theme]} />
      <Section id='home'>
        <HomeComponent />
      </Section>

      <Section id='about'>
        <h1 style={{color: themes[theme].color}}>SOBRE MIM</h1>
      </Section>

      <Section id='skills'>
        <h1 style={{color: themes[theme].color}}>SKILLS</h1>
      </Section>

      <Section id='projects'>
        <h1 style={{color: themes[theme].color}}>PROJETOS</h1>
      </Section>

      <Section id='services'>
        <h1 style={{color: themes[theme].color}}>SERVIÇOS</h1>
      </Section>

      <Section id='contact'>
        <h1 style={{color: themes[theme].color}}>CONTATO</h1>
      </Section>

    </ThemeProvider>
  );
}
