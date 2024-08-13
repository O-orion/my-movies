import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Noto Sans", sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
`
// theme.ts
export const theme = {
    colors: {
      background: '#121212',
      primary: '#6200ee',
      text: '#fefefe',
    },
  };
