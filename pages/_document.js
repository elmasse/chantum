import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import { flush } from 'emotion'

const dev = process.env.NODE_ENV !== 'production'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    if (dev) { flush() }
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <title>Chantum</title>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:900" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}