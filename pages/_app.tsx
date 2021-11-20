import Head from 'next/head'
import {CacheProvider} from "@emotion/react";
import {CssBaseline, ThemeProvider} from "@mui/material";
import createEmotionCache from "helpers/createEmotionCache"
const clientSideEmotionCache = createEmotionCache();
import "public/style.scss"
import theme from "../helpers/theme";

const Home = (props: { Component: any; emotionCache?: any; pageProps: any; }) => {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  return (
      <CacheProvider value={emotionCache}>
        <Head>
          <link rel="icon" href="/deer.ico"/>
          <title>Wishlist</title>
          <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Component {...pageProps} />
          </ThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      </CacheProvider>
  )
}

export default Home
