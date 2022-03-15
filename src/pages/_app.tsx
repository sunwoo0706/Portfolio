import type { AppProps } from 'next/app';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

import pallete from 'shared/Pallete';
import Star from 'components/Star';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          background-color: ${pallete.scheme.black};
          overflow: hidden;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Star />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
