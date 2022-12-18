import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  :root {
  --body-bg-color: #22212C;
  --text-color: #837E9F;
  --bg-cards: #302F3D;
  --bg-techs: #CB92B1;
  --border-color: #00FF00;

  --radius: 1.25rem;
  --radius-2: 0.7rem;
  --radius-rounded: 50%;

  --font-size-1: 2rem;
  --font-size-2: 1.5rem;
  --font-size-3: 1.25rem;
  --font-size-4: 1rem;
  --font-size-5: 0.875rem;
  --font-size-6: 0.75rem;
} 

  html {
    color-scheme: dark light;
  }

  body {
    min-height: 100vh;

    font-family: 'Merriweather Sans', sans-serif;

    background-color: var(--body-bg-color);
  }

  img,
  picture,
  svg,
  video {
    display: block;

    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;
