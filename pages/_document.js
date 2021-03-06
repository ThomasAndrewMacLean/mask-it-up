import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
import { prefix } from '../utils';
import * as Sentry from '@sentry/browser';


Sentry.init({dsn: "https://e0100cc70b2149e5b99370f6c9a1883c@o186762.ingest.sentry.io/5215255"});


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-110018468-15"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-110018468-15', { 'anonymize_ip': true });`,
            }}
          ></script>

          <link rel="manifest" href={`${prefix}/manifest.json`} />

          <meta name="application-name" content="Draag een masker" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Draag een masker" />
          <meta name="description" content="Draag een masker" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* <meta
  name="msapplication-config"
  content="/browserconfig.xml"
/> */}
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          {/* <meta name="theme-color" content="#000000" /> */}
          {/* <meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
/> */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${prefix}/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${prefix}/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${prefix}/favicon-16x16.png`}
          />
          {/* <link
  rel="mask-icon"
  href="/safari-pinned-tab.svg"
  color="#5bbad5"
/> */}
          <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
          {/* <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
/> */}

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://draag-een-masker.ml/" />
          <meta name="twitter:title" content="Draag een masker" />
          <meta name="twitter:description" content="Draag een masker" />
          <meta
            name="twitter:image"
            content="https://draag-een-masker.ml/android-chrome-192x192.png"
          />

          <meta name="twitter:creator" content="@7homa5m" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Draag een masker" />
          <meta property="og:description" content="Draag een masker" />
          <meta property="og:site_name" content="Draag een masker" />
          <meta property="og:url" content="https://draag-een-masker.ml/" />
          <meta
            property="og:image"
            content="https://draag-een-masker.ml/apple-touch-icon.png"
          />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
          {/* 
          <script
            dangerouslySetInnerHTML={{
              __html: `  window.addEventListener('beforeinstallprompt', function(e) {
                e.preventDefault()
                return false;
            });`,
            }}
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
