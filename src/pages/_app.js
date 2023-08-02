import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>opshort</title>
        <meta name="description" content="Opshort is a free, open-source URL shortener that's simple, fast, and reliable. We don't sell your data; we only collect it to track link clicks. No intrusive ads, just a smooth and hassle-free experience. We value your privacy and offer complete transparency with our 100% open-source approach. Trust Opshort for secure and efficient link shortening." />
        <meta name="keywords" content="opshort, url shortener, link shortener, free, open-source,
        open source, no ads, no ads url shortener, no ads link shortener, no ads free url shortener,
        no ads free link shortener, no ads free open-source url shortener, no ads free open-source link shortener,
        no ads free open source url shortener, no ads free open source link shortener, no ads free open-source url shortener," />
        <meta name="author" content="opshort" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://opshort.vercel.app/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@opshort" />
        <meta name="twitter:creator" content="@opshort" />
        <meta property="og:url" content="https://opshort.vercel.app" />
        <meta property="og:title" content="opshort" />
        <meta property="og:description" content="Opshort is a free, open-source URL shortener that's simple, fast, and reliable. We don't sell your data; we only collect it to track link clicks. No intrusive ads, just a smooth and hassle-free experience. We value your privacy and offer complete transparency with our 100% open-source approach. Trust Opshort for secure and efficient link shortening." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="opshort" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
