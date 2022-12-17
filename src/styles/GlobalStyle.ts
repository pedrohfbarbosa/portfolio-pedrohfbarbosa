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
  --radius-rounded: 50%;

  --font-size-1: 32px;
  --font-size-2: 24px;
  --font-size-3: 20px;
  --font-size-4: 16px;
  --font-size-5: 14px;
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

  
`;
