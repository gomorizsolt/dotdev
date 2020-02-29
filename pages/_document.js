/* eslint-disable */

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: <>{initialProps.styles}{sheet.getStyleElement()}</>
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
        </Head>
        <body style={{background: "#3f3f3f"}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
