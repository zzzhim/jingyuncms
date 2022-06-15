import type { AppProps } from 'next/app'
import Head from 'next/head'
import { TokenKey } from '../utils/auth'
import PropTypes from 'prop-types'
import cookies from 'next-cookies'
import service from '../utils/request'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/css/aliicon.css" rel="stylesheet" type="text/css" />
        <link type="text/css" rel="stylesheet" href="/css/mxhtmlblack.css" />
        <link type="text/css" rel="stylesheet" href="/css/white.css" />
        <script src="/js/jquery.js"></script>
        <script type="text/javascript" src="/js/jquery.lazyload.js"></script>
        <script src="/js/jquery.autocomplete.js"></script>
        {/* <script src="/js/jquery.cookie.js"></script> */}
        <script type="text/javascript" src="/js/jquery.clipboard.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/layer.js"></script>
        {/* <script src="/js/script.js"></script> */}
      </Head>

      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

MyApp.getInitialProps = async (ctx: any) => {
  const Cookie = cookies(ctx?.ctx)

  if(Cookie[TokenKey]) {
    (service.defaults.headers as any).token = Cookie[TokenKey]
  }


  return {
    pageProps: {},
  }
}

export default MyApp
