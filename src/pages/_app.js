import React from 'react';
import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';

import AuthenticationMiddleware from '../authentication/AuthenticationMiddleware';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css" />
      </Head>
      <AuthenticationMiddleware>
        <Component {...pageProps} />
      </AuthenticationMiddleware>
    </>
  );
}
