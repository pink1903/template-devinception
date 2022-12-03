import React from 'react';
import '../resources/scss/palettes/green-yard.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import SiteNav from '@/components/nav/SiteNav';
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <SiteNav />
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
