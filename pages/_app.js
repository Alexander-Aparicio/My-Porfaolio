import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from "react";
import themeDark from '../themes/dark';
import themeLight from '../themes/light';
import ButtonTheme from '../components/ButtonTheme';

const GlobalStyle = createGlobalStyle`
  html{box-sizing: border-box; scroll-behavior: smooth; }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  header {
    width: 100%;
  }
  main {
    width: 100%;
  }
  h1, h2, h3, a, div, article, section {
    margin: 0;
    padding: 0;
  } 
  input,select{
    border-style: none; 
    outline: inherit;
  }
  p, li, input {
    font-family: 'Lato', sans-serif;
  }
  @keyframes jaja {
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  }
  .react img {
    animation: jaja infinite 7s linear;
  }
`

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState(themeDark)
  const changeTheme = ()=> theme=== themeDark ? setTheme(themeLight) :setTheme(themeDark)

  return (
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ButtonTheme estado={theme} changeTheme={changeTheme}>THEME</ButtonTheme>
            <Component {...pageProps} />
          </ThemeProvider>
        ) 
}

export default MyApp
