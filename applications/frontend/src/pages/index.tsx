import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header, Icon } from 'semantic-ui-react';
import { useUser } from '@auth0/nextjs-auth0';
import AuthenticationButton from '../authentication/components/AuthenticationButton';

export default function Home(): JSX.Element {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>Fungus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header as="h1">
          <Icon name="hand peace outline" />
          <Header.Content>Fungus. {user ? `Welcome ${user.nickname}` : ''}</Header.Content>
          <AuthenticationButton />
        </Header>
        <Header as="h2">
          <Link href="/locations">My Locations</Link>
        </Header>
        <Header as="h2">
          <Link href="/predictions">Make predictions</Link>
        </Header>
      </main>
    </div>
  );
}
