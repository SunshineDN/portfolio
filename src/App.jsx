/* eslint-disable react/jsx-no-bind */
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import { themes } from './globalStyles';
import Header from './components/Header';

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  function handleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={themes[theme]}>

      <section id='home' style={{backgroundColor: themes[theme].background, paddingTop: '30px', height: '100vh'}}>
        <Header handleTheme={handleTheme} theme={themes[theme]} />
      </section>

      <section id='about' style={{backgroundColor: themes[theme].background, height: '100vh'}}>
        <h1 style={{color: themes[theme].color}}>SOBRE MIM</h1>
      </section>

      <section id='skills' style={{backgroundColor: themes[theme].background, height: '100vh'}}>
        <h1 style={{color: themes[theme].color}}>SKILLS</h1>
      </section>

      <section id='projects' style={{backgroundColor: themes[theme].background, height: '100vh'}}>
        <h1 style={{color: themes[theme].color}}>PROJETOS</h1>
      </section>

      <section id='services' style={{backgroundColor: themes[theme].background, height: '100vh'}}>
        <h1 style={{color: themes[theme].color}}>SERVIÇOS</h1>
      </section>

      <section id='contact' style={{backgroundColor: themes[theme].background, height: '100vh'}}>
        <h1 style={{color: themes[theme].color}}>CONTATO</h1>
      </section>

    </ThemeProvider>
  );
}
