import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../config/theme'
import createEmotionCache from '../config/createEmotionCache'
import PropTypes from 'prop-types'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props

  return (
    // <Recoil.RecoilRoot initializeState={handleRecoilInit}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    // </Recoil.RecoilRoot>
  )
}


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

MyApp.getInitialProps = async (ctx: any) => {

  return {
    pageProps: {},
  }
}

export default MyApp
