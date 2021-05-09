import ServerFetcher from '../ServerFetcher';

export default async function addLocation({ id, body, accessToken }): Promise<void> {
  return ServerFetcher.put(`/locations/${id}`, {
    body,
    accessToken,
  });
}
