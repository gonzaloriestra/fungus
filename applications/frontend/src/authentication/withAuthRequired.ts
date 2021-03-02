import { GetServerSideProps } from 'next';
import { PageRoute, withPageAuthRequired } from '@auth0/nextjs-auth0';

export function withServerAuthRequired(getServerSideProps: GetServerSideProps): PageRoute {
  return withPageAuthRequired({
    getServerSideProps,
  });
}

export function withClientAuthRequired(page: any): PageRoute {
  return withPageAuthRequired(page);
}
