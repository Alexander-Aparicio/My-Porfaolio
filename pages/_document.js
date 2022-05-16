import Document, {Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render(){
    return (
      <Html lang="es">
          <Head>
          <meta name="author" content="Alexander Meza R."></meta>
          <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
          <meta name="theme-color" content="#282C34"></meta>
          <meta property="og:locale" content="es_PE"></meta>
          <link rel="icon" href="/Alexander Meza.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Lato&family=Caveat:wght@500;700&display=swap" rel="stylesheet" />
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  );
  }
}