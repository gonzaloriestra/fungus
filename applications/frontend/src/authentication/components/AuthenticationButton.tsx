import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const AuthenticationButton = (): JSX.Element => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return <a href="/api/auth/logout">Logout</a>;
  }

  return <Link href="/api/auth/login">Login/Signup</Link>;
};

export default AuthenticationButton;
