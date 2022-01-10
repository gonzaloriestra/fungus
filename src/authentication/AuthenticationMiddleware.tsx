import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

type AuthMiddlewareProps = {
  children: JSX.Element;
};

export default function AuthenticationMiddleware({ children }: AuthMiddlewareProps): JSX.Element {
  return <UserProvider>{children}</UserProvider>;
}
