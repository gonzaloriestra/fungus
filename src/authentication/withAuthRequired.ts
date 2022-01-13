import { PageRoute, withPageAuthRequired } from '@auth0/nextjs-auth0';

export function withClientAuthRequired(page: any): PageRoute<any, any> {
  return withPageAuthRequired(page);
}
