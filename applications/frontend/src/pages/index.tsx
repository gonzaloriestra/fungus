import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header, Icon } from 'semantic-ui-react';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Fungus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header as="h1">
          <Icon name="hand peace outline" />
          <Header.Content>Fungus</Header.Content>
        </Header>
        <Header as="h2">
          <Link href="/locations">My Locations</Link>
        </Header>
      </main>
    </div>
  );
}
