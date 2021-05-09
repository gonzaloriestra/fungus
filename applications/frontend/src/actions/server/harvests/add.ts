import ServerFetcher from '../ServerFetcher';

export default async function add({ id, body, accessToken }): Promise<void> {
  return ServerFetcher.put(`/harvests/${id}`, {
    body,
    accessToken,
  });
}
