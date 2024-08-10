import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
    }
`
// theme.ts
export const theme = {
    colors: {
      background: '#f0f0f0',
      primary: '#6200ee',
      text: '#000000',
    },
  };
