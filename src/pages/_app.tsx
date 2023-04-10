import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rocket League Training Calendar</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
